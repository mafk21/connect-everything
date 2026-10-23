/**
 * URL hydration test, in its own process so no timers leak across jsdom boots.
 *
 * Proves that a shared link restores the exact view: query, category, tags and
 * sort all come back, and the URL is left untouched on load.
 */

import { JSDOM } from 'jsdom';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');
const url = 'https://example.test/?q=free&category=learning&tag=Practice&sort=az';

const dom = new JSDOM(html, { url, pretendToBeVisual: true });
const { window } = dom;
globalThis.window = window;
globalThis.document = window.document;
Object.defineProperty(globalThis, 'navigator', { value: window.navigator, configurable: true });
window.HTMLDialogElement.prototype.showModal = function () {
  this.open = true;
};
window.HTMLDialogElement.prototype.close = function () {
  this.open = false;
};

await import(new URL('../src/scripts/library.ts', import.meta.url).href);
await new Promise((resolve) => setTimeout(resolve, 100));

const $ = (selector) => document.querySelector(selector);
const visible = [...document.querySelectorAll('[data-card]')]
  .filter((li) => !li.hidden)
  .map((li) => li.querySelector('[data-title-el]').textContent);

const results = [];
const check = (name, actual, want) => {
  const pass = JSON.stringify(actual) === JSON.stringify(want);
  results.push({ name, pass, actual, want });
};

check('category restored', $('[data-filter-category="learning"]').getAttribute('aria-pressed'), 'true');
check('tag restored', $('[data-filter-tag="Practice"]').getAttribute('aria-pressed'), 'true');
check('search text restored', $('#library-search').value, 'free');
check('sort restored', $('[data-sort]').value, 'az');
check('clear-filters offered', $('[data-clear-filters]').hidden, false);
check('url left untouched', window.location.search, '?q=free&category=learning&tag=Practice&sort=az');
check('results narrowed', visible.length < document.querySelectorAll('[data-card]').length, true);
check(
  'every visible card really matches',
  visible.length > 0 &&
    [...document.querySelectorAll('[data-card]')]
      .filter((li) => !li.hidden)
      .every((li) => {
        const card = li.querySelector('[data-resource]');
        return card.dataset.category === 'learning' && card.dataset.tags.includes('Practice');
      }),
  true
);

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
