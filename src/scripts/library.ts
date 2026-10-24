/**
 * The library engine: search, filtering, sorting and URL state.
 *
 * Progressive enhancement — every resource is already server-rendered and
 * linked, so with JS disabled the page is a complete, browsable list. This
 * module only adds live narrowing on top.
 */

interface Card {
  li: HTMLElement;
  el: HTMLElement;
  id: string;
  title: string;
  description: string;
  domain: string;
  category: string;
  tags: string[];
  featured: boolean;
  date: string;
  haystack: string;
  titleEl: HTMLElement | null;
  descriptionEl: HTMLElement | null;
}

interface State {
  query: string;
  category: string | null;
  tags: Set<string>;
  sort: 'newest' | 'az';
}

function init(scope: HTMLElement) {
  const cards = readCards(scope);
  if (cards.length === 0) return;

  const search = document.querySelector<HTMLInputElement>('#library-search');
  const heading = document.querySelector<HTMLElement>('[data-heading]');
  const countEl = document.querySelector<HTMLElement>('[data-result-count]');
  const nounEl = document.querySelector<HTMLElement>('[data-result-noun]');
  const footerCount = document.querySelector<HTMLElement>('[data-footer-count]');
  const emptyState = document.querySelector<HTMLElement>('[data-empty-state]');
  const grid = document.querySelector<HTMLElement>('[data-grid]');
  const sortSelect = document.querySelector<HTMLSelectElement>('[data-sort]');
  const total = cards.length;

  const categoryButtons = [
    ...document.querySelectorAll<HTMLButtonElement>('[data-filter-category]'),
  ];
  const tagButtons = [...document.querySelectorAll<HTMLButtonElement>('[data-filter-tag]')];
  const clearButtons = [...document.querySelectorAll<HTMLButtonElement>('[data-clear-filters]')];
  const dialog = document.querySelector<HTMLDialogElement>('[data-filter-dialog]');
  const applyFilters = document.querySelector<HTMLButtonElement>('[data-apply-filters]');
  const badge = document.querySelector<HTMLElement>('[data-filter-badge]');
  const allLink = document.querySelector<HTMLElement>('[data-nav-all]');
  const activeBar = document.querySelector<HTMLElement>('[data-active-filters]');
  const fuzzyNote = document.querySelector<HTMLElement>('[data-fuzzy-note]');
  const activeList = document.querySelector<HTMLElement>('[data-active-list]');
  const clearCategory = document.querySelector<HTMLButtonElement>('[data-clear-category]');

  const state: State = readUrl();

  // ---------------------------------------------------------------- search
  let debounce: number | undefined;
  if (search) {
    search.value = state.query;
    search.addEventListener('input', () => {
      window.clearTimeout(debounce);
      debounce = window.setTimeout(() => {
        state.query = search.value.trim();
        update();
      }, 120);
    });
    search.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && search.value !== '') {
        event.stopPropagation();
        search.value = '';
        state.query = '';
        update();
      }
    });
  }

  document.addEventListener('keydown', (event) => {
    const target = event.target as HTMLElement | null;
    const typing =
      !!target &&
      (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable);

    if (!typing && (event.key === '/' || ((event.metaKey || event.ctrlKey) && event.key === 'k'))) {
      event.preventDefault();
      search?.focus();
      search?.select();
      return;
    }

    if (event.key === 'Escape' && dialog?.open) dialog.close();
  });

  // --------------------------------------------------------------- filters
  categoryButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.dataset.filterCategory!;
      state.category = state.category === id ? null : id;
      update();
    });
  });

  tagButtons.forEach((button) => {
    button.addEventListener('click', () => {
      toggleTag(button.dataset.filterTag!);
    });
  });

  clearCategory?.addEventListener('click', () => {
    state.category = null;
    update();
  });

  clearButtons.forEach((button) => {
    button.addEventListener('click', () => {
      state.query = '';
      state.category = null;
      state.tags.clear();
      if (search) search.value = '';
      if (dialog?.open) dialog.close();
      update();
    });
  });

  if (sortSelect) {
    sortSelect.value = state.sort;
    sortSelect.addEventListener('change', () => {
      state.sort = sortSelect.value as State['sort'];
      update();
    });
  }

  // ----------------------------------------------------------- mobile sheet
  const openFilters = document.querySelector<HTMLButtonElement>('[data-open-filters]');
  openFilters?.addEventListener('click', () => {
    dialog?.showModal();
    // Land on something useful rather than the first control in the sheet.
    document.querySelector<HTMLButtonElement>('[data-close-filters]')?.focus();
  });
  document.querySelector<HTMLButtonElement>('[data-close-filters]')?.addEventListener('click', () => {
    dialog?.close();
  });
  applyFilters?.addEventListener('click', () => dialog?.close());
  dialog?.addEventListener('click', (event) => {
    // clicking the backdrop (the dialog element itself) closes
    if (event.target === dialog) dialog.close();
  });
  dialog?.addEventListener('close', () => {
    // Return focus to the control that opened the sheet.
    openFilters?.focus();
  });

  // ------------------------------------------------------- tag groups
  // Chips are grouped, and only the first few groups are shown until asked.
  const tagGroupSets = [...document.querySelectorAll<HTMLElement>('[data-tag-groups]')];
  const toggleTags = [...document.querySelectorAll<HTMLButtonElement>('[data-toggle-tags]')];

  tagGroupSets.forEach((set) => {
    if (set.querySelector('.tag-extra')) set.classList.add('is-collapsed');
  });
  toggleTags.forEach((button) => {
    button.hidden = false;
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      const panel = button.closest('[data-filter-panel]');
      panel
        ?.querySelectorAll<HTMLElement>('[data-tag-groups]')
        .forEach((set) => set.classList.toggle('is-collapsed', expanded));
      button.setAttribute('aria-expanded', String(!expanded));
      const label = button.querySelector('[data-toggle-tags-label]');
      if (label) {
        label.textContent = expanded
          ? (button.dataset.more ?? 'All tags')
          : (button.dataset.less ?? 'Fewer tags');
      }
    });
  });

  // ------------------------------------------------------------ the render
  function update() {
    const visible = render();
    syncUrl();
    announce(visible);
  }

  function render(): number {
    let matched = cards.filter((card) => matches(card, state));
    let fuzzy = false;

    // Rescue pass: a query like "javascrpt" should not dead-end the page.
    // It only runs when the strict search found nothing, so it costs nothing
    // in the common case.
    if (matched.length === 0 && state.query) {
      const terms = state.query.toLowerCase().split(/\s+/).filter(Boolean);
      const approx = cards.filter((card) => matchesApprox(card, state, terms));
      if (approx.length > 0) {
        matched = approx;
        fuzzy = true;
      }
    }

    matched.sort(comparator(state.sort));

    const order = new Map<HTMLElement, number>();
    matched.forEach((card, index) => order.set(card.li, index));

    cards.forEach((card) => {
      const hit = order.has(card.li);
      card.li.hidden = !hit;
      if (hit) {
        card.li.style.order = String(order.get(card.li));
        highlight(card, state.query);
      }
    });

    // counts, computed against the *other* active filters
    const categoryTotals = new Map<string, number>();
    categoryButtons.forEach((button) => {
      const id = button.dataset.filterCategory!;
      categoryTotals.set(
        id,
        cards.filter((card) => card.category === id && matches(card, { ...state, category: null }))
          .length
      );
    });

    const tagTotals = new Map<string, number>();
    tagButtons.forEach((button) => {
      const id = button.dataset.filterTag!;
      tagTotals.set(
        id,
        cards.filter((card) => {
          if (!card.tags.includes(id)) return false;
          const others = new Set(state.tags);
          others.delete(id);
          return matches(card, { ...state, tags: others });
        }).length
      );
    });

    if (clearCategory) clearCategory.setAttribute('aria-pressed', String(!state.category));

    categoryButtons.forEach((button) => {
      const id = button.dataset.filterCategory!;
      const active = state.category === id;
      const count = categoryTotals.get(id) ?? 0;
      button.setAttribute('aria-pressed', String(active));
      styleRow(button, active, count);
      const counter = button.querySelector<HTMLElement>(`[data-count-category="${id}"]`);
      if (counter) counter.textContent = String(count);
    });

    tagButtons.forEach((button) => {
      const id = button.dataset.filterTag!;
      const active = state.tags.has(id);
      const count = tagTotals.get(id) ?? 0;
      button.setAttribute('aria-pressed', String(active));
      styleRow(button, active, count);
      const counter = button.querySelector<HTMLElement>(`[data-count-tag="${id}"]`);
      if (counter) counter.textContent = String(count);
    });

    // headings and counters
    if (heading) heading.textContent = headingFor(state);
    if (countEl) countEl.textContent = String(matched.length);
    if (nounEl) nounEl.textContent = matched.length === 1 ? 'resource' : 'resources';
    if (footerCount) {
      footerCount.textContent = `${matched.length} of ${total} resources · curated by hand`;
    }
    // Use the property, not a class: the markup ships the `hidden` attribute
    // on the empty state, and an attribute beats a class — toggling the class
    // left the panel permanently invisible and a zero-result search blank.
    if (grid) grid.hidden = matched.length === 0;
    if (emptyState) emptyState.hidden = matched.length !== 0;

    if (fuzzyNote) {
      fuzzyNote.hidden = !fuzzy;
      if (fuzzy) {
        fuzzyNote.textContent = `No exact matches for “${state.query}” — showing close spellings.`;
      }
    }

    const anyFilter = isFiltered(state);
    clearCategory?.addEventListener('click', () => {
    state.category = null;
    update();
  });

  clearButtons.forEach((button) => {
      button.hidden = !anyFilter;
    });

    // "All resources" only reads as the current view when nothing is narrowed.
    if (allLink) {
      ['bg-mint-100', 'text-accent'].forEach((name) => allLink.classList.toggle(name, !anyFilter));
      allLink.classList.toggle('text-ink-soft', anyFilter);
    }

    renderActiveFilters();

    if (badge) {
      const activeCount = (state.category ? 1 : 0) + state.tags.size;
      badge.hidden = activeCount === 0;
      badge.textContent = String(activeCount);
    }
    if (applyFilters) {
      applyFilters.textContent =
        matched.length === 1 ? 'Show 1 resource' : `Show ${matched.length} resources`;
    }

    return matched.length;
  }

  /**
   * The "Showing …" bar. Without it, a narrowed view looked identical to a
   * filtered one that happened to be short — the main source of confusion.
   */
  function renderActiveFilters() {
    if (!activeBar || !activeList) return;

    const entries: { label: string; clear: () => void }[] = [];

    if (state.query) {
      entries.push({
        label: `“${state.query}”`,
        clear: () => {
          state.query = '';
          if (search) search.value = '';
        },
      });
    }

    if (state.category) {
      const label =
        document.querySelector<HTMLElement>(`[data-filter-category="${state.category}"]`)
          ?.dataset.label ?? state.category;
      entries.push({
        label,
        clear: () => {
          state.category = null;
        },
      });
    }

    [...state.tags].forEach((tag) => {
      entries.push({ label: tag, clear: () => state.tags.delete(tag) });
    });

    activeBar.hidden = entries.length === 0;
    activeList.textContent = '';

    entries.forEach((entry) => {
      const li = document.createElement('li');
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'chip chip--active';
      button.setAttribute('aria-label', `Remove filter: ${entry.label}`);
      button.append(entry.label);

      const cross = document.createElement('span');
      cross.className = 'chip__x';
      cross.setAttribute('aria-hidden', 'true');
      cross.textContent = '×';
      button.append(cross);

      button.addEventListener('click', () => {
        entry.clear();
        update();
        search?.focus({ preventScroll: true });
      });

      li.append(button);
      activeList.append(li);
    });
  }

  function announce(visible: number) {
    // countEl lives inside an aria-live region; nudge screen readers when the
    // number has not changed but the result set has.
    if (countEl) countEl.setAttribute('data-n', String(visible));
  }

  function toggleTag(tag: string) {
    if (state.tags.has(tag)) state.tags.delete(tag);
    else state.tags.add(tag);
    update();
  }

  function syncUrl() {
    const params = new URLSearchParams();
    if (state.query) params.set('q', state.query);
    if (state.category) params.set('category', state.category);
    [...state.tags].sort().forEach((tag) => params.append('tag', tag));
    if (state.sort !== 'newest') params.set('sort', state.sort);
    const query = params.toString();
    const next = `${window.location.pathname}${query ? `?${query}` : ''}`;
    window.history.replaceState(null, '', next);
  }

  update();
}

