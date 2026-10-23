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
  sort: 'featured' | 'newest' | 'az';
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

    if (event.key === 'Escape') {
      closeMenus();
      if (dialog?.open) dialog.close();
    }
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

  function closeMenus() {
    document.querySelectorAll<HTMLDetailsElement>('[data-menu][open]').forEach((menu) => {
      menu.open = false;
    });
  }

  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (!target.closest('[data-menu]')) closeMenus();
  });

  // ------------------------------------------------------- long tag lists
  const tagLists = [...document.querySelectorAll<HTMLElement>('[data-tag-list]')];
  const toggleTags = [...document.querySelectorAll<HTMLButtonElement>('[data-toggle-tags]')];

  tagLists.forEach((list) => {
    if (!list.querySelector('.tag-extra')) return;
    list.classList.add('is-collapsed');
  });
  toggleTags.forEach((button) => {
    button.hidden = false;
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      const panel = button.closest('[data-filter-panel]');
      panel?.querySelectorAll<HTMLElement>('[data-tag-list]').forEach((list) => {
        list.classList.toggle('is-collapsed', expanded);
      });
      button.setAttribute('aria-expanded', String(!expanded));
      const label = button.querySelector('[data-toggle-tags-label]');
      if (label) {
        label.textContent = expanded
          ? (button.dataset.more ?? 'Show all tags')
          : (button.dataset.less ?? 'Show fewer tags');
      }
    });
  });

  // --------------------------------------------------------- copy to clip
  document.addEventListener('click', async (event) => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>('[data-copy-link]');
    if (!button) return;
    const url = button.dataset.copyLink ?? '';
    try {
      await navigator.clipboard.writeText(url);
      const original = button.textContent;
      button.textContent = 'Copied';
      button.closest<HTMLDetailsElement>('[data-menu]')?.removeAttribute('open');
      window.setTimeout(() => {
        button.textContent = original;
      }, 1400);
    } catch {
      window.prompt('Copy this link', url);
    }
  });

  // ------------------------------------------------------------ the render
  function update() {
    const visible = render();
    syncUrl();
    announce(visible);
  }

  function render(): number {
    const matched = cards.filter((card) => matches(card, state));

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
    if (grid) grid.classList.toggle('hidden', matched.length === 0);
    if (emptyState) emptyState.classList.toggle('hidden', matched.length !== 0);

    const anyFilter = isFiltered(state);
    clearButtons.forEach((button) => {
      button.hidden = !anyFilter;
    });

    // "All resources" only reads as the current view when nothing is narrowed.
    if (allLink) {
      ['bg-mint-100', 'text-teal-900'].forEach((name) => allLink.classList.toggle(name, !anyFilter));
      allLink.classList.toggle('text-ink-soft', anyFilter);
    }

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
    if (state.sort !== 'featured') params.set('sort', state.sort);
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
      const title = el.dataset.title ?? '';
      const description = el.dataset.description ?? '';
      const category = el.dataset.category ?? '';
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
        haystack: [title, description, category, ...tags].join(' ').toLowerCase(),
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

function comparator(sort: State['sort']) {
  return (a: Card, b: Card) => {
    if (sort === 'az') return a.title.localeCompare(b.title);
    if (sort === 'newest') return b.date.localeCompare(a.date) || a.title.localeCompare(b.title);
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return b.date.localeCompare(a.date) || a.title.localeCompare(b.title);
  };
}

const ACTIVE_ROW = ['bg-mint-100', 'text-teal-900', 'font-medium'];

function styleRow(button: HTMLButtonElement, active: boolean, count: number) {
  button.classList.toggle('opacity-45', !active && count === 0);
  ACTIVE_ROW.forEach((name) => button.classList.toggle(name, active));

  const marker = button.querySelector<HTMLElement>('[data-marker]');
  if (!marker) return;
  marker.classList.toggle('bg-teal-700', active);
  marker.classList.toggle('border-teal-700', active);
  marker.classList.toggle('bg-white', !active);
  marker.classList.toggle('border-line-strong', !active);
  const tick = marker.querySelector('svg');
  if (tick) tick.classList.toggle('hidden', !active);
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
    sort: sort === 'newest' || sort === 'az' ? sort : 'featured',
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
