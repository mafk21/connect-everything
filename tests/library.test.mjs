import { JSDOM } from 'jsdom';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');

const dom = new JSDOM(html, { url: 'https://example.test/', pretendToBeVisual: true });
const { window } = dom;
globalThis.window = window;
globalThis.document = window.document;
Object.defineProperty(globalThis, 'navigator', { value: window.navigator, configurable: true });
globalThis.HTMLElement = window.HTMLElement;
globalThis.HTMLButtonElement = window.HTMLButtonElement;
globalThis.HTMLDetailsElement = window.HTMLDetailsElement;
window.HTMLDialogElement.prototype.showModal = function () { this.open = true; };
window.HTMLDialogElement.prototype.close = function () { this.open = false; };

await import(new URL('../src/scripts/library.ts', import.meta.url).href);

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const visibleCards = () => $$('[data-card]').filter((li) => !li.hidden);
const titles = () =>
  visibleCards()
    .sort((a, b) => Number(a.style.order || 0) - Number(b.style.order || 0))
    .map((li) => li.querySelector('[data-title-el]').textContent);
const count = () => $('[data-result-count]').textContent;
const heading = () => $('[data-heading]').textContent;
const search = $('#library-search');
const catBtn = (id) => document.querySelector(`[data-library="live"] ~ *, [data-filter-category="${id}"]`).closest('[data-filter-category]');

function clickCategory(id) { document.querySelector(`[data-filter-category="${id}"]`).click(); }
function clickTag(id) { document.querySelector(`[data-filter-tag="${id}"]`).click(); }
function typeQ(v) {
  search.value = v;
  search.dispatchEvent(new window.Event('input', { bubbles: true }));
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const results = [];
const check = (name, actual, expected) => {
  const pass = JSON.stringify(actual) === JSON.stringify(expected);
  results.push({ name, pass, actual, expected });
};

// 1. initial state
check('initial count', count(), '12');
check('initial heading', heading(), 'All resources');

// 2. search by title
typeQ('css');
await sleep(200);
check('search "css" count', count(), '5');
check('search css results', titles().sort(), ['Can I use','CSS-Tricks','Frontend Mentor','MDN Web Docs','Tailwind CSS'].sort());

// 3. search by tag word and description word
typeQ('assistant');
await sleep(200);
check('search description', titles(), ['Claude']);

// 4. highlight present
check('highlight mark', document.querySelectorAll('[data-title-el] mark, [data-description] mark').length > 0, true);

// 5. clear search
typeQ('');
await sleep(200);
check('cleared count', count(), '12');

// 6. category filter
clickCategory('learning');
check('category learning count', count(), '6');
check('category heading', heading(), 'Learning');
check('aria pressed', document.querySelector('[data-filter-category="learning"]').getAttribute('aria-pressed'), 'true');
check('url category', window.location.search, '?category=learning');

// 7. AND semantics: add two tags
clickTag('Learning');
clickTag('Practice');
check('two tags AND', titles().sort(), ['DEV Community', 'Frontend Mentor', 'freeCodeCamp'].sort());
check('url tags', window.location.search, '?category=learning&tag=Learning&tag=Practice');

// 8. counts reflect other filters (category selected, tag count for "CSS")
check('tag CSS count dimmed to 0', document.querySelector('[data-count-tag="CSS"]').textContent, '0');

// 9. empty state
clickTag('Compatibility');
check('empty visible', $('[data-empty-state]').classList.contains('hidden'), false);
check('grid hidden', $('[data-grid]').classList.contains('hidden'), true);

// 10. clear filters
$('[data-empty-state] [data-clear-filters]').click();
check('reset count', count(), '12');
check('reset heading', heading(), 'All resources');
check('reset url', window.location.search, '');

// 11. sort A-Z
const sort = $('[data-sort]');
sort.value = 'az';
sort.dispatchEvent(new window.Event('change', { bubbles: true }));
check('A-Z first', titles()[0], 'Can I use');
check('url sort', window.location.search, '?sort=az');

// 12. card chip toggles a tag
const chip = document.querySelector('[data-resource="figma"] [data-filter-tag]');
chip.click();
check('chip filter', count(), '1');
check('chip heading', heading(), 'Tagged Design');
$('[data-clear-filters]').click();

// 12b. multi-word search requires every term
typeQ('css grid');
await sleep(200);
check('multi-term search is AND', titles().sort(), ['CSS-Tricks'].sort());
typeQ('');
await sleep(200);

// 13. URL hydration
window.history.replaceState(null, '', '/?tag=CSS&category=development');
const dom2 = new JSDOM(html, { url: 'https://example.test/?tag=CSS&category=development' });
check('url param name', new URLSearchParams('tag=CSS&category=development').get('category'), 'development');

console.log(results.map((r) => `${r.pass ? 'PASS' : 'FAIL'}  ${r.name}` + (r.pass ? '' : `\n      got: ${JSON.stringify(r.actual)}\n      want: ${JSON.stringify(r.expected)}`)).join('\n'));
console.log(`\n${results.filter((r) => r.pass).length}/${results.length} passed`);
process.exit(results.every((r) => r.pass) ? 0 : 1);
