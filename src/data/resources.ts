import type { CategoryId } from './categories';
import type { Tag } from './tags';

export interface Resource {
  /** Stable kebab-case id — used for anchors and stable sorting. */
  id: string;
  title: string;
  url: string;
  /** 60–220 characters, written in a human voice. No marketing copy. */
  description: string;
  category: CategoryId;
  /** 1–5 tags, drawn from src/data/tags.ts */
  tags: Tag[];
  featured?: boolean;
  /** ISO date, YYYY-MM-DD */
  dateAdded: string;
  /** Optional curator aside, shown on the card only when it adds something. */
  note?: string;
}

/**
 * The library.
 *
 * To add a resource: copy a block, give it a unique `id`, fill the fields,
 * keep the description honest and specific, then run `npm run build` (which
 * validates every entry) or `npm run check`.
 *
 * Everything else — domain, favicon, counts — is derived at build time.
 */
export const RESOURCES: Resource[] = [
  {
    id: "figma",
    title: "Figma",
    url: "https://www.figma.com",
    description:
      "Collaborative interface design in the browser. Wireframe, prototype and hand off in the same file, with everyone looking at the same thing.",
    category: 'design',
    tags: ['Design', 'Tools'],
    featured: true,
    dateAdded: '2025-11-04',
  },
  {
    id: "dribbble",
    title: "Dribbble",
    url: "https://dribbble.com",
    description:
      "A showcase of interface, brand and illustration work from designers worldwide. Less useful for tutorials than for calibrating what good looks like.",
    category: 'design',
    tags: ['Design', 'Community', 'Reference'],
    dateAdded: '2025-11-09',
  },
  {
    id: "awwwards",
    title: "Awwwards",
    url: "https://www.awwwards.com",
    description:
      "A jury-scored gallery of the most ambitious sites on the web. Worth a monthly visit for motion and layout ideas you will not see in a template.",
    category: 'design',
    tags: ['Design', 'Reference', 'Tips'],
    dateAdded: '2025-11-17',
  },
  {
    id: "coolors",
    title: "Coolors",
    url: "https://coolors.co",
    description:
      "Generate, lock and shuffle colour palettes in the browser, then export them as CSS, SVG or an image. The quickest way out of a blank colour mood board.",
    category: 'design',
    tags: ['Design', 'Color', 'Tools'],
    dateAdded: '2025-11-21',
  },
  {
    id: "google-fonts",
    title: "Google Fonts",
    url: "https://fonts.google.com",
    description:
      "The largest free font library, browsable by classification and language, with a live specimen editor. Every family can be self-hosted if you prefer.",
    category: 'design',
    tags: ['Typography', 'Fonts', 'Reference'],
    dateAdded: '2025-11-26',
  },
  {
    id: "mobbin",
    title: "Mobbin",
    url: "https://mobbin.com",
    description:
      "Screenshots from real apps and websites, organised by flow. Useful for seeing how someone else already solved the screen you are stuck on.",
    category: 'design',
    tags: ['Design', 'Reference', 'Layout'],
    dateAdded: '2025-12-02',
  },
  {
    id: "lottiefiles",
    title: "LottieFiles",
    url: "https://lottiefiles.com",
    description:
      "Animations in the Lottie format that stay sharp at any size and weigh a fraction of a video. Preview, recolour and export straight to JSON.",
    category: 'design',
    tags: ['Animation', 'Design', 'Tools'],
    dateAdded: '2025-12-07',
  },
  {
    id: "haikei",
    title: "Haikei",
    url: "https://app.haikei.app",
    description:
      "Generate SVG backgrounds, blobs, waves and gradients, then download them as SVG or PNG. Good for texture that would otherwise take an afternoon in Illustrator.",
    category: 'design',
    tags: ['Design', 'Tools'],
    dateAdded: '2025-12-11',
  },
  {
    id: "fontshare",
    title: "Fontshare",
    url: "https://www.fontshare.com",
    description:
      "Free, quality-checked typefaces from Indian Type Foundry, licensed for commercial use. A good second stop once Google Fonts starts to feel familiar.",
    category: 'design',
    tags: ['Typography', 'Fonts'],
    dateAdded: '2025-12-16',
  },
  {
    id: "heroicons",
    title: "Heroicons",
    url: "https://heroicons.com",
    description:
      "MIT-licensed SVG icons from the Tailwind team, in outline, solid and mini sizes. Copy the markup straight into your components.",
    category: 'design',
    tags: ['Icons', 'Design', 'Tools'],
    dateAdded: '2025-12-22',
  },
  {
    id: "penpot",
    title: "Penpot",
    url: "https://penpot.app",
    description:
      "An open-source design and prototyping tool that runs in the browser and speaks SVG natively. The closest thing to Figma that you can self-host.",
    category: 'design',
    tags: ['Design', 'Tools', 'Open source'],
    dateAdded: '2025-12-29',
  },
  {
    id: "realtime-colors",
    title: "Realtime Colors",
    url: "https://www.realtimecolors.com",
    description:
      "Pick a palette and see it applied to a realistic page before you commit. Exports CSS variables and a Tailwind config you can paste.",
    category: 'design',
    tags: ['Color', 'Design', 'Tools'],
    dateAdded: '2026-01-06',
  },
  {
    id: "laws-of-ux",
    title: "Laws of UX",
    url: "https://lawsofux.com",
    description:
      "Psychology-backed design principles — Fitts, Hick, Miller, Jakob — each explained with the interfaces they show up in, and a poster worth pinning up.",
    category: 'design',
    tags: ['Design', 'Reference', 'Tips'],
    dateAdded: '2026-09-12',
  },
  {
    id: "react-docs",
    title: "React Docs",
    url: "https://react.dev",
    description:
      "The library for web and native user interfaces. Build user interfaces out of individual pieces called components.",
    category: 'development',
    tags: ['JavaScript', 'Framework', 'Reference'],
    dateAdded: '2025-11-05',
  },
  {
    id: "tailwind-css",
    title: "Tailwind CSS",
    url: "https://tailwindcss.com",
    description:
      "A utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.",
    category: 'development',
    tags: ['CSS', 'Framework', 'Tools'],
    featured: true,
    dateAdded: '2025-11-12',
  },
  {
    id: "astro",
    title: "Astro",
    url: "https://astro.build",
    description:
      "A content-focused framework that ships static HTML by default and adds JavaScript only where you ask. Islands, file-based routing, very little configuration.",
    category: 'development',
    tags: ['Framework', 'Performance', 'Documentation'],
    featured: true,
    dateAdded: '2025-11-19',
  },
  {
    id: "vite",
    title: "Vite",
    url: "https://vite.dev",
    description:
      "A dev server and build tool that starts instantly and rebuilds in milliseconds. The default under most modern frameworks, and pleasant used on its own.",
    category: 'development',
    tags: ['Tools', 'Performance', 'Framework'],
    dateAdded: '2025-11-24',
  },
  {
    id: "nextjs",
    title: "Next.js",
    url: "https://nextjs.org",
    description:
      "The React framework for routing, rendering and deployment in one place. Server components and file-based routes, with a fair amount of convention to learn.",
    category: 'development',
    tags: ['Framework', 'JavaScript', 'Performance'],
    dateAdded: '2025-11-30',
  },
  {
    id: "typescript",
    title: "TypeScript",
    url: "https://www.typescriptlang.org",
    description:
      "JavaScript with a type system, maintained by the team behind the language. The handbook alone is worth reading even if you never touch a config file.",
    category: 'development',
    tags: ['JavaScript', 'Documentation', 'Reference'],
    dateAdded: '2025-12-04',
  },
  {
    id: "shadcn-ui",
    title: "shadcn/ui",
    url: "https://ui.shadcn.com",
    description:
      "Copy-paste React components built on Radix and Tailwind. You own the code, which makes them easy to bend toward your own design instead of fighting a library.",
    category: 'development',
    tags: ['Framework', 'Design', 'Tools'],
    dateAdded: '2025-12-09',
  },
  {
    id: "pnpm",
    title: "pnpm",
    url: "https://pnpm.io",
    description:
      "A package manager that stores dependencies once and links them, so installs stay fast and disk usage sane across many projects.",
    category: 'development',
    tags: ['Tools', 'Performance'],
    dateAdded: '2025-12-14',
  },
  {
    id: "svelte",
    title: "Svelte",
    url: "https://svelte.dev",
    description:
      "A compiler that turns components into small, fast JavaScript at build time, so there is less runtime to reason about. The interactive tutorial is genuinely good.",
    category: 'development',
    tags: ['Framework', 'JavaScript', 'Learning'],
    dateAdded: '2025-12-20',
  },
  {
    id: "htmx",
    title: "htmx",
    url: "https://htmx.org",
    description:
      "Add modern interaction to HTML with attributes instead of a framework. Worth reading even if you never ship it, because it clarifies what the browser already does.",
    category: 'development',
    tags: ['JavaScript', 'HTML', 'Framework'],
    dateAdded: '2025-12-27',
  },
  {
    id: "zod",
    title: "Zod",
    url: "https://zod.dev",
    description:
      "TypeScript-first schema validation where the types are inferred from the schema. Parse anything crossing a boundary: form input, JSON, environment variables.",
    category: 'development',
    tags: ['JavaScript', 'Tools', 'Documentation'],
    dateAdded: '2026-01-03',
  },
  {
    id: "vitest",
    title: "Vitest",
    url: "https://vitest.dev",
    description:
      "A Vite-native test runner with a Jest-compatible API. Fast watch mode, sensible defaults, and no second build pipeline to keep in sync.",
    category: 'development',
    tags: ['Testing', 'Tools', 'Performance'],
    dateAdded: '2026-01-09',
  },
  {
    id: "bruno",
    title: "Bruno",
    url: "https://www.usebruno.com",
    description:
      "An open-source API client that keeps collections as plain files inside your repo, so requests diff in Git and no account sits between you and your API.",
    category: 'development',
    tags: ['Tools', 'Open source', 'Testing'],
    dateAdded: '2026-09-26',
  },
  {
    id: "frontend-mentor",
    title: "Frontend Mentor",
    url: "https://www.frontendmentor.io",
    description:
      "Improve your front-end coding skills by building real projects. Solve real-world HTML, CSS and JavaScript challenges while working to professional designs.",
    category: 'learning',
    tags: ['Practice', 'Learning', 'Community'],
    featured: true,
    dateAdded: '2025-11-03',
  },
  {
    id: "freecodecamp",
    title: "freeCodeCamp",
    url: "https://www.freecodecamp.org",
    description:
      "Learn to code for free. Build projects. Earn certifications. An open source community that helps you learn to code with free online courses and certifications.",
    category: 'learning',
    tags: ['Learning', 'Practice', 'Tutorial'],
    dateAdded: '2025-11-08',
  },
  {
    id: "javascript-info",
    title: "JavaScript.info",
    url: "https://javascript.info",
    description:
      "The Modern JavaScript Tutorial. How it is done now. From the basics to advanced topics with simple, but detailed explanations.",
    category: 'learning',
    tags: ['JavaScript', 'Tutorial', 'Reference'],
    featured: true,
    dateAdded: '2025-11-14',
  },
  {
    id: "web-dev",
    title: "web.dev",
    url: "https://web.dev",
    description:
      "Guidance to build modern web experiences that work on any browser. Learn about web vitals, PWAs, and more.",
    category: 'learning',
    tags: ['Performance', 'Learning', 'Tips'],
    dateAdded: '2025-11-22',
  },
  {
    id: "css-tricks",
    title: "CSS-Tricks",
    url: "https://css-tricks.com",
    description:
      "A long-running publication about CSS and front-end craft, with the deepest explainers anywhere on layout, grid, and the odd corners of the cascade.",
    category: 'learning',
    tags: ['CSS', 'Layout', 'Tips'],
    dateAdded: '2025-11-28',
  },
  {
    id: "dev-to",
    title: "DEV Community",
    url: "https://dev.to",
    description:
      "A constructive and inclusive social network for software developers. Share knowledge and grow your career alongside people building the same things you are.",
    category: 'learning',
    tags: ['Community', 'Learning', 'Practice'],
    dateAdded: '2025-12-05',
  },
  {
    id: "josh-comeau",
    title: "Josh W. Comeau",
    url: "https://www.joshwcomeau.com",
    description:
      "Deep, playful explanations of CSS and React with interactive demos you can poke at. The CSS articles in particular reset how you think about layout.",
    category: 'learning',
    tags: ['CSS', 'Learning', 'Tutorial'],
    featured: true,
    dateAdded: '2025-12-12',
  },
  {
    id: "odin-project",
    title: "The Odin Project",
    url: "https://www.theodinproject.com",
    description:
      "A free, opinionated full-stack curriculum that sends you to the best existing resources and makes you build things. Heavy on projects, light on hand-holding.",
    category: 'learning',
    tags: ['Learning', 'Practice', 'Community'],
    dateAdded: '2025-12-18',
  },
  {
    id: "exercism",
    title: "Exercism",
    url: "https://exercism.org",
    description:
      "Practice problems in dozens of languages with real human mentoring on your solutions. Free, and the feedback is the part that actually makes you better.",
    category: 'learning',
    tags: ['Practice', 'Learning', 'Community'],
    dateAdded: '2025-12-24',
  },
  {
    id: "roadmap-sh",
    title: "roadmap.sh",
    url: "https://roadmap.sh",
    description:
      "Community-maintained learning paths for most developer roles, drawn as dependency graphs. Useful for working out what to learn next, not for learning it.",
    category: 'learning',
    tags: ['Learning', 'Reference', 'Community'],
    dateAdded: '2025-12-31',
  },
  {
    id: "scrimba",
    title: "Scrimba",
    url: "https://scrimba.com",
    description:
      "Interactive screencasts where you can pause the recording and edit the code you are watching. Most courses have a free tier worth working through.",
    category: 'learning',
    tags: ['Learning', 'Tutorial', 'Practice'],
    dateAdded: '2026-01-08',
  },
  {
    id: "fireship",
    title: "Fireship",
    url: "https://fireship.io",
    description:
      "Short, dense videos that explain a technology in a few minutes. Good for a fast survey before deciding whether to read the docs properly.",
    category: 'learning',
    tags: ['Learning', 'Tips', 'Tutorial'],
    dateAdded: '2026-01-14',
  },
  {
    id: "cs50",
    title: "CS50",
    url: "https://cs50.harvard.edu/x/",
    description:
      "Harvard's introduction to computer science, free to follow at your own pace. Genuinely demanding problem sets, excellent lectures, and a large community.",
    category: 'learning',
    tags: ['Learning', 'Practice', 'Community'],
    dateAdded: '2026-08-30',
  },
  {
    id: "raycast",
    title: "Raycast",
    url: "https://www.raycast.com",
    description:
      "A keyboard launcher for macOS that replaces Spotlight and a dozen small utilities, with extensions for clipboard history, windows and APIs.",
    category: 'tools',
    tags: ['Tools', 'Productivity'],
    featured: true,
    dateAdded: '2025-11-06',
  },
  {
    id: "excalidraw",
    title: "Excalidraw",
    url: "https://excalidraw.com",
    description:
      "A virtual whiteboard that gets out of the way. Hand-drawn shapes, rough arrows, instant sharing between people, and it works offline.",
    category: 'tools',
    tags: ['Diagrams', 'Tools', 'Design'],
    featured: true,
    dateAdded: '2025-11-13',
  },
  {
    id: "tldraw",
    title: "tldraw",
    url: "https://www.tldraw.com",
    description:
      "A fast, embeddable canvas for sketches and diagrams with a generous free tier in the browser. The SDK is open source if you want it inside your own product.",
    category: 'tools',
    tags: ['Diagrams', 'Tools', 'Open source'],
    dateAdded: '2025-11-20',
  },
  {
    id: "regex101",
    title: "regex101",
    url: "https://regex101.com",
    description:
      "Build and debug regular expressions with live matching, a token-by-token explanation and an exhaustive reference. Supports most major flavours.",
    category: 'tools',
    tags: ['Tools', 'Reference', 'Tips'],
    dateAdded: '2025-11-27',
  },
  {
    id: "carbon",
    title: "Carbon",
    url: "https://carbon.now.sh",
    description:
      "Turn a snippet of code into a clean image for a slide or a message. Syntax highlighting and sensible themes, with no account needed.",
    category: 'tools',
    tags: ['Images', 'Tools', 'Design'],
    dateAdded: '2025-12-03',
  },
  {
    id: "jsoncrack",
    title: "JSON Crack",
    url: "https://jsoncrack.com",
    description:
      "Paste JSON and get an interactive graph you can pan, zoom and search. The fastest way to understand a deeply nested API response.",
    category: 'tools',
    tags: ['Tools', 'Diagrams'],
    dateAdded: '2025-12-08',
  },
  {
    id: "remove-bg",
    title: "remove.bg",
    url: "https://www.remove.bg",
    description:
      "Removes image backgrounds automatically, with a free tier at reduced resolution. Saves the pen-tool work for simple subjects and plain product shots.",
    category: 'tools',
    tags: ['Images', 'Tools'],
    dateAdded: '2025-12-15',
  },
  {
    id: "bitwarden",
    title: "Bitwarden",
    url: "https://bitwarden.com",
    description:
      "An open-source password manager with a solid free tier, browser extensions and self-hosting if you want it. Unglamorous, and it prevents real problems.",
    category: 'tools',
    tags: ['Privacy', 'Tools', 'Open source'],
    dateAdded: '2025-12-21',
  },
  {
    id: "it-tools",
    title: "IT Tools",
    url: "https://it-tools.tech",
    description:
      "One page of small developer utilities: hashing, JWT decoding, colour conversion, cron parsing, UUIDs. Saves installing a package for each.",
    category: 'tools',
    tags: ['Tools', 'Tips'],
    dateAdded: '2025-12-28',
  },
  {
    id: "bundlephobia",
    title: "Bundlephobia",
    url: "https://bundlephobia.com",
    description:
      "Check the size and download cost of an npm package before adding it to a project. Answers whether that dependency is really worth the kilobytes.",
    category: 'tools',
    tags: ['Performance', 'Tools', 'JavaScript'],
    dateAdded: '2026-01-04',
  },
  {
    id: "cyberchef",
    title: "CyberChef",
    url: "https://gchq.github.io/CyberChef/",
    description:
      "A browser workbench for encoding, decoding, hashing and transforming data, chained together as recipes. The Swiss Army knife for anything opaque.",
    category: 'tools',
    tags: ['Tools', 'Privacy'],
    dateAdded: '2026-01-11',
  },
  {
    id: "cal-com",
    title: "Cal.com",
    url: "https://cal.com",
    description:
      "Open-source scheduling that replaces the back-and-forth of finding a meeting time. Self-hostable, with calendar sync and team round-robin built in.",
    category: 'tools',
    tags: ['Tools', 'Productivity', 'Open source'],
    dateAdded: '2026-01-17',
  },
  {
    id: "hoppscotch",
    title: "Hoppscotch",
    url: "https://hoppscotch.io",
    description:
      "A browser-based API client for REST, GraphQL and WebSockets that opens instantly and can be self-hosted. No install and no sign-in to send a request.",
    category: 'tools',
    tags: ['Tools', 'Open source'],
    dateAdded: '2026-09-05',
  },
  {
    id: "notion",
    title: "Notion",
    url: "https://www.notion.so",
    description:
      "Documents, databases and wikis in one workspace, flexible enough to fit most workflows and complex enough to need a system. Good free tier for individuals.",
    category: 'productivity',
    tags: ['Productivity', 'Tools', 'Notes'],
    featured: true,
    dateAdded: '2025-11-07',
  },
  {
    id: "obsidian",
    title: "Obsidian",
    url: "https://obsidian.md",
    description:
      "Markdown notes stored as plain files on your own disk, linked together however you like. No lock-in, and the graph earns its keep once notes accumulate.",
    category: 'productivity',
    tags: ['Notes', 'Productivity', 'Privacy'],
    featured: true,
    dateAdded: '2025-11-15',
  },
  {
    id: "linear",
    title: "Linear",
    url: "https://linear.app",
    description:
      "Issue tracking built around keyboard shortcuts and speed, with an interface that stays out of the way. The benchmark other project tools get measured against.",
    category: 'productivity',
    tags: ['Productivity', 'Tools'],
    dateAdded: '2025-11-23',
  },
  {
    id: "todoist",
    title: "Todoist",
    url: "https://todoist.com",
    description:
      "A task manager with natural-language input: type 'pay rent every month' and it parses the schedule. Cross-platform and fast to capture into.",
    category: 'productivity',
    tags: ['Productivity', 'Tools'],
    dateAdded: '2025-11-29',
  },
  {
    id: "ticktick",
    title: "TickTick",
    url: "https://ticktick.com",
    description:
      "Tasks, lists and a calendar in one app, with a habit tracker attached. Cheaper than most alternatives and unusually complete for the price.",
    category: 'productivity',
    tags: ['Productivity', 'Tools'],
    dateAdded: '2025-12-06',
  },
  {
    id: "raindrop",
    title: "Raindrop.io",
    url: "https://raindrop.io",
    description:
      "Bookmark manager for links, screenshots and highlights, with collections, tags and full-text search. What people actually want from browser bookmarks.",
    category: 'productivity',
    tags: ['Productivity', 'Tools', 'Reference'],
    dateAdded: '2025-12-13',
  },
  {
    id: "toggl-track",
    title: "Toggl Track",
    url: "https://toggl.com/track/",
    description:
      "Timer-based time tracking with clear reports. Useful for finding out where a week actually went, not only for invoicing clients.",
    category: 'productivity',
    tags: ['Productivity', 'Tools'],
    dateAdded: '2025-12-19',
  },
  {
    id: "bear",
    title: "Bear",
    url: "https://bear.app",
    description:
      "A focused Markdown notes app for Apple devices, with careful typography and clean export. Worth it if you write more than you organise.",
    category: 'productivity',
    tags: ['Notes', 'Writing', 'Productivity'],
    dateAdded: '2025-12-26',
  },
  {
    id: "sunsama",
    title: "Sunsama",
    url: "https://www.sunsama.com",
    description:
      "A daily planner that pulls tasks from your other tools into a morning routine and a plan for the day. More of a practice than a piece of software.",
    category: 'productivity',
    tags: ['Productivity', 'Tools'],
    dateAdded: '2026-01-02',
  },
  {
    id: "standard-notes",
    title: "Standard Notes",
    url: "https://standardnotes.com",
    description:
      "End-to-end encrypted notes that sync across devices, with a plain-text philosophy and an option to self-host. Quiet, unexciting and reliable.",
    category: 'productivity',
    tags: ['Notes', 'Privacy', 'Open source'],
    dateAdded: '2026-01-07',
  },
  {
    id: "super-productivity",
    title: "Super Productivity",
    url: "https://super-productivity.com",
    description:
      "Open-source task manager with time tracking and timeboxing built in, plus GitHub and Jira integrations. Local-first, MIT licensed, no account needed.",
    category: 'productivity',
    tags: ['Productivity', 'Tools', 'Open source'],
    dateAdded: '2026-10-02',
  },
  {
    id: "granola",
    title: "Granola",
    url: "https://www.granola.ai",
    description:
      "A meeting notepad that listens from your own machine — no bot joining the call — then merges your rough notes with the transcript. Free tier for individuals.",
    category: 'productivity',
    tags: ['AI', 'Productivity', 'Notes'],
    dateAdded: '2026-10-11',
  },
  {
    id: "unsplash",
    title: "Unsplash",
    url: "https://unsplash.com",
    description:
      "High-resolution photography free to use without attribution, though it is appreciated. Search is good enough to find a real photo rather than a stock abstraction.",
    category: 'media',
    tags: ['Images', 'Reference'],
    dateAdded: '2025-11-10',
  },
  {
    id: "pexels",
    title: "Pexels",
    url: "https://www.pexels.com",
    description:
      "Free stock photos and video clips under a permissive licence. A useful second library when Unsplash does not have the specific thing you need.",
    category: 'media',
    tags: ['Images', 'Video'],
    dateAdded: '2025-11-16',
  },
  {
    id: "coverr",
    title: "Coverr",
    url: "https://coverr.co",
    description:
      "Free background video clips for hero sections and landing pages, already graded and cropped sensibly. No attribution required.",
    category: 'media',
    tags: ['Video', 'Design'],
    dateAdded: '2025-11-25',
  },
  {
    id: "mixkit",
    title: "Mixkit",
    url: "https://mixkit.co",
    description:
      "Free stock video, music and sound effects with a licence you can actually read. Useful when a project needs a little motion and no budget.",
    category: 'media',
    tags: ['Video', 'Audio'],
    dateAdded: '2025-12-01',
  },
  {
    id: "freesound",
    title: "Freesound",
    url: "https://freesound.org",
    description:
      "A large community library of sound effects and field recordings, searchable by licence. Read the terms per file before shipping anything.",
    category: 'media',
    tags: ['Audio', 'Community'],
    dateAdded: '2025-12-10',
  },
  {
    id: "squoosh",
    title: "Squoosh",
    url: "https://squoosh.app",
    description:
      "Compress and convert images in the browser with a live before-and-after view. Every byte count is visible, and nothing is uploaded anywhere.",
    category: 'media',
    tags: ['Images', 'Performance', 'Tools'],
    dateAdded: '2025-12-17',
  },
  {
    id: "tinypng",
    title: "TinyPNG",
    url: "https://tinypng.com",
    description:
      "Drag-and-drop PNG and JPEG compression that usually cuts size by more than half with no visible difference. Batch upload is the paid part.",
    category: 'media',
    tags: ['Images', 'Performance', 'Tools'],
    dateAdded: '2025-12-23',
  },
  {
    id: "svgrepo",
    title: "SVG Repo",
    url: "https://www.svgrepo.com",
    description:
      "Tens of thousands of SVG icons and illustrations, filterable by licence and style, editable before download. Check the collection licence per icon.",
    category: 'media',
    tags: ['Icons', 'Images'],
    dateAdded: '2025-12-30',
  },
  {
    id: "undraw",
    title: "unDraw",
    url: "https://undraw.co",
    description:
      "Open-source illustrations you can recolour to match your brand before downloading. Consistent enough to use as a set rather than one-offs.",
    category: 'media',
    tags: ['Images', 'Design', 'Open source'],
    dateAdded: '2026-01-05',
  },
  {
    id: "iconify",
    title: "Iconify",
    url: "https://iconify.design",
    description:
      "One framework for over 200,000 icons from many sets, usable as SVG, React components or CSS. Search across all of them at once.",
    category: 'media',
    tags: ['Icons', 'Tools'],
    dateAdded: '2026-01-10',
  },
  {
    id: "cloudconvert",
    title: "CloudConvert",
    url: "https://cloudconvert.com",
    description:
      "Convert between hundreds of file formats, including documents, audio, video and ebooks, with sensible defaults and a usable free allowance.",
    category: 'media',
    tags: ['Tools', 'Video', 'Audio'],
    dateAdded: '2026-01-13',
  },
  {
    id: "photopea",
    title: "Photopea",
    url: "https://www.photopea.com",
    description:
      "A full image editor in a browser tab that opens PSD, XD, Sketch and Figma files. The closest free thing to Photoshop, and it works on any machine.",
    category: 'media',
    tags: ['Images', 'Tools', 'Design'],
    dateAdded: '2026-01-16',
  },
  {
    id: "claude",
    title: "Claude",
    url: "https://claude.ai",
    description:
      "An AI assistant created by Anthropic that can help with analysis, writing, coding, math, and creative tasks through natural conversation.",
    category: 'data-ai',
    tags: ['AI', 'Tools'],
    featured: true,
    dateAdded: '2025-11-11',
  },
  {
    id: "chatgpt",
    title: "ChatGPT",
    url: "https://chatgpt.com",
    description:
      "OpenAI's general-purpose assistant. Good at drafting, explaining and rewriting, and the free tier covers most everyday use without much friction.",
    category: 'data-ai',
    tags: ['AI', 'Tools'],
    dateAdded: '2025-11-18',
  },
  {
    id: "perplexity",
    title: "Perplexity",
    url: "https://www.perplexity.ai",
    description:
      "An answer engine that cites its sources as it goes, which makes it far easier to check than a plain chatbot. Useful for research with links you can follow.",
    category: 'data-ai',
    tags: ['AI', 'Reference', 'Tools'],
    dateAdded: '2025-11-26',
  },
  {
    id: "hugging-face",
    title: "Hugging Face",
    url: "https://huggingface.co",
    description:
      "The main hub for open models, datasets and demos. Browse what a model actually does before deciding whether to run it yourself.",
    category: 'data-ai',
    tags: ['AI', 'Data', 'Open source'],
    dateAdded: '2025-12-02',
  },
  {
    id: "kaggle",
    title: "Kaggle",
    url: "https://www.kaggle.com",
    description:
      "Datasets, notebooks and competitions, with free GPU hours attached. One of the few places where you can learn data work by doing it in public.",
    category: 'data-ai',
    tags: ['Data', 'Practice', 'Community'],
    dateAdded: '2025-12-08',
  },
  {
    id: "our-world-in-data",
    title: "Our World in Data",
    url: "https://ourworldindata.org",
    description:
      "Research and charts on the long-run trends that shape the world, with the underlying data and sources linked on every page. Rare and valuable.",
    category: 'data-ai',
    tags: ['Data', 'Reference'],
    dateAdded: '2025-12-14',
  },
  {
    id: "papers-with-code",
    title: "Papers with Code",
    url: "https://paperswithcode.com",
    description:
      "Machine learning papers paired with their implementations and benchmark tables. The fastest way from a result you read about to code you can run.",
    category: 'data-ai',
    tags: ['AI', 'Reference', 'Data'],
    dateAdded: '2025-12-20',
  },
  {
    id: "ollama",
    title: "Ollama",
    url: "https://ollama.com",
    description:
      "Run open models locally with one command, on your own machine, with no account or per-token billing. Good for privacy and for offline experiments.",
    category: 'data-ai',
    tags: ['AI', 'Tools', 'Privacy'],
    dateAdded: '2025-12-27',
  },
  {
    id: "observable",
    title: "Observable",
    url: "https://observablehq.com",
    description:
      "A notebook environment for data visualisation where charts update as you edit. The published examples alone are worth browsing.",
    category: 'data-ai',
    tags: ['Data', 'Tools', 'Learning'],
    dateAdded: '2026-01-03',
  },
  {
    id: "replicate",
    title: "Replicate",
    url: "https://replicate.com",
    description:
      "Run open models through an API without managing infrastructure, billed by the second. Useful for trying an idea before committing to a stack.",
    category: 'data-ai',
    tags: ['AI', 'Tools'],
    dateAdded: '2026-01-09',
  },
  {
    id: "gapminder",
    title: "Gapminder",
    url: "https://www.gapminder.org",
    description:
      "Interactive visualisations of global development data, built to correct persistent misconceptions about how the world is doing. The tools are free.",
    category: 'data-ai',
    tags: ['Data', 'Learning', 'Reference'],
    dateAdded: '2026-01-15',
  },
  {
    id: "dataset-search",
    title: "Google Dataset Search",
    url: "https://datasetsearch.research.google.com",
    description:
      "A search engine for datasets published across the web, with provenance and licensing on the results. Saves trawling for data that already exists.",
    category: 'data-ai',
    tags: ['Data', 'Reference', 'Tools'],
    dateAdded: '2026-01-18',
  },
  {
    id: "mdn-web-docs",
    title: "MDN Web Docs",
    url: "https://developer.mozilla.org",
    description:
      "The MDN Web Docs site provides information about Open Web technologies including HTML, CSS, and APIs for both Web sites and progressive web apps.",
    category: 'reference',
    tags: ['Reference', 'HTML', 'CSS', 'JavaScript'],
    featured: true,
    dateAdded: '2025-11-02',
  },
  {
    id: "caniuse",
    title: "Can I use",
    url: "https://caniuse.com",
    description:
      "Browser support tables for modern web technologies. Check whether a CSS property or JavaScript API is safe to ship before you commit to it.",
    category: 'reference',
    tags: ['Compatibility', 'Reference', 'CSS'],
    dateAdded: '2025-11-19',
  },
  {
    id: "devdocs",
    title: "DevDocs",
    url: "https://devdocs.io",
    description:
      "Dozens of API documentations in one fast, offline-capable interface with a single keyboard-driven search. The one tab to keep open while working.",
    category: 'reference',
    tags: ['Reference', 'Documentation', 'Tools'],
    dateAdded: '2025-11-25',
  },
  {
    id: "ts-handbook",
    title: "TypeScript Handbook",
    url: "https://www.typescriptlang.org/docs/handbook/intro.html",
    description:
      "The official guide to the type system, from everyday annotations to conditional types. Clearer and better sequenced than most third-party explainers.",
    category: 'reference',
    tags: ['Documentation', 'JavaScript', 'Reference'],
    dateAdded: '2025-12-01',
  },
  {
    id: "git-docs",
    title: "Git Reference",
    url: "https://git-scm.com/docs",
    description:
      "The official manual pages for every Git command, plus the free Pro Git book. Terse, complete, and the thing to read before copying a Stack Overflow answer.",
    category: 'reference',
    tags: ['Git', 'Documentation', 'Reference'],
    dateAdded: '2025-12-06',
  },
  {
    id: "httpstatuses",
    title: "HTTP Status Codes",
    url: "https://httpstatuses.com",
    description:
      "Every status code with an explanation short enough to read, and links to the relevant RFC section. Settles arguments about 422 versus 400.",
    category: 'reference',
    tags: ['Reference', 'Documentation'],
    dateAdded: '2025-12-11',
  },
  {
    id: "every-layout",
    title: "Every Layout",
    url: "https://every-layout.dev",
    description:
      "Layout primitives explained as algorithms rather than snippets: the stack, the sidebar, the switcher. Changes how you write CSS for structure.",
    category: 'reference',
    tags: ['Layout', 'CSS', 'Learning'],
    dateAdded: '2025-12-16',
  },
  {
    id: "owasp-cheatsheets",
    title: "OWASP Cheat Sheets",
    url: "https://cheatsheetseries.owasp.org",
    description:
      "Concise, practical guidance on the security problems web applications actually have, written for developers rather than auditors.",
    category: 'reference',
    tags: ['Reference', 'Privacy', 'Documentation'],
    dateAdded: '2025-12-22',
  },
  {
    id: "webaim",
    title: "WebAIM",
    url: "https://webaim.org",
    description:
      "Accessibility guidance with a contrast checker and articles that explain why a rule exists. The most practical starting point for building something usable by everyone.",
    category: 'reference',
    tags: ['Accessibility', 'Reference', 'Learning'],
    dateAdded: '2025-12-29',
  },
  {
    id: "inclusive-components",
    title: "Inclusive Components",
    url: "https://inclusive-components.design",
    description:
      "A book-length series that builds common interface patterns from an accessibility-first direction, explaining each ARIA decision as it goes.",
    category: 'reference',
    tags: ['Accessibility', 'Layout', 'Learning'],
    dateAdded: '2026-01-04',
  },
  {
    id: "npm-docs",
    title: "npm Docs",
    url: "https://docs.npmjs.com",
    description:
      "Reference for the package manager almost everything depends on: scripts, workspaces, publishing rules and the config flags that actually matter.",
    category: 'reference',
    tags: ['Documentation', 'Reference', 'Tools'],
    dateAdded: '2026-01-08',
  },
  {
    id: "html-spec",
    title: "HTML Living Standard",
    url: "https://html.spec.whatwg.org",
    description:
      "The specification itself. Dense and not a tutorial, but the only place where the answer to 'what is the browser supposed to do' is definitive.",
    category: 'reference',
    tags: ['HTML', 'Documentation', 'Reference'],
    dateAdded: '2026-01-12',
  },
];
