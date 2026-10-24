# Connect Everything

**A public, hand-curated toolbox of the useful internet** — websites, tools, tutorials and references worth keeping. Browse, search, filter, and click straight through to the thing you need.

**533 resources · 9 categories · 64 tags · no accounts · no tracking · no ads**

![Connect Everything](public/og-default.png)

```bash
npm install
npm run dev      # http://localhost:4321
```

---

## Why it exists

The web is full of lists that were generated instead of curated. This is the opposite: a small, deliberate library where everything earned its place, and the only thing a visitor has to do is click.

- **One click out.** The whole card is a link. No detail page, no interstitial, no "read more".
- **No account wall.** Visitors browse freely; there is nothing to sign up for.
- **Nothing is for sale.** No sponsored entries, no affiliate links, no ads.
- **Honest metadata.** No view counters or "trending" numbers, because they cannot be computed honestly without tracking visitors. Featured entries get a small badge instead.

## What's inside

| Category | Entries | What it covers |
|---|---|---|
| Design | 50 | UI tools, type, colour, icons, UX research |
| Development | 92 | Frameworks, runtimes, testing, databases, AI coding agents |
| Learning | 60 | Courses, practice sites, newsletters, podcasts, AI fundamentals |
| Tools | 50 | CLI, automation, small web utilities |
| Productivity | 50 | Notes, tasks, calendars, email, time |
| Media | 50 | Photos, video, audio, icons, editors, conversion |
| Data & AI | 81 | LLM APIs, agents, RAG, fine-tuning, evals, data tooling |
| Security | 50 | Red teaming, blue teaming, bug bounties, OSINT, forensics |
| Reference | 50 | Specs, docs, standards, cheatsheets |

**533 entries across 504 distinct domains.** Thirteen domains carry more than one entry. GitHub accounts for 17 — each a separate open-source project (ripgrep, fzf, llama.cpp, Sigma-style rules and others) — and Hugging Face for 3 (models, Learn, PEFT). The rest are sites that genuinely cover two things: Figma and FigJam, Svelte and SvelteKit, MDN's reference and its tutorials.

Plus **12 "Start here" picks** on [`/featured`](src/pages/featured.astro), and a controlled tag vocabulary of **64 terms, grouped into seven families** — every one in use, none drifting into synonyms.

## Features

**Browsing**
- Sidebar categories (single-select) with icons and counts
- Tags (multi-select, **AND** semantics) as a chip cloud grouped by family — Discipline, Format, Subject, Security, AI & LLM, Practice, Qualities — with the last four folded away until asked for
- Categories also appear as a scrolling chip row on small screens, where the sidebar is hidden
- An applied-filter bar names everything currently narrowing the view and lets you remove it one chip at a time
- Sort by newest or A–Z
- Counts recalculated against your *other* active filters, so you always see what is reachable

**Search**
- Matches title, domain, description, category and tags — so `github` and `figma` work as site searches, not just word matches
- Multi-word queries are AND (`css grid` → CSS-Tricks, and nothing else)
- A rescue pass allows one typo per word (`javascrpt`) and says so when it kicks in, instead of dead-ending on a blank page
- Matches highlighted in place; `/` or `⌘K` focuses the field, `Esc` clears it

**Every view is linkable**
- Query, category, tags and sort are mirrored in the URL
- `?q=free&category=learning&tag=Practice&sort=az` restores exactly that view

**Every collection has its own page**
- `/category/<id>` and `/tag/<slug>` are real static pages with their own title, description, canonical URL and `ItemList` structured data — 73 of them, all in the sitemap
- The sidebar and card chips link to those pages, and the footer carries a crawlable link to every category
- `/new` lists the 40 most recent additions; `/rss.xml` carries the same set as a feed

**Details that matter**
- **Light/dark toggle** in the header of every page. The choice is saved and wins over the operating system; with nothing saved, the site follows the OS live
- The switch plays a **circular reveal** from the button using the View Transitions API, with a short cross-fade fallback for browsers that lack it, and no animation at all under `prefers-reduced-motion`
- A blocking inline script applies a saved theme before first paint, so there is no light flash on load
- Every text pair clears WCAG AA in both themes (lowest measured 6.57:1 in dark)
- Favicons are fetched once into `public/icons/` rather than loaded from a third party on every visit
- Tag chips on a card add that tag to your filters
- One action per card: the whole card opens the resource in a new tab
- Works without JavaScript: the grid is server-rendered and every card links out
- Favicon with a deterministic monogram fallback, so a slow or blocked icon never leaves a blank tile

