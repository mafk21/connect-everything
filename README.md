# Connect Everything

**A public, hand-curated toolbox of the useful internet** — websites, tools, tutorials and references worth keeping. Browse it, search it, filter it, and click straight through to the thing you need.

No accounts. No login. No tracking. Every entry is picked by a person, described in a sentence, and reviewed before it goes live.

```
npm install && npm run dev    →  http://localhost:4321
```

---

## Why it exists

The web is full of lists that were generated instead of curated. This is the opposite: a small, deliberate library where everything in it earned its place, and the only thing a visitor has to do is click.

- **One click out.** The whole card is a link. No detail page, no interstitial, no "read more".
- **No account wall.** Visitors browse freely; there is nothing to sign up for.
- **Nothing is for sale.** No sponsored entries, no affiliate links, no ads.
- **Honest metadata.** No view counters or "trending" numbers, because we cannot compute them honestly without tracking you.

## What's built

| Area | Status |
|---|---|
| Static site, design system, responsive shell | ✅ Done |
| Resource cards, favicons with monogram fallback | ✅ Done |
| Live search with match highlighting | ✅ Done |
| Category + tag filtering with live counts | ✅ Done |
| Sorting, shareable URLs, empty state | ✅ Done |
| Mobile filter sheet, keyboard shortcuts | ✅ Done |
| `/404`, footer nav, keyboard and motion polish | ✅ Done |
| Sitemap, robots, JSON-LD, OG card, link checker | ✅ Done |
| Library expanded to 94 resources | ✅ Done |
| Lighthouse and 200% zoom verification | ⏳ Needs a browser |

**94 resources** across **8 categories**, drawn from a controlled **35-tag vocabulary**. Full plan and milestone history: [`docs/PLAN.md`](docs/PLAN.md).

## Features

**Browsing**
- Sidebar categories (single-select) and tags (multi-select, **AND** semantics)
- Counts that recalculate against your *other* active filters, so you always see what's reachable
- Sort by featured first, newest, or A–Z

**Search**
- Matches title, domain, description, category and tags
- Multi-word queries are AND (`css grid` → only CSS-Tricks)
- Matches highlighted in place; press `/` or `⌘K` to focus, `Esc` to clear

**Everything is shareable**
- Every filter, query and sort is mirrored in the URL
- `?q=free&category=learning&tag=Practice&sort=az` restores exactly that view

**Details that matter**
- Tag chips on a card are clickable — they add that tag to your filters
- Kebab menu: open in a new tab, or copy the link
- Works without JavaScript: the grid is server-rendered and every card links out
- Keyboard operable throughout, with visible focus rings and polite result announcements

## Routes

| Route | Purpose |
|---|---|
| `/` | The library (all resources, live filtering) |
| `/featured` | Curator's picks |
| `/suggest` | How to suggest a resource, via GitHub |

## Tech

**Astro 6** (static output) · **Tailwind CSS 4** · **TypeScript** · self-hosted **Inter**

No client framework, no state library, no database, no backend. The interactive layer is ~7 KB of vanilla TypeScript that enhances already-rendered HTML. Requires Node `>= 22.12`.

```
~/connect-everything
├── src/
│   ├── data/            # the library — categories, tags, resources
│   ├── components/      # cards, sidebar, filters, favicon, brand
│   ├── layouts/         # base shell + library layout
│   ├── lib/             # derive (domain/favicon/dates), validate
│   ├── scripts/         # the search/filter engine
│   ├── pages/           # index, featured, suggest
│   └── styles/          # design tokens
├── tests/               # engine tests against the real built HTML
├── scripts/             # link checker, OG image generator
├── docs/PLAN.md         # product + technical plan
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

**Derived automatically — never type these:** the domain, the favicon (with a deterministic monogram fallback if it fails to load), and all sidebar counts.

**Rules, enforced at build time** (`npm run build` fails with a specific message if any are broken):

| Field | Rule |
|---|---|
| `id` | kebab-case, unique |
| `url` | absolute, `https`, no duplicates — `www` and trailing slashes are normalised |
| `description` | 60–220 characters, written in a human voice |
| `category` | one of the 8 in `src/data/categories.ts` |
| `tags` | 1–5, each already in `src/data/tags.ts` |
| `dateAdded` | `YYYY-MM-DD`, not in the future |

Adding a tag means adding one line to [`src/data/tags.ts`](src/data/tags.ts) first — the controlled vocabulary is what stops the sidebar fragmenting into `js` / `javascript` / `JavaScript`.

**What gets in:** still online and maintained · free, or worth the price · useful before you sign up · something a person would genuinely return to.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Dev server on `:4321` |
| `npm run build` | Static build to `dist/`, validating all content |
| `npm run preview` | Serve the production build locally |
| `npm test` | Build, then run the search/filter tests against the real HTML |
| `npm run check` | Type-check `.astro` and `.ts` files |
| `npm run links` | Sweep every resource URL for dead links (needs real internet) |
| `npm run og` | Regenerate `public/og-default.png` (needs `pillow`, `fonttools`, `brotli`) |

## Testing

`npm test` builds the site and drives the actual engine module against the built HTML in jsdom — not a mocked DOM. **34 assertions** cover search (including multi-term AND and highlighting), category and tag filtering, post-filter counts, ARIA state, URL sync, sorting, the empty state, card chips and menu behaviour.

Expectations are derived from the page's own data attributes rather than hardcoded counts, so adding resources never breaks the suite. A second process runs **8 hydration assertions** proving that a URL like `?q=free&category=learning&tag=Practice&sort=az` restores exactly that view and the URL is left untouched on load.

Every resource is server-rendered before JavaScript runs, so a broken script degrades to a plain, fully linked list — it never leaves a blank page.

## Performance

Measured on the 94-entry build:

| Asset | Gzipped |
|---|---|
| HTML (index) | 36.7 KB |
| CSS | 6.9 KB |
| JS | 2.6 KB |

Favicons are the only third-party request per card, loaded lazily in a fixed-size box so they cannot shift layout. Every card is server-rendered, so a slow or blocked network still yields a complete, clickable list.

## Deployment

Static output: any host that serves files. On Vercel, Astro is detected automatically — build `npm run build`, output `dist`.

There are no environment variables, secrets, database or server functions to configure.

**Before launch:** replace the placeholder `site` in `astro.config.mjs` (`https://connecteverything.example`) with the real domain, and update the sitemap URL in `public/robots.txt`. Everything canonical, OG and sitemap-related derives from it.

## Contributing

Suggestions go through GitHub, as described on the site's `/suggest` page:

- **Quick:** [open an issue](https://github.com/mafk21/connect-everything/issues/new) with a link and one line on why it belongs.
- **Hands-on:** edit [`src/data/resources.ts`](src/data/resources.ts) and open a pull request.

Everything is reviewed by the curator before it appears — nothing is published automatically.

## License

Not yet specified.
