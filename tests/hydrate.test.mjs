import { JSDOM } from 'jsdom';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');
const url = 'https://example.test/?category=learning&tag=Practice&q=free&sort=az';
const dom = new JSDOM(html, { url, pretendToBeVisual: true });
const { window } = dom;
globalThis.window = window;
globalThis.document = window.document;
Object.defineProperty(globalThis, 'navigator', { value: window.navigator, configurable: true });
window.HTMLDialogElement.prototype.showModal = function () { this.open = true; };
window.HTMLDialogElement.prototype.close = function () { this.open = false; };

await import(new URL('../src/scripts/library.ts', import.meta.url).href);
await new Promise((r) => setTimeout(r, 50));

const $ = (s) => document.querySelector(s);
const visible = [...document.querySelectorAll('[data-card]')].filter((li) => !li.hidden);
console.log('cards visible:', visible.map((li) => li.querySelector('[data-title-el]').textContent));
console.log('count:', $('[data-result-count]').textContent);
console.log('heading:', $('[data-heading]').textContent);
console.log('search value:', $('#library-search').value);
console.log('sort value:', $('[data-sort]').value);
console.log('category pressed:', $('[data-filter-category="learning"]').getAttribute('aria-pressed'));
console.log('tag pressed:', $('[data-filter-tag="Practice"]').getAttribute('aria-pressed'));
console.log('clear visible:', !$('[data-clear-filters]').hidden);
console.log('url preserved:', window.location.search);