## Routes

| Route | Purpose |
|---|---|
| `/` | The library — all resources, live filtering |
| `/category/<id>` | One page per category (9) |
| `/tag/<slug>` | One page per tag in use (64) |
| `/featured` | Start here — the twelve picks to open first |
| `/new` | The 40 most recently added entries |
| `/rss.xml` | Feed of the same recent additions |
| `/suggest` | How to suggest a resource, via GitHub (deep-links the issue form) |
| `/robots.txt` | Generated, so the sitemap URL always matches the deployed domain |
| `/404` | Search, category shortcuts and three picks instead of a dead end |

## Accessibility

- One `h1` per page, landmark structure, skip link, visible focus rings everywhere
- Filters are real toggle buttons with `aria-pressed`; result counts are announced politely
- The mobile filter sheet traps focus, closes on `Escape`/backdrop, and returns focus to its trigger
- Contrast audited: body and meta text clear **AA** on both canvas and card surfaces (`--color-ink-muted` was moved from `#7c8b8a`, which measured 3.55:1, to `#5c6e6c` at 5.38:1)
- All motion respects `prefers-reduced-motion`
- Fully usable with JavaScript disabled — filtering degrades to plain category links

## Tech

**Astro 6** (static output) · **Tailwind CSS 4** · **TypeScript** · self-hosted **Inter**

No client framework, no state library, no database, no backend. The interactive layer is a single 7.7 KB TypeScript module (2.8 KB gzipped) that enhances already-rendered HTML. Requires Node `>= 22.12`.

```
connect-everything/
├── src/
│   ├── data/            # the library — resources, categories, tags
│   ├── components/      # card, sidebar, filters, favicon, brand, ornaments
│   ├── layouts/         # base shell + library layout
│   ├── lib/             # derive (domain/favicon/dates) + build-time validation
│   ├── scripts/         # search, filter, sort engine
│   ├── pages/           # index, featured, suggest, 404
│   └── styles/          # design tokens
├── tests/               # engine tests against the real built HTML
├── scripts/             # link checker, OG image generator
├── docs/PLAN.md         # product + technical plan, milestone by milestone
└── public/              # favicon, robots.txt, OG card
```

## Adding a resource

Everything lives in one file: [`src/data/resources.ts`](src/data/resources.ts). Add an object, run the build, open a pull request.

```ts
{
  id: 'css-tricks',                       // kebab-case, unique
  title: 'CSS-Tricks',
  url: 'https://css-tricks.com',          // https only
  description:
    'A long-running publication about CSS and front-end craft, with the deepest explainers anywhere on layout, grid, and the odd corners of the cascade.',
  category: 'learning',                   // one of 8
  tags: ['CSS', 'Layout', 'Tips'],        // 1–5, from the vocabulary
  featured: true,                         // optional — curator's pick
  dateAdded: '2026-01-12',                // YYYY-MM-DD
}
```

**Derived automatically — never type these:** the domain, the favicon, and every sidebar count.

**Rules, enforced at build time.** `npm run build` fails with a specific message naming the entry and the field, so a malformed resource can never reach the published library.

| Field | Rule |
|---|---|
| `id` | kebab-case, unique |
| `url` | absolute, `https`, no duplicates (`www` and trailing slashes are normalised) |
| `description` | 60–220 characters, written in a human voice |
| `category` | one of the 8 in `src/data/categories.ts` |
| `tags` | 1–5, each already in `src/data/tags.ts` |
| `dateAdded` | `YYYY-MM-DD`, not in the future |

Descriptions in the current library run 98–178 characters (mean 147). Adding a *tag* means adding one line to [`src/data/tags.ts`](src/data/tags.ts) first — the controlled vocabulary is what stops the sidebar fragmenting into `js` / `javascript` / `JavaScript`.

**What gets in:** still online and maintained · free, or worth the price · useful before you sign up · something a person would genuinely return to.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Dev server on `:4321` |
| `npm run build` | Static build to `dist/`, validating every entry |
| `npm run preview` | Serve the production build locally |
| `npm test` | Build, then run both test suites against the real HTML |
| `npm run check` | Type-check `.astro` and `.ts` files |
| `npm run links` | Sweep every resource URL for dead links (needs real internet; runs weekly in CI) |
| `npm run icons` | Fetch one favicon per domain into `public/icons/` (needs real internet) |
| `npm run og` | Regenerate the OG card (needs `pillow`, `fonttools`, `brotli`) |

## Testing

`npm test` builds the site, then drives the real engine module against the real built HTML in jsdom — not a mocked DOM.

