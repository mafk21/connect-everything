# Connect Everything — Build Plan

> A public, curated toolbox of useful things from across the internet.
> Visitors browse, search, filter, and click straight through to the resource. No accounts, ever.

**Status:** approved plan, pre-build
**Stack:** Astro + Tailwind CSS, static output, content stored in the repo
**Scale target:** 100 resources at launch, structured to grow to several hundred without a rewrite
**Reference design:** `Bookmark Manager` mockup (mint canvas, floating white panel, teal accent)

---

## 1. Product definition

### 1.1 What it is

A hand-curated library of websites, tools, tutorials, references, and anything else worth sharing. Every entry is chosen and described by the curator. The site's job is to make useful things *findable in seconds* and *actionable in one click*.

### 1.2 Goals

| # | Goal | How we know it worked |
|---|------|-----------------------|
| G1 | A first-time visitor understands the site in under 5 seconds | Usability read of the hero/heading + sidebar; no explanation needed outside the UI |
| G2 | Finding something useful takes under 30 seconds | Search + tag filter + category browse all reach a stable result state |
| G3 | Clicking a resource is frictionless | Whole card is a link; opens in a new tab; no interstitial or detail page |
| G4 | Adding a resource takes under 2 minutes | One well-formed block in one file; validation catches mistakes |
| G5 | The site feels calm, editorial, and fast | Lighthouse ≥ 95 performance/accessibility; no layout shift when favicons load |

### 1.3 Non-goals (v1)

- No user accounts, login, profiles, or saved/favourite lists.
- No comments, ratings, or votes.
- No detail pages per resource — the card *is* the destination.
- No admin UI or database. Content is a file in the repo.
- No live analytics, view counters, or "trending" numbers that we cannot honestly compute.
- No user-submitted live listings (suggestions arrive by issue/mail, curated by hand).

### 1.4 Primary journeys

1. **Browse** — land → scan categories in the sidebar → pick one → scan the grid → click a card → leave site.
2. **Search** — land → type "css grid" → results narrow live → click a card.
3. **Explore by tag** — land → tick two tags in the sidebar → grid narrows → sort by newest → click a card.
4. **Curate** — curator edits `src/data/resources.ts` → commits to the branch → CI validates → deploy.

---

## 2. Information architecture

```
/                  All resources (default)
/?category=design  Category view (SEO-friendly, shareable)
/?tag=css&tag=html Multi-tag view (AND semantics)
/?q=flexbox        Search results
/featured          Curator's picks
/suggest           "Suggest a resource" landing (form/mail + contribution rules)
/404               Designed not-found with search
```

**Sidebar order**

1. Brand mark + wordmark
2. Primary links: **All resources**, **Featured**
3. **Categories** (single-select; the browsing spine) with counts
4. **Tags** (multi-select; combinable) with counts
5. "Clear filters" appears when any filter is active

**Category set (v1 draft)** — 8 max, so the sidebar stays scannable:
`Design` · `Development` · `Learning` · `Tools` · `Productivity` · `Media` · `Data & AI` · `Reference`

**Tags** stay free-form but curated from a controlled vocabulary in `src/data/tags.ts`, so counts don't fragment into `js` / `javascript` / `JavaScript`.

---

## 3. Content model

Single source of truth: `src/data/resources.ts` (typed, so mistakes fail the build).

```ts
export type Resource = {
  id: string;            // stable slug, e.g. "mdn-web-docs" — also used for anchors
  title: string;         // "MDN Web Docs"
  url: string;           // canonical https URL
  description: string;   // 1–2 sentences, 90–200 chars, curator's voice
  category: Category;    // one of the 8
  tags: string[];        // 1–5, must exist in tags.ts
  featured?: boolean;    // shows a "Featured" badge; powers /featured
  dateAdded: string;     // ISO date "2026-10-23"
  archived?: boolean;    // hidden from listings, kept for history
  note?: string;         // optional curator aside ("best for beginners")
};
```

Derived automatically — **never typed by hand**:

- `domain` — from `new URL(url).hostname`, displayed without `www.`
- `favicon` — `https://www.google.com/s2/favicons?domain=<domain>&sz=64`, with a deterministic monogram fallback (first letter, hashed pastel from a fixed palette) if the request fails or the image is blank
- `searchIndex` — lowercase `title + domain + description + tags + category`

**Validation rules (build fails loudly):**

- `url` parses as https, no trailing slash duplication, no `localhost`
- `description` between 60 and 220 characters
- 1–5 tags, all present in the tag vocabulary
- `id` unique and kebab-case; `dateAdded` a valid ISO date in the past
- No duplicate `url` (normalised)

