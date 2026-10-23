/**
 * Engine tests: drive the real src/scripts/library.ts against the real built
 * HTML in jsdom.
 *
 * Expectations are derived from the page's own data attributes rather than
 * hardcoded counts, so adding resources never breaks the suite.
 *
 *     npm test
 */

import { JSDOM } from 'jsdom';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');

async function boot() {
  const dom = new JSDOM(html, { url: 'https://example.test/', pretendToBeVisual: true });
  const { window } = dom;
  globalThis.window = window;
  globalThis.document = window.document;
  Object.defineProperty(globalThis, 'navigator', {
    value: window.navigator,
    configurable: true,
  });
  window.HTMLDialogElement.prototype.showModal = function () {
    this.open = true;
  };
  window.HTMLDialogElement.prototype.close = function () {
    this.open = false;
  };
  await import(new URL('../src/scripts/library.ts', import.meta.url).href);
  await settle();
  return window;
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const settle = () => sleep(200); // longer than the 120ms search debounce

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

/** Cards in visual order (CSS `order`, then DOM index as a tiebreak). */
function visibleTitles() {
  return $$('[data-card]')
    .filter((li) => !li.hidden)
    .map((li, index) => ({
      index,
      order: Number(li.style.order || 0),
      title: li.querySelector('[data-title-el]').textContent,
    }))
    .sort((a, b) => a.order - b.order || a.index - b.index)
    .map((card) => card.title);
}

const count = () => Number($('[data-result-count]').textContent);
const heading = () => $('[data-heading]').textContent;

function cards() {
  return $$('[data-resource]').map((el) => ({
    title: el.dataset.title,
    description: el.dataset.description,
    category: el.dataset.category,
    tags: el.dataset.tags.split('|').filter(Boolean),
    featured: el.dataset.featured === 'true',
    date: el.dataset.date,
  }));
}

/** Independent reimplementation of the intended matching rules. */
function expected({ query = '', category = null, tags = [] }) {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  return cards()
    .filter((card) => (category ? card.category === category : true))
    .filter((card) => tags.every((tag) => card.tags.includes(tag)))
    .filter((card) => {
      const haystack = [
        card.title,
        card.description,
        card.category,
        ...card.tags,
      ]
        .join(' ')
        .toLowerCase();
      return terms.every((term) => haystack.includes(term));
    });
}

function pressSearch(value, window) {
  const input = $('#library-search');
  input.value = value;
  input.dispatchEvent(new window.Event('input', { bubbles: true }));
}

function click(selector) {
  $(selector).click();
}

const results = [];
function check(name, actual, want) {
  const pass = JSON.stringify(actual) === JSON.stringify(want);
  results.push({ name, pass, actual, want });
}

// ---------------------------------------------------------------------------

const window = await boot();
const all = cards();

check('every resource rendered', all.length > 0, true);
check('initial count equals card count', count(), all.length);
check('initial heading', heading(), 'All resources');
check('search field starts empty', $('#library-search').value, '');

// Search ---------------------------------------------------------------
pressSearch('css', window);
await settle();
check('search matches derived set', visibleTitles().sort(), expected({ query: 'css' }).map((c) => c.title).sort());
check('search count', count(), expected({ query: 'css' }).length);
check('search highlights matches', $$('[data-title-el] mark, [data-description] mark').length > 0, true);

pressSearch('design system', window);
await settle();
check(
  'multi-term search is AND',
  visibleTitles().sort(),
  expected({ query: 'design system' }).map((c) => c.title).sort()
);

pressSearch('zzzznotathing', window);
await settle();
check('no results hides grid', $('[data-grid]').classList.contains('hidden'), true);
check('no results shows empty state', $('[data-empty-state]').classList.contains('hidden'), false);

pressSearch('', window);
await settle();
check('clearing search restores all', count(), all.length);

// Category -------------------------------------------------------------
click('[data-filter-category="learning"]');
check('category filters', count(), expected({ category: 'learning' }).length);
check('category heading', heading(), 'Learning');
check('category aria-pressed', $('[data-filter-category="learning"]').getAttribute('aria-pressed'), 'true');
check('category in url', window.location.search, '?category=learning');
check(
  'category results match',
  visibleTitles().sort(),
  expected({ category: 'learning' }).map((c) => c.title).sort()
);

click('[data-filter-category="learning"]');
check('category toggles off', count(), all.length);
check('url cleared', window.location.search, '');

// Tags -----------------------------------------------------------------
click('[data-filter-tag="CSS"]');
const withCss = expected({ tags: ['CSS'] });
check('single tag filters', count(), withCss.length);
check('tag aria-pressed', $('[data-filter-tag="CSS"]').getAttribute('aria-pressed'), 'true');

click('[data-filter-tag="JavaScript"]');
check('two tags use AND', visibleTitles().sort(), expected({ tags: ['CSS', 'JavaScript'] }).map((c) => c.title).sort());
check('two tags in url', window.location.search, '?tag=CSS&tag=JavaScript');

const cssCounter = $(`[data-count-tag="CSS"]`).textContent;
check('tag counts ignore own filter', cssCounter, String(expected({ tags: ['JavaScript'] }).filter((c) => c.tags.includes('CSS')).length));

// Cards are hidden, not removed — the grid keeps its server-rendered DOM.
check('hidden cards stay in dom', $$('[data-card]').length, all.length);

// Clearing -------------------------------------------------------------
click('[data-empty-state] [data-clear-filters], [data-clear-filters]:not([hidden])');
check('clear resets count', count(), all.length);
check('clear resets url', window.location.search, '');
check('clear resets heading', heading(), 'All resources');

// Sorting --------------------------------------------------------------
const sort = $('[data-sort]');
sort.value = 'az';
sort.dispatchEvent(new window.Event('change', { bubbles: true }));
check('A-Z starts at the alphabetically first title', visibleTitles()[0], [...all].map((c) => c.title).sort((a, b) => a.localeCompare(b))[0]);
check('sort in url', window.location.search, '?sort=az');

sort.value = 'newest';
sort.dispatchEvent(new window.Event('change', { bubbles: true }));
const newestFirst = [...all].sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title))[0];
check('newest starts at the latest date', visibleTitles()[0].slice(0, 0) + visibleTitles()[0], newestFirst.title);

sort.value = 'featured';
sort.dispatchEvent(new window.Event('change', { bubbles: true }));
check('featured first puts a featured card on top', all.find((c) => c.title === visibleTitles()[0]).featured, true);

// Card chips -----------------------------------------------------------
const chipTag = document.querySelector('[data-resource="figma"] [data-filter-tag]');
chipTag.click();
check('card chip activates that tag', count(), expected({ tags: [chipTag.textContent.trim()] }).length);
check('card chip shows in heading', heading(), `Tagged ${chipTag.textContent.trim()}`);
click('[data-clear-filters]:not([hidden])');

// Menu behaviour -------------------------------------------------------
const menu = $('[data-menu]');
menu.setAttribute('open', '');
document.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
check('escape closes kebab menu', menu.hasAttribute('open'), false);

// ---------------------------------------------------------------------------

console.log(
  results
    .map(
      (r) =>
        `${r.pass ? 'PASS' : 'FAIL'}  ${r.name}` +
        (r.pass ? '' : `\n      got:  ${JSON.stringify(r.actual)}\n      want: ${JSON.stringify(r.want)}`)
    )
    .join('\n')
);
const passed = results.filter((r) => r.pass).length;
console.log(`\n${passed}/${results.length} passed`);
process.exit(passed === results.length ? 0 : 1);