- **53 assertions** on the library page: search (single and multi-term AND, domain search, typo rescue, highlighting), category and tag filtering, post-filter counts, ARIA state, URL sync, both sorts, empty state, applied-filter chips, grouped tag collapse, the mobile category row, and clearing.
- **16 assertions** on theming: switching applies and persists a choice, the button's label and `aria-pressed` track it, a stored choice is restored on load, the browser-chrome colour follows, the fallback cross-fade engages, and the bootstrap script is inline rather than deferred.
- **15 assertions** on the static pages: no dead filter buttons where there is no engine, the search box works as a plain form, cards open in a new tab, chips point at the tag pages, every page has its own title and canonical, and the feed and robots file are correct.
- **8 assertions** in a separate process: a shared link restores query, category, tag and sort, every visible card genuinely matches, and the URL is left untouched on load.

Expectations are derived from the page's own data attributes rather than hardcoded counts, so growing the library never breaks the suite. Every resource is server-rendered before JavaScript runs, so a broken script degrades to a plain, fully linked list rather than a blank page.

## Performance

Measured on the 533-entry build:

| Asset | Gzipped |
|---|---|
| HTML (`/`) | 133.6 KB |
| HTML (`/category/security`) | 20.3 KB |
| CSS | 7.4 KB |
| JS | 3.2 KB |

78 pages, 10 MB of output in total. The per-category and per-tag pages mean a visitor who arrives from a search result gets a 20 KB page instead of the 133 KB index.

Favicons are lazy-loaded in a fixed-size box, so they cannot shift layout, and are served from `public/icons/` once `npm run icons` has run — before that they fall back to a remote lookup.

**The HTML is now the biggest asset.** At 400 entries the page is 1.16 MB raw and 111 KB gzipped, because every card is server-rendered so that the library works without JavaScript and stays crawlable. Three optimisations applied so far: one SVG sprite instead of four inlined icons per card, component classes instead of repeated utility strings (together cutting 1.96 MB to 1.16 MB at 400 entries), and `content-visibility: auto` on cards so off-screen entries skip layout and paint entirely.

The per-category pages above absorb most of this: the heavy document is now only the "everything" view. If the collection grows much beyond 550, the remaining lever is paginating that one page — render the first ~60 cards and load the rest on demand — at the cost of the "everything visible at once" behaviour.

**Not yet measured:** Lighthouse and 200% zoom, because this environment has no browser. Both are one-command checks on a real machine — see *Known gaps* below.

## Deployment

Static output: any host that serves files. On Vercel, Astro is detected automatically — build `npm run build`, output `dist`. No environment variables, secrets, database or server functions.

**Before launch**

1. Nothing, on Vercel: `VERCEL_PROJECT_PRODUCTION_URL` is picked up automatically, so canonical URLs, `og:url`, the sitemap and `robots.txt` all point at the production host — including from preview builds. Anywhere else, set `SITE_URL`. A build with neither falls back to `https://connecteverything.example`, so a misconfiguration is visible rather than silent.
2. Run `npm run icons` once and commit the result, so the icons are served locally rather than from a third party.
3. Run `npm run links` (or wait for the Monday CI run) to confirm nothing has died since it was added.

## Automation

| Workflow | When | What it does |
|---|---|---|
| `ci.yml` | Every PR and push to `main` | `npm ci`, `astro check`, build and both test suites |
| `maintenance.yml` | Mondays 06:00 UTC, or on demand | Runs the dead-link sweep and files or updates a `link-check` issue; refreshes `public/icons` into a PR |

## Known gaps

- **Lighthouse / 200% zoom** unverified (no browser in the environment that built this).
- **Dead-link sweep** has not run against the live web yet — this sandbox cannot reach arbitrary hosts. The weekly workflow does it from GitHub's runners from the first merge onwards.
- **Icons** ship unfetched: `public/icons/` is empty until `npm run icons` runs, so the first build falls back to the remote favicon lookup. The Monday workflow fills it in via PR.
- **Project name** is still a placeholder from the planning stage (`docs/PLAN.md` §11).

## Contributing

Suggestions go through GitHub, as described on the site's `/suggest` page:

- **Quick:** [open an issue](https://github.com/mafk21/connect-everything/issues/new) with a link and a line on why it belongs.
- **Hands-on:** edit [`src/data/resources.ts`](src/data/resources.ts) and open a pull request.

Everything is reviewed by the curator before it appears — nothing is published automatically.

## License

MIT — see [`LICENSE`](LICENSE). The library itself is a set of links; each destination keeps its own terms.