**Content operations**

- Adding: append one object, run `npm run check`, commit, push. That is the whole workflow.
- Anyone else contributes by editing the same file in a branch and opening a PR; CI runs the same validation.
- A monthly `npm run links` script does HEAD requests on every URL and reports dead links (manual run, not a build step).
- Copy rule of thumb: what it is, why it earns a place, who it suits — in one sentence, no marketing voice.

---

## 4. Design system

Tokens sampled directly from the reference image.

### 4.1 Colour

| Token | Hex | Use |
|---|---|---|
| `--teal-900` | `#004847` | Primary buttons, brand tile, active text |
| `--teal-700` | `#0b5f5c` | Button hover |
| `--teal-500` | `#75a29f` | Muted icon strokes (reference sample) |
| `--mint-100` | `#e8f1f0` | Page canvas, active nav row |
| `--mint-200` | `#dcebe9` | Hover rows, rails |
| `--chip` | `#e5ebe9` | Tag chips |
| `--chip-text`| `#3f5a58` | Tag chip label |
| `--surface` | `#ffffff` | Panel, cards, header |
| `--border` | `#e6edec` | Hairlines, card borders |
| `--text` | `#1c2b2a` | Titles |
| `--text-muted`| `#7c8b8a` | Domain, meta, placeholder |
| `--accent-cyan` | `#60bace` | Decorative shapes only |
| `--accent-coral` | `#f6b9b3` | Decorative shapes only |
| `--focus` | `#0f766e` | 2px focus ring, 2px offset (accessibility, not in reference) |

Canvas note: the mockup's `#f0f0f0` is the screenshot backdrop. The real page canvas is `--mint-100`, with the panel floating on it.

### 4.2 Type

- **UI/body:** Inter (self-hosted, `font-display: swap`), variables subset.
- Scale: `11px` labels/eyebrow · `13px` meta & chips · `14px` body/descriptions (`1.55` line-height) · `15px` nav · `18px` card titles · `22px` page heading · `24px` brand.
- Weights: 400 body, 500 nav/chips, 600 titles, 700 heading.
- Tight tracking (`-0.01em`) on headings only; everything else default.

### 4.3 Space, radius, elevation

- Base unit `4px`; scale `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 56`.
- Radii: `8px` chips/inputs · `12px` cards · `16px` panel · `999px` pill button.
- Shadow: panel `0 24px 60px -24px rgb(16 60 56 / 0.18)`; card `0 1px 2px rgb(16 60 56 / 0.06)`; card hover lifts to `0 10px 24px -12px rgb(16 60 56 / 0.22)`.
- Borders are hairlines; never rely on shadow alone to separate surfaces.

### 4.4 Decorative shapes

Teal quotation marks (top centre), coral chevron (left), cyan dot grid (right), coral zigzag (bottom) — SVG, `aria-hidden`, `pointer-events-none`, `z-index: -1`, positioned in the canvas *outside* the panel. They must never sit under text or interfere with focus. Hidden below `md` and disabled under `prefers-reduced-motion`.

### 4.5 Desktop layout

```
┌────────────────────────────── canvas: mint-100 ──────────────────────────────┐
│   ╭─────────────── panel (white, r16, shadow, max-w 1360) ────────────────╮  │
│   │ ┌── sidebar 264 ──┐ ┌ header: search ────── [Suggest a resource] ────┐│  │
│   │ │ brand           │ │                                                 ││  │
│   │ │ All resources   │ │  Heading (filter-aware)          [Sort ▾]       ││  │
│   │ │ Featured        │ │  ┌────────┐ ┌────────┐ ┌────────┐              ││  │
│   │ │ CATEGORIES      │ │  │ card   │ │ card   │ │ card   │  3 → 2 → 1   ││  │
│   │ │  Design    24   │ │  └────────┘ └────────┘ └────────┘              ││  │
│   │ │ TAGS            │ │  …                                              ││  │
│   │ └─────────────────┘ └─────────────────────────────────────────────────┘│  │
│   ╰──────────────────────────────────────────────────────────────────────────╯  │
└──────────────────────────────────────────────────────────────────────────────┘
```

- Page max-width `1360px`; panel min-height `calc(100vh - 48px)` with the canvas visible around it.
- Sidebar `264px`, sticky, own scroll region.
- Grid: `3` columns ≥ `1120px`, `2` ≥ `720px`, `1` below. Gutter `20px`.
- Breakpoints: `sm 640` · `md 768` · `lg 1024` · `xl 1200`.