// ------------------------------------------------------------------ helpers

function readCards(scope: HTMLElement): Card[] {
  return [...scope.querySelectorAll<HTMLElement>('[data-card]')]
    .map((li) => {
      const el = li.querySelector<HTMLElement>('[data-resource]');
      if (!el) return null;
      // Read the text from the DOM rather than duplicating it into data
      // attributes — at 400 entries those copies cost real bytes.
      const title = el.querySelector<HTMLElement>('[data-title-el]')?.textContent?.trim() ?? '';
      const description =
        el.querySelector<HTMLElement>('[data-description]')?.textContent?.trim() ?? '';
      const category = el.dataset.category ?? '';
      const domain = el.querySelector<HTMLElement>('.r-card__domain')?.textContent?.trim() ?? '';
      const tags = (el.dataset.tags ?? '').split('|').filter(Boolean);
      return {
        li,
        el,
        id: el.dataset.resource ?? '',
        title,
        description,
        category,
        tags,
        featured: el.dataset.featured === 'true',
        date: el.dataset.date ?? '',
        // The domain belongs here: people search "github" or "figma" and mean
        // the site, not a word that happens to appear in a description.
        haystack: [title, domain, description, category, ...tags].join(' ').toLowerCase(),
        domain: domain.toLowerCase(),
        titleEl: el.querySelector<HTMLElement>('[data-title-el]'),
        descriptionEl: el.querySelector<HTMLElement>('[data-description]'),
      } satisfies Card;
    })
    .filter((card): card is Card => card !== null);
}

