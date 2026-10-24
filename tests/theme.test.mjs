/**
 * Theme tests: drive the real src/scripts/theme.ts in jsdom.
 *
 * jsdom has no View Transitions API, so this exercises the fallback path —
 * which is the one that has to keep working everywhere. The reveal itself is
 * a progressive enhancement layered on top.
 *
 *     node --experimental-strip-types tests/theme.test.mjs
 */

import { JSDOM } from 'jsdom';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');
const moduleUrl = new URL('../src/scripts/theme.ts', import.meta.url).href;

const results = [];
const check = (name, actual, want) => {
  results.push({ name, actual, want, pass: JSON.stringify(actual) === JSON.stringify(want) });
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function boot({ stored = null } = {}) {
  const dom = new JSDOM(html, { url: 'https://example.test/', pretendToBeVisual: true });
  const { window } = dom;

  globalThis.window = window;
  globalThis.document = window.document;
  Object.defineProperty(globalThis, 'navigator', {
    value: window.navigator,
    configurable: true,
  });
  // The module uses the bare `localStorage` identifier, which in a browser is
  // a global — so the harness has to provide it, not just window.localStorage.
  Object.defineProperty(globalThis, 'localStorage', {
    value: window.localStorage,
    configurable: true,
  });

  if (stored) window.localStorage.setItem('theme', stored);
  else window.localStorage.clear();

  // Fresh module instance per boot, so init() runs against this document.
  const stamp = `${Date.now()}-${Math.random()}`;
  await import(`${moduleUrl}?boot=${stamp}`);
  await sleep(20);

  return window;
}

const button = () => document.querySelector('[data-theme-toggle]');
const themeAttr = () => document.documentElement.getAttribute('data-theme');

// 1. No stored choice ---------------------------------------------------
let window = await boot();

check('no stored choice leaves the OS in charge', themeAttr(), null);
check('button starts unpressed', button().getAttribute('aria-pressed'), 'false');
check('button offers the dark theme', button().getAttribute('aria-label'), 'Switch to dark theme');

// 2. Switching ----------------------------------------------------------
button().click();
await sleep(20);

check('clicking sets the explicit theme', themeAttr(), 'dark');
check('choice is persisted', window.localStorage.getItem('theme'), 'dark');
check('button reports pressed state', button().getAttribute('aria-pressed'), 'true');
check('label flips to the other direction', button().getAttribute('aria-label'), 'Switch to light theme');
check('fallback cross-fade is engaged', document.documentElement.hasAttribute('data-theme-switching'), true);
check(
  'browser chrome follows the theme',
  document.querySelector('meta[name="theme-color"]').getAttribute('content'),
  '#101a19'
);

button().click();
await sleep(20);

check('clicking again returns to light', themeAttr(), 'light');
check('light choice is persisted', window.localStorage.getItem('theme'), 'light');
check('label flips back', button().getAttribute('aria-label'), 'Switch to dark theme');

// 3. A stored choice is restored on load --------------------------------
window = await boot({ stored: 'dark' });

check('stored theme is applied on init', themeAttr(), 'dark');
check('stored theme is reflected by the button', button().getAttribute('aria-pressed'), 'true');

// 4. The head script must beat the first paint -------------------------
check(
  'an inline bootstrap script runs before paint',
  /<script>\s*\(\(\)\s*=>\s*\{[\s\S]*localStorage\.getItem\('theme'\)[\s\S]*?\}\)\(\);?\s*<\/script>/.test(
    html
  ),
  true
);
check('the bootstrap is inline, not deferred', /<script[^>]*src=[^>]*theme/.test(html.split('</head>')[0]), false);

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
