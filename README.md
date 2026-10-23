# Connect Everything

A public, curated toolbox of useful things from across the internet — websites, tools, tutorials, and references. No accounts: browse, search, filter, and click straight through.

**Status:** planning. No application code yet.

- Build plan: [`docs/PLAN.md`](docs/PLAN.md)

**Planned stack:** Astro + Tailwind CSS, static output, content stored in the repo.

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Adding a resource

Edit `src/data/resources.ts`, copy an existing block, and fill in:
title, url, a 1–2 sentence description, one category, 1–5 tags, and the date.
Domain and favicon are derived automatically. Run `npm run build` to validate.