function matches(card: Card, state: State): boolean {
  if (state.category && card.category !== state.category) return false;
  if (state.tags.size > 0 && ![...state.tags].every((tag) => card.tags.includes(tag))) return false;
  if (state.query) {
    const terms = state.query.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.every((term) => card.haystack.includes(term))) return false;
  }
  return true;
}

/** Levenshtein distance, capped — we only care whether it is 0, 1 or more. */
function withinOneEdit(a: string, b: string): boolean {
  if (Math.abs(a.length - b.length) > 1) return false;
  let i = 0;
  let j = 0;
  let edits = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      i += 1;
      j += 1;
      continue;
    }
    edits += 1;
    if (edits > 1) return false;
    if (a.length > b.length) i += 1;
    else if (a.length < b.length) j += 1;
    else {
      i += 1;
      j += 1;
    }
  }
  return edits + (a.length - i) + (b.length - j) <= 1;
}

function matchesApprox(card: Card, state: State, terms: string[]): boolean {
  if (state.category && card.category !== state.category) return false;
  if (state.tags.size > 0 && ![...state.tags].every((tag) => card.tags.includes(tag))) return false;

  // Short terms are too easy to match by accident ("css" vs "cs").
  const words = card.haystack.split(/[^a-z0-9.+#-]+/).filter((word) => word.length > 2);

  return terms.every(
    (term) =>
      card.haystack.includes(term) ||
      (term.length >= 4 && words.some((word) => withinOneEdit(term, word)))
  );
}

function comparator(sort: State['sort']) {
  return (a: Card, b: Card) => {
    if (sort === 'az') return a.title.localeCompare(b.title);
    return b.date.localeCompare(a.date) || a.title.localeCompare(b.title);
  };
}

const ACTIVE_ROW = ['bg-mint-100', 'text-accent', 'font-medium'];
const ACTIVE_TILE = ['bg-teal-900', 'text-white'];
const IDLE_TILE = ['bg-mint-100', 'text-accent'];

function styleRow(button: HTMLButtonElement, active: boolean, count: number) {
  button.classList.toggle('opacity-45', !active && count === 0);

  // Chips (mobile category row, tag cloud) style themselves from aria-pressed.
  const isChip = button.classList.contains('chip');
  if (!isChip) ACTIVE_ROW.forEach((name) => button.classList.toggle(name, active));

  const tile = button.querySelector<HTMLElement>('[data-marker]');
  if (!tile) return;
  ACTIVE_TILE.forEach((name) => tile.classList.toggle(name, active));
  IDLE_TILE.forEach((name) => tile.classList.toggle(name, !active));
}

function headingFor(state: State): string {
  if (state.query) return `Results for “${state.query}”`;
  if (state.category) {
    const button = document.querySelector<HTMLElement>(
      `[data-filter-category="${state.category}"]`
    );
    const label = button?.dataset.label;
    if (label) return label;
  }
  if (state.tags.size === 1) return `Tagged ${[...state.tags][0]}`;
  if (state.tags.size > 1) return `${state.tags.size} tags`;
  return 'All resources';
}

function isFiltered(state: State): boolean {
  return Boolean(state.query) || Boolean(state.category) || state.tags.size > 0;
}

function readUrl(): State {
  const params = new URLSearchParams(window.location.search);
  const sort = params.get('sort');
  return {
    query: params.get('q')?.trim() ?? '',
    category: params.get('category'),
    tags: new Set(params.getAll('tag')),
    sort: sort === 'az' ? 'az' : 'newest',
  };
}

const MARK = 'bg-[#d5e9e6] text-inherit rounded-[3px] px-[1px] -mx-[1px]';

function highlight(card: Card, query: string) {
  paintText(card.titleEl, card.title, query);
  paintText(card.descriptionEl, card.description, query);
}

function paintText(el: HTMLElement | null, text: string, query: string) {
  if (!el) return;
  const needle = query.trim().toLowerCase();
  el.textContent = '';
  if (!needle) {
    el.textContent = text;
    return;
  }

  const haystack = text.toLowerCase();
  let cursor = 0;
  let index = haystack.indexOf(needle);

  while (index !== -1) {
    if (index > cursor) el.append(text.slice(cursor, index));
    const mark = document.createElement('mark');
    mark.className = MARK;
    mark.textContent = text.slice(index, index + needle.length);
    el.append(mark);
    cursor = index + needle.length;
    index = haystack.indexOf(needle, cursor);
  }

  if (cursor < text.length) el.append(text.slice(cursor));
}

// Module scripts are deferred, so the DOM is already parsed here. This stays at
// the bottom of the file so every helper above is initialised first.
const root = document.querySelector<HTMLElement>('[data-library="live"]');
if (root) init(root);