### 4.6 Mobile

Sidebar collapses into a **Filter** button in the sticky header that opens a full-height sheet (categories, tags, clear, "Show N results"). Search stays in the header. Sort becomes a select. Cards go single-column with the same anatomy.

---

## 5. Component inventory

| Component | Responsibility | Notes |
|---|---|---|
| `Layout.astro` | Shell, fonts, meta, canvas + decorative shapes | Slot-based, one per page |
| `DecorativeShapes.astro` | The four SVG ornaments | `aria-hidden`, hidden `< md` |
| `Panel.astro` | White floating container | Radius + shadow tokens |
| `Sidebar.astro` | Brand, primary nav, category + tag lists | Sticky; scrollable |
| `FilterRow.astro` | One category/tag row: label, count, checkbox state | Real `<input type="checkbox">` visually restyled — keyboard and screen-reader free |
| `Header.astro` | Search field, suggest action, mobile filter trigger | Sticky within panel |
| `SearchField.astro` | Input + icon + clear (⌘K / `/` shortcut) | `role="searchbox"`, live region for result count |
| `ResourceCard.astro` | Favicon tile, title, domain, description, chips, footer, kebab | Whole card is a link (stretched-link pattern) so text stays selectable |
| `Favicon.astro` | Remote favicon + monogram fallback | `loading="lazy"`, fixed box prevents CLS |
| `TagChip.astro` | Static chip (card) or toggle (sidebar) | Two variants |
| `KebabMenu.astro` | Copy link · Open in new tab | Keyboard accessible, closes on Escape/outside click |
| `SortControl.astro` | Featured / Newest / A–Z | Native `<select>` on mobile, styled button+menu on desktop |
| `EmptyState.astro` | No results message + reset | Also used for a filtered-to-nothing category |
| `SuggestBanner.astro` | How to suggest a resource | Shown on `/suggest` and in the footer |
| `Footer.astro` | Curator note, suggest link, "made with care" | Sits inside panel bottom |

State lives in one place: `src/scripts/library.ts` — reads/writes URL params, filters the in-memory index, re-renders counts and the grid. No framework; ~150 lines of vanilla TS, bundled by Astro.

---

## 6. Interaction specification

- **Search** — case- and diacritic-insensitive substring match across title, domain, description, tags, category. Debounce `120ms`. Matches highlighted in title/description (subtle mint background, not yellow). Esc clears. `/` or `⌘K` focuses the field.
- **Filtering** — category is single-select (radio semantics); tags are multi-select with **AND** semantics (a resource must carry all ticked tags). Counts shown are *post-other-filter* counts, so ticking `CSS` updates the tag counts sensibly. Clicking a chip *on a card* adds that tag to the filter.
- **Sort** — `Featured first` (default), `Newest` (dateAdded desc), `A–Z` (title). Stable tiebreak by title.
- **URL state** — every filter/sort/search combination is reflected in the query string (`replaceState`, no history spam) so any view is shareable and back/forward works. On load, state hydrates from the URL.
- **Result count** — visible next to the heading ("12 resources") and announced politely to assistive tech on change.
- **Card click** — navigates to the resource in a new tab (`target="_blank" rel="noopener noreferrer"`). Kebab and chip clicks must not trigger navigation.
- **Loading** — no spinners. The full index ships inline (≈ 30–60 KB gzipped at 500 entries); filtering is synchronous.
- **Motion** — 150ms ease for hover lift, 200ms for sheet. All motion wrapped in `prefers-reduced-motion`.
- **Empty state** — "Nothing matches yet." + which filters are active + `Clear filters` + a nudge toward the suggest page.

---

## 7. Technical architecture

### 7.1 File tree

```
connect-everything/
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
├── docs/PLAN.md
├── public/
│   ├── fonts/               # Inter woff2 (self-hosted)
│   ├── favicon.svg
│   └── og-default.png
└── src/
    ├── data/
    │   ├── categories.ts    # the 8 categories + labels + blurb
    │   ├── tags.ts          # controlled vocabulary, ordered for the sidebar
    │   └── resources.ts     # the library (single source of truth)
    ├── components/          # (see §5)
    ├── layouts/
    │   └── BaseLayout.astro
    ├── pages/
    │   ├── index.astro
    │   ├── featured.astro
    │   ├── suggest.astro
    │   └── 404.astro
    ├── scripts/
    │   └── library.ts       # search/filter/sort engine
    ├── styles/
    │   └── global.css       # tokens, base, utilities
    └── lib/
        ├── validate.ts      # schema + build-time checks
        └── derive.ts        # domain, favicon URL, monogram hash
```

