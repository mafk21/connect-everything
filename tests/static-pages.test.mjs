/**
 * Static page tests: /category and /tag have no engine, so nothing on them may
 * depend on JavaScript to work.
 *
 *     node --experimental-strip-types tests/static-pages.test.mjs
 */

import { readFileSync } from 'node:fs';

const read = (path) => readFileSync(new URL(`../dist/${path}`, import.meta.url), 'utf8');

const results = [];
const check = (name, actual, want) => {
  results.push({ name, actual, want, pass: JSON.stringify(actual) === JSON.stringify(want) });
};

const category = read('category/security/index.html');
const tag = read('tag/llm/index.html');

// Nothing may render a filter button on a page with no engine: a button that
// silently does nothing is worse than no button at all.
check('category page has no dead filter buttons', /data-filter-category=/.test(category), false);
check('category page has no filter dialog trigger', /data-open-filters/.test(category), false);
check('tag page has no dead filter buttons', /data-filter-tag=/.test(tag), false);

// ...but navigation must still be there, as links.
check('category page links to categories', /href="\/category\/design"/.test(category), true);
check('tag page links to tags', /href="\/tag\/[a-z0-9-]+"/.test(tag), true);

// The search box must be a form so it works with JavaScript disabled.
check(
  'search is a form posting to the library',
  /<form action="\/" method="get"/.test(category),
  true
);

// Cards link straight to the destination, in a new tab, and chips go to the
// static tag pages rather than back through the live index.
check('cards open in a new tab', /target="_blank"/.test(category), true);
check(
  'card chips point at static tag pages',
  /href="\/tag\/[a-z0-9-]+" class="chip"/.test(tag),
  true
);

// Every page must carry its own canonical and title.
check('category page has its own title', /<title>Security resources/.test(category), true);
check('tag page has its own title', /<title>LLM —/.test(tag), true);

// Machine-readable files.
const rss = read('rss.xml');
check('rss is well-formed-ish', rss.startsWith('<?xml'), true);
check('rss has items', (rss.match(/<item>/g) ?? []).length > 0, true);
check('rss carries no bogus comments element', /<comments>/.test(rss), false);
check('robots points at the sitemap', /Sitemap: .*sitemap-index\.xml/.test(read('robots.txt')), true);

// The canonical host must follow the environment, never a stale literal.
const canonical = category.match(/rel="canonical" href="([^"]+)"/)?.[1] ?? '';
const expectedHost = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? 'connecteverything.example';
check('canonical follows the configured site', canonical.includes(expectedHost), true);

console.log(
  results
    .map(
      (r) =>
        `${r.pass ? 'PASS' : 'FAIL'}  ${r.name}` +
        (r.pass
          ? ''
          : `\n      got:  ${JSON.stringify(r.actual)}\n      want: ${JSON.stringify(r.want)}`)
    )
    .join('\n')
);
const passed = results.filter((r) => r.pass).length;
console.log(`\n${passed}/${results.length} passed`);
process.exit(passed === results.length ? 0 : 1);