### 7.2 Rendering strategy

- Astro outputs **static HTML**. The initial grid is server-rendered (all resources, or the filtered set for a shared URL), so it is fully usable and indexable with JS disabled.
- `library.ts` hydrates only the interactive layer (search, filter, sort) over the already-rendered cards. Progressive enhancement: with JS off, the page still lists everything and every card links out; filters degrade to category pages.
- No client-side router, no hydration framework, no state library.

### 7.3 Performance budget

| Metric | Target |
|---|---|
| HTML (per page, 500 resources) | ≤ 90 KB gzipped |
| JS shipped | ≤ 15 KB gzipped |
| CSS | ≤ 20 KB gzipped |
| LCP | < 1.2s on 4G |
| CLS | 0 (fixed favicon boxes, no late fonts) |
| Lighthouse | ≥ 95 / ≥ 95 / 100 / 100 |

Favicons are the one third-party request per card. They load lazily, are fixed-size, and failure falls back to a monogram locally — no blank boxes.

### 7.4 Accessibility

- Landmark structure: `header`, `nav` (sidebar), `main`, `footer`; single `h1` per page.
- Every filter is a real checkbox/radio with a visible label; counts are `aria-describedby`, not part of the label text.
- Focus ring always visible; skip link to `main`.
- Contrast: body text ≥ 4.5:1 (`--text-muted` on white is checked at build for chip and meta usage), teal-on-white ≥ 4.5:1 for buttons.
- Cards: one tab stop per card, accessible name = "Title — domain, opens in new tab".
- Filter state changes announced via one polite live region.

### 7.5 SEO

- Unique `<title>`/`<meta description>` per filter view where it makes sense (categories yes, arbitrary tag soup no — those get `noindex` when > 2 tags are combined).
- `ItemList` JSON-LD on the index and category pages.
- Canonical URLs; `sitemap.xml` via `@astrojs/sitemap`; `robots.txt`.
- Open Graph image from the brand mark + wordmark.

### 7.6 Deployment

- Static output → Vercel (connected) or any static host. Build command `astro build`, output `dist`.
- Every push to the working branch produces a preview URL; `main` produces production.
- No environment secrets required: no backend, no form endpoint, no mail recipient.

---

## 8. The "Suggest a resource" action

Header button → `/suggest`, which contains:

1. A one-line invitation and the bar for inclusion ("useful, still alive, free or fairly priced, no signup wall to see value").
2. A primary **"Suggest on GitHub"** action opening a new issue on the repository — no placeholder form endpoint, no email address, no third-party service.
3. A "prefer to add it yourself?" card linking to the repository, explaining that the library lives in `src/data/resources.ts` and that a pull request gets reviewed like any other entry.

Decided: GitHub is the only submission route. No `mailto:` fallback and no form service, so there is nothing to deliver mail and no inbox to monitor.

No submissions appear publicly without your curation. This keeps the no-account promise intact.

---

## 9. Milestones

Each milestone ends in something you can look at and react to.

### M0 — Foundation (design + skeleton)
Astro + Tailwind installed; tokens in `global.css`; BaseLayout with canvas, panel, decorative shapes; fonts self-hosted. Brand tile and wordmark placeholder.
**Done when:** an empty mint page with a floating white panel renders correctly at 1440px and 390px.

### M1 — Card grid with real content (the look check)
`resources.ts` seeded with **12 real resources** from the reference (MDN, React Docs, Tailwind, Web.dev, Claude, freeCodeCamp, Dev.to, JavaScript.info, Frontend Mentor, …); `ResourceCard` complete; favicon + monogram fallback; responsive 3→2→1 grid.
**Done when:** the page reads as a near-faithful match to the reference at desktop width, and nothing breaks at 390px. **This is the moment to judge the design.**

### M2 — Sidebar + search + filters + sort
Categories and tags with live counts; checkbox filters; URL state; search with highlighting and `/` shortcut; sort control; result count; empty state. Keyboard-only pass.
**Done when:** any combination of category + tags + query + sort is shareable via URL, survives reload, and is fully operable by keyboard.

### M3 — Secondary surfaces + polish · **done**
`/featured`, `/suggest`, `/404`, footer, mobile filter sheet, kebab menu, hover/focus/motion polish, reduced-motion, decorative-shape positioning.
**Done when:** every route exists, mobile is a first-class experience, and no placeholder text remains.

Delivered: `/404` with search, category chips and three featured cards; footer nav (Featured, Suggest, GitHub); mobile filter sheet with focus management and a result-counting apply button; kebab menus close on Escape, outside click and after copying; `prefers-reduced-motion` handled globally.

Accessibility fix found by the contrast audit: `--color-ink-muted` was `#7c8b8a` (3.55:1 on white, 3.09:1 on mint) and is now `#5c6e6c` (5.38:1 / 4.68:1), which clears AA for the 13px meta text it carries.

### M4 — Hardening · **done** (Lighthouse unverified)
Validation script, `npm run links`, JSON-LD, sitemap, OG image, Lighthouse pass on mobile and desktop, contrast audit, 200%-zoom check.
**Done when:** Lighthouse ≥ 95 everywhere it matters and a fresh clone builds clean.

Delivered: `@astrojs/sitemap`, `robots.txt`, WebSite + ItemList JSON-LD, generated 1200×630 OG card (`npm run og`), and `npm run links` for dead-link sweeps. Budgets measured on the 100-entry build: 38.8 KB gzipped HTML, 6.9 KB CSS, 2.8 KB JS.

Not verified here: Lighthouse and 200% zoom, because the sandbox has no browser. Both are one-command checks on a real machine.

### M5 — Fill the library · **done at 100 entries**
Expand to **~100 resources**: review the first 12 for voice consistency, then add in category batches (≈ 12 per category). Each entry gets a real description, not a copy-paste.
**Done when:** every category has ≥ 8 entries, no dead links, tag vocabulary has not fragmented.

Delivered: **100 resources** — design 13, development 13, learning 13, tools 13, productivity 12, media 12, data & AI 12, reference 12 — with 12 featured. The final six (Laws of UX, Bruno, CS50, Hoppscotch, Super Productivity, Granola) were chosen from a current landscape search rather than from memory. The tag vocabulary grew from 17 to 35 terms, deliberately, rather than letting ad-hoc tags accumulate. Sidebar now collapses the tag list past the first 12 and offers "Show all 35 tags", with a no-JS fallback that shows everything.

Still open: `npm run links` cannot reach arbitrary hosts from this sandbox, so the dead-link sweep has not been run against the live web.

---

## 10. Decisions log

| Decision | Choice | Reason |
|---|---|---|
| Storage | Files in the repo (`resources.ts`) | Chosen workflow: contributions arrive as edits/PRs; no admin surface or database to maintain |
| Framework | Astro + Tailwind | Content site; static HTML first, tiny JS |
| Rendering | Server-rendered grid + client-side enhancement | Works without JS, instant filtering |
| Taxonomy | Categories (single) + tags (multi, AND) | Category is the spine; tags are facets |
| Nav labels | "All resources" / "Featured" | "Home"/"Archived" carry no meaning for a public library |
| Card link | Whole card, new tab | One click to the destination, as requested |
| Pin icon | `featured` badge | Pins are curator state, not visitor state |
| View counter | Removed | Cannot be computed honestly without tracking |
| Header action | "Suggest a resource" | Keeps the reference's layout without implying visitor accounts |
| Publishing | Commit to this branch | Confirmed: curator comes back here, or edits/PRs in the repo |

---

## 11. Open items

1. **Name.** The mockup says "Bookmark Manager"; the repo is `connect-everything`. Needs a wordmark and a one-line tagline before M1 (the brand tile is visible immediately). Candidates: *Toolbox*, *The Shelf*, *Index*, *Useful*.
2. **Suggest mechanism.** Resolved: GitHub issues and pull requests only. No email address or form endpoint.
5. **Domain.** `astro.config.mjs` still uses `https://connecteverything.example` as `site`, which feeds the canonical URLs, sitemap and OG tags. Swap in the real domain before launch.
6. **Licence.** No `LICENSE` file yet.
3. **Category set.** The 8 above are a draft based on the reference's tag mix; confirm before M5 so entries don't get re-sorted twice.
4. **Language.** English only, or bilingual (Arabic/English) later? Affects font stack and layout direction now.

---

## 12. Explicitly deferred

- Database migration (Supabase) — the data layer is isolated in `src/lib` so it can be swapped without touching components.
- Private admin UI.
- Pagination / virtual scrolling — unnecessary below ~500 entries; revisit at that point.
- Full-text fuzzy search (Fuse.js) — plain substring is predictable; upgrade only if result quality complains.
- i18n, dark mode, user accounts.
