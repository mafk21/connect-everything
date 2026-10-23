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
    id: "untitled-ui",
    title: "Untitled UI",
    url: "https://www.untitledui.com",
    description:
      "A very large free Figma UI kit with auto layout, variables and a dark theme built in. The fastest way to start a product design without drawing every component yourself.",
    category: 'design',
    tags: ['Design', 'Tools', 'Reference'],
    dateAdded: '2026-09-28',
  },
  {
    id: "lucide",
    title: "Lucide",
    url: "https://lucide.dev",
    description:
      "An open-source icon set with a consistent 24px grid, shipped as SVG, React and Vue components. Clean enough to carry a whole interface without a second style.",
    category: 'design',
    tags: ['Icons', 'Design', 'Open source'],
    dateAdded: '2026-09-24',
  },
  {
    id: "phosphor-icons",
    title: "Phosphor Icons",
    url: "https://phosphoricons.com",
    description:
      "Over 9,000 icons in six weights, from thin to fill, all matching in geometry. Useful when you want one family to cover both decorative and UI needs.",
    category: 'design',
    tags: ['Icons', 'Design', 'Open source'],
    dateAdded: '2026-09-19',
  },
  {
    id: "tabler-icons",
    title: "Tabler Icons",
    url: "https://tabler.io/icons",
    description:
      "More than 5,000 stroke icons on a 24px grid, free for commercial use and available as SVG or a web font. A reliable fallback when a set is missing a symbol.",
    category: 'design',
    tags: ['Icons', 'Design', 'Open source'],
    dateAdded: '2026-09-15',
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
    id: "iconoir",
    title: "Iconoir",
    url: "https://iconoir.com",
    description:
      "A subtle, rounded icon library with a consistent stroke weight and a pleasant amount of personality. Ships as SVG and as React, Vue and Flutter packages.",
    category: 'design',
    tags: ['Icons', 'Design'],
    dateAdded: '2026-09-11',
  },
  {
    id: "simple-icons",
    title: "Simple Icons",
    url: "https://simpleicons.org",
    description:
      "Free SVG icons for over 3,000 brands, each with its official colour. The practical way to add GitHub, Figma or Slack marks without redrawing logos.",
    category: 'design',
    tags: ['Icons', 'Reference', 'Open source'],
    dateAdded: '2026-09-06',
  },
  {
    id: "behance",
    title: "Behance",
    url: "https://www.behance.net",
    description:
      "Portfolios from designers and studios across every discipline, browsable by field and city. Broader than Dribbble and often deeper on the case-study side.",
    category: 'design',
    tags: ['Design', 'Inspiration', 'Community'],
    dateAdded: '2026-09-02',
  },
  {
    id: "savee",
    title: "Savee",
    url: "https://savee.it",
    description:
      "A moodboard tool and inspiration feed in one, used widely by art directors. Save from anywhere with the extension, then keep boards private or share them.",
    category: 'design',
    tags: ['Design', 'Inspiration', 'Tools'],
    dateAdded: '2026-08-29',
  },
  {
    id: "godly",
    title: "Godly",
    url: "https://godly.website",
    description:
      "An astronomically curated feed of the best web design on the internet, with no submissions and no sponsored placements. Consistently a year ahead of templates.",
    category: 'design',
    tags: ['Design', 'Inspiration'],
    dateAdded: '2026-08-25',
  },
  {
    id: "land-book",
    title: "Land-book",
    url: "https://land-book.com",
    description:
      "A gallery of landing pages sorted by industry, style and section type. Handy when you need to see how twenty companies framed the same offer.",
    category: 'design',
    tags: ['Design', 'Inspiration', 'Layout'],
    dateAdded: '2026-08-21',
  },
  {
    id: "refero",
    title: "Refero",
    url: "https://refero.design",
    description:
      "Searchable screenshots of real product interfaces, filterable by element and pattern. Answers the specific question of how someone else solved this exact screen.",
    category: 'design',
    tags: ['Design', 'Reference', 'Inspiration'],
    dateAdded: '2026-08-17',
  },
  {
    id: "pageflows",
    title: "Pageflows",
    url: "https://pageflows.com",
    description:
      "Recorded user flows from real products, from onboarding to checkout. Worth watching before redesigning a flow you have only ever seen from the inside.",
    category: 'design',
    tags: ['Design', 'Reference', 'Learning'],
    dateAdded: '2026-08-13',
  },
  {
    id: "checklist-design",
    title: "Checklist Design",
    url: "https://www.checklist.design",
    description:
      "Best-practice checklists for individual interface elements, from empty states to pricing tables. A good second opinion before calling a screen finished.",
    category: 'design',
    tags: ['Design', 'Reference', 'Tips'],
    dateAdded: '2026-08-09',
  },
  {
    id: "nngroup",
    title: "Nielsen Norman Group",
    url: "https://www.nngroup.com",
    description:
      "Research-backed articles on usability, with the ten heuristics as the entry point. Unfashionable, evidence-first and still the best grounding in why interfaces fail.",
    category: 'design',
    tags: ['Design', 'Learning', 'Reference'],
    dateAdded: '2026-08-05',
  },
  {
    id: "baymard",
    title: "Baymard Institute",
    url: "https://baymard.com",
    description:
      "Large-scale usability research on ecommerce, published as benchmarks and free article summaries. The detail on checkout and search is unmatched anywhere.",
    category: 'design',
    tags: ['Design', 'Reference', 'Learning'],
    dateAdded: '2026-08-01',
  },
  {
    id: "refactoring-ui",
    title: "Refactoring UI",
    url: "https://www.refactoringui.com",
    description:
      "Visual design rules written for developers: hierarchy, spacing, colour and depth explained as decisions rather than taste. Paid, and worth it once.",
    category: 'design',
    tags: ['Design', 'Learning', 'Tips'],
    dateAdded: '2026-07-28',
  },
  {
    id: "ux-collective",
    title: "UX Collective",
    url: "https://uxdesign.cc",
    description:
      "One of the largest design publications on the web, with practitioner essays on process and craft. Variable quality, but the best pieces are genuinely useful.",
    category: 'design',
    tags: ['Design', 'Learning', 'Community'],
    dateAdded: '2026-07-24',
  },
  {
    id: "figjam",
    title: "FigJam",
    url: "https://www.figma.com/figjam/",
    description:
      "Figma's whiteboard for workshops, journey maps and sticky-note thinking, sharing the same file space as your designs. Free tier covers small teams.",
    category: 'design',
    tags: ['Design', 'Diagrams', 'Tools'],
    dateAdded: '2026-07-20',
  },
  {
    id: "miro",
    title: "Miro",
    url: "https://miro.com",
    description:
      "An infinite collaborative canvas with templates for almost any workshop format. The default when a session involves eight people and a whiteboard.",
    category: 'design',
    tags: ['Design', 'Diagrams', 'Tools'],
    dateAdded: '2026-07-16',
  },
  {
    id: "whimsical",
    title: "Whimsical",
    url: "https://whimsical.com",
    description:
      "Fast wireframes, flowcharts and mind maps in one editor, with a visual style that stays out of the way. Quicker than a full design tool for structure.",
    category: 'design',
    tags: ['Design', 'Diagrams', 'Tools'],
    dateAdded: '2026-07-12',
  },
  {
    id: "spline",
    title: "Spline",
    url: "https://spline.design",
    description:
      "3D design in the browser with a genuinely friendly learning curve, exporting to web-ready scenes. The shortest route to a dimensional hero section.",
    category: 'design',
    tags: ['Design', '3D', 'Tools'],
    dateAdded: '2026-07-08',
  },
  {
    id: "rive",
    title: "Rive",
    url: "https://rive.app",
    description:
      "Interactive animation that responds to state and input, rather than playing a fixed timeline. Small runtime, real interactivity, and a free tier to learn on.",
    category: 'design',
    tags: ['Animation', 'Design', 'Tools'],
    dateAdded: '2026-07-04',
  },
  {
    id: "jitter",
    title: "Jitter",
    url: "https://jitter.video",
    description:
      "Motion design for interface prototypes: import from Figma, animate with keyframes, export as video or Lottie. Fast enough to use during a design review.",
    category: 'design',
    tags: ['Animation', 'Design', 'Tools'],
    dateAdded: '2026-06-30',
  },
  {
    id: "canva",
    title: "Canva",
    url: "https://www.canva.com",
    description:
      "Template-driven design for slides, social posts and documents, with a large free library. Not a product design tool, but unbeatable for everything adjacent.",
    category: 'design',
    tags: ['Design', 'Tools', 'Images'],
    dateAdded: '2026-06-26',
  },
  {
    id: "uiverse",
    title: "Uiverse",
    url: "https://uiverse.io",
    description:
      "Community-made CSS components — buttons, loaders, checkboxes — with the HTML and CSS ready to copy. A good source of small ideas worth rewriting.",
    category: 'design',
    tags: ['CSS', 'Design', 'Community'],
    dateAdded: '2026-06-22',
  },
  {
    id: "khroma",
    title: "Khroma",
    url: "https://www.khroma.co",
    description:
      "Trains on the colours you pick, then generates palettes you will actually like. Faster than starting from a colour wheel for the tenth time.",
    category: 'design',
    tags: ['Color', 'Design', 'Tools'],
    dateAdded: '2026-06-18',
  },
  {
    id: "fontjoy",
    title: "Fontjoy",
    url: "https://fontjoy.com",
    description:
      "Generates font pairings with a single click and a slider for how much contrast you want. A quick way past the blank page on typography decisions.",
    category: 'design',
    tags: ['Typography', 'Fonts', 'Tools'],
    dateAdded: '2026-06-14',
  },
  {
    id: "typescale",
    title: "Typescale",
    url: "https://typescale.com",
    description:
      "Preview a modular type scale against real interface sizes before committing to it. Shows the ratios side by side, which settles most arguments quickly.",
    category: 'design',
    tags: ['Typography', 'Design', 'Tools'],
    dateAdded: '2026-06-10',
  },
  {
    id: "typewolf",
    title: "Typewolf",
    url: "https://www.typewolf.com",
    description:
      "Editorial-grade type recommendations and site reviews, with the fonts named. Useful for finding pairings that feel current rather than default.",
    category: 'design',
    tags: ['Typography', 'Fonts', 'Inspiration'],
    dateAdded: '2026-06-06',
  },
  {
    id: "fonts-in-use",
    title: "Fonts In Use",
    url: "https://fontsinuse.com",
    description:
      "A public archive of typography in the wild, indexed by typeface, format and industry. The way to judge a font before you commit a product to it.",
    category: 'design',
    tags: ['Typography', 'Fonts', 'Reference'],
    dateAdded: '2026-06-02',
  },
  {
    id: "font-squirrel",
    title: "Font Squirrel",
    url: "https://www.fontsquirrel.com",
    description:
      "Every font here is vetted for commercial use, which removes the licensing anxiety that follows most free font searches. Also generates webfont kits.",
    category: 'design',
    tags: ['Fonts', 'Typography', 'Reference'],
    dateAdded: '2026-05-29',
  },
  {
    id: "heropatterns",
    title: "Hero Patterns",
    url: "https://heropatterns.com",
    description:
      "Repeatable SVG background patterns with adjustable colour and opacity, copied as plain CSS. A cheap way to add texture without shipping an image.",
    category: 'design',
    tags: ['CSS', 'Design', 'Tools'],
    dateAdded: '2026-05-25',
  },
  {
    id: "shape-divider",
    title: "Shape Divider",
    url: "https://www.shapedivider.app",
    description:
      "Generate SVG section dividers by dragging handles, then copy the markup and CSS. Saves hand-writing bezier curves for a wave you will use once.",
    category: 'design',
    tags: ['CSS', 'Design', 'Tools'],
    dateAdded: '2026-05-21',
  },
  {
    id: "svg-backgrounds",
    title: "SVG Backgrounds",
    url: "https://www.svgbackgrounds.com",
    description:
      "Customisable SVG patterns and gradients with sensible presets, exported small enough to inline. Better than a hero image for most section backgrounds.",
    category: 'design',
    tags: ['CSS', 'Design', 'Images'],
    dateAdded: '2026-05-17',
  },
  {
    id: "blush",
    title: "Blush",
    url: "https://blush.design",
    description:
      "Mix-and-match illustration sets you can recolour to fit a brand, from several independent artists. Keeps a product from looking like the same stock pack as everyone else.",
    category: 'design',
    tags: ['Images', 'Design', 'Tools'],
    dateAdded: '2026-05-13',
  },
  {
    id: "humaaans",
    title: "Humaaans",
    url: "https://www.humaaans.com",
    description:
      "A modular illustration kit of people, poses and scenes that you compose yourself, in the brand colours you choose. Free for personal and commercial work.",
    category: 'design',
    tags: ['Images', 'Design', 'Open source'],
    dateAdded: '2026-05-09',
  },
  {
    id: "material-symbols",
    title: "Material Symbols",
    url: "https://fonts.google.com/icons",
    description:
      "Google's variable icon font with adjustable weight, fill, grade and optical size. One file replaces hundreds of icon requests if you accept the style.",
    category: 'design',
    tags: ['Icons', 'Design', 'Fonts'],
    dateAdded: '2026-05-05',
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
    id: "bootstrap",
    title: "Bootstrap",
    url: "https://getbootstrap.com",
    description:
      "The framework that made responsive layouts normal, still maintained and still the fastest way to a decent admin interface. Predictable, if not fashionable.",
    category: 'development',
    tags: ['CSS', 'Framework', 'Documentation'],
    dateAdded: '2026-10-20',
  },
  {
    id: "github-copilot",
    title: "GitHub Copilot",
    url: "https://github.com/features/copilot",
    description:
      "Inline completions and a chat panel inside your editor, with agent mode for multi-file changes. The default, and the one most teams already pay for.",
    category: 'development',
    tags: ['AI coding', 'Tools', 'Productivity'],
    dateAdded: '2026-10-19',
  },
  {
    id: "cursor",
    title: "Cursor",
    url: "https://cursor.com",
    description:
      "A VS Code fork rebuilt around AI: chat with your codebase, multi-file edits and agent runs. Feels like an editor designed after the models existed.",
    category: 'development',
    tags: ['AI coding', 'Tools'],
    dateAdded: '2026-10-16',
  },
  {
    id: "pico-css",
    title: "Pico CSS",
    url: "https://picocss.com",
    description:
      "A minimal stylesheet that styles semantic HTML with no classes at all. Ideal when the markup should stay clean and the page still needs to look considered.",
    category: 'development',
    tags: ['CSS', 'Framework', 'Open source'],
    dateAdded: '2026-10-16',
  },
  {
    id: "claude-code",
    title: "Claude Code",
    url: "https://www.anthropic.com/claude-code",
    description:
      "An agent that works in your terminal, reading the repo, running commands and writing commits. Strong on long, multi-step tasks you would rather not babysit.",
    category: 'development',
    tags: ['AI coding', 'CLI', 'Tools'],
    dateAdded: '2026-10-13',
  },
  {
    id: "open-props",
    title: "Open Props",
    url: "https://open-props.style",
    description:
      "A set of CSS custom properties for spacing, colour, easing and shadows, usable with or without the framework you already have. Sane defaults, no build step required.",
    category: 'development',
    tags: ['CSS', 'Design', 'Open source'],
    dateAdded: '2026-10-12',
  },
  {
    id: "windsurf",
    title: "Windsurf",
    url: "https://windsurf.com",
    description:
      "An AI-first editor built around an agent that keeps track of what it changed and why. The other serious alternative to Cursor.",
    category: 'development',
    tags: ['AI coding', 'Tools'],
    dateAdded: '2026-10-10',
  },
  {
    id: "daisyui",
    title: "daisyUI",
    url: "https://daisyui.com",
    description:
      "Component classes for Tailwind, so a button is a class rather than eleven utilities. Themes ship with it, which suits projects that need several looks quickly.",
    category: 'development',
    tags: ['CSS', 'Framework', 'Tools'],
    dateAdded: '2026-10-09',
  },
  {
    id: "zed",
    title: "Zed",
    url: "https://zed.dev",
    description:
      "A fast, collaborative editor written in Rust with AI assistance built in rather than bolted on. Open source, and it opens large files without complaint.",
    category: 'development',
    tags: ['AI coding', 'Tools', 'Open source'],
    dateAdded: '2026-10-07',
  },
  {
    id: "headless-ui",
    title: "Headless UI",
    url: "https://headlessui.com",
    description:
      "Unstyled, accessible React and Vue components from the Tailwind team, covering menus, dialogs and comboboxes. Less complete than Radix, smaller to learn.",
    category: 'development',
    tags: ['Accessibility', 'Framework', 'Open source'],
    dateAdded: '2026-10-06',
  },
  {
    id: "aider",
    title: "Aider",
    url: "https://aider.chat",
    description:
      "Terminal-based pair programming that edits files in place and commits each change with a sensible message. Works with almost any model you have a key for.",
    category: 'development',
    tags: ['AI coding', 'CLI', 'Open source'],
    dateAdded: '2026-10-04',
  },
  {
    id: "floating-ui",
    title: "Floating UI",
    url: "https://floating-ui.com",
    description:
      "Positioning for tooltips, popovers and dropdowns that actually stays on screen, with collision handling. The library behind most components that get this right.",
    category: 'development',
    tags: ['JavaScript', 'Tools', 'Open source'],
    dateAdded: '2026-10-03',
  },
  {
    id: "cline",
    title: "Cline",
    url: "https://cline.bot",
    description:
      "An open-source coding agent for VS Code that reads files, runs commands and shows every step for approval. Bring your own model and API key.",
    category: 'development',
    tags: ['AI coding', 'Tools', 'Open source'],
    dateAdded: '2026-10-01',
  },
  {
    id: "motion",
    title: "Motion",
    url: "https://motion.dev",
    description:
      "The animation library formerly known as Framer Motion, with a declarative API for React and a smaller vanilla core. Everything from a hover lift to layout transitions.",
    category: 'development',
    tags: ['Animation', 'JavaScript', 'Open source'],
    dateAdded: '2026-09-30',
  },
  {
    id: "continue",
    title: "Continue",
    url: "https://www.continue.dev",
    description:
      "A source-controlled AI assistant you configure yourself: models, context and rules live in your repo. The pragmatic choice when policy forbids hosted agents.",
    category: 'development',
    tags: ['AI coding', 'Tools', 'Open source'],
    dateAdded: '2026-09-28',
  },
  {
    id: "vue",
    title: "Vue",
    url: "https://vuejs.org",
    description:
      "A progressive framework with single-file components and unusually readable documentation. Adoptable in one component or a whole application, without a rewrite.",
    category: 'development',
    tags: ['Framework', 'JavaScript', 'Documentation'],
    dateAdded: '2026-09-27',
  },
  {
    id: "gsap",
    title: "GSAP",
    url: "https://gsap.com",
    description:
      "A timeline-based animation engine that has been the standard for scroll-driven storytelling for over a decade. Now free, including the plugins that used to cost money.",
    category: 'development',
    tags: ['Animation', 'JavaScript', 'Tools'],
    dateAdded: '2026-09-27',
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
    id: "v0",
    title: "v0",
    url: "https://v0.app",
    description:
      "Generates React and Tailwind interfaces from a prompt or a screenshot, with an editable result. Fast for prototypes, and the output is real code you can keep.",
    category: 'development',
    tags: ['AI coding', 'Tools', 'Design'],
    dateAdded: '2026-09-25',
  },
  {
    id: "threejs",
    title: "three.js",
    url: "https://threejs.org",
    description:
      "3D in the browser, with an enormous set of examples to learn from. The foundation of nearly every WebGL experience you have admired.",
    category: 'development',
    tags: ['3D', 'JavaScript', 'Open source'],
    dateAdded: '2026-09-24',
  },
  {
    id: "nuxt",
    title: "Nuxt",
    url: "https://nuxt.com",
    description:
      "The Vue meta-framework: file-based routing, server rendering and auto-imports. The conventions do most of the wiring, which is either liberating or constraining.",
    category: 'development',
    tags: ['Framework', 'JavaScript', 'Performance'],
    dateAdded: '2026-09-23',
  },
  {
    id: "bolt-new",
    title: "Bolt",
    url: "https://bolt.new",
    description:
      "Builds and runs a full web app in the browser from a prompt, including dependencies and deployment. Good for testing an idea in an afternoon.",
    category: 'development',
    tags: ['AI coding', 'Tools'],
    dateAdded: '2026-09-22',
  },
  {
    id: "pixijs",
    title: "PixiJS",
    url: "https://pixijs.com",
    description:
      "A fast 2D renderer for the web, aimed at games and interactive scenes rather than documents. Good when the DOM is the wrong tool for the job.",
    category: 'development',
    tags: ['Animation', 'JavaScript', 'Open source'],
    dateAdded: '2026-09-21',
  },
  {
    id: "lovable",
    title: "Lovable",
    url: "https://lovable.dev",
    description:
      "Prompt-to-app for full-stack projects with a Supabase backend attached. Less control than writing it yourself, dramatically less time to something clickable.",
    category: 'development',
    tags: ['AI coding', 'Tools'],
    dateAdded: '2026-09-19',
  },
  {
    id: "angular",
    title: "Angular",
    url: "https://angular.dev",
    description:
      "A batteries-included framework with dependency injection, routing and forms first-party. Heavy on structure, which pays off on large teams with long horizons.",
    category: 'development',
    tags: ['Framework', 'JavaScript', 'Documentation'],
    dateAdded: '2026-09-18',
  },
  {
    id: "tanstack-table",
    title: "TanStack Table",
    url: "https://tanstack.com/table",
    description:
      "Headless table logic: sorting, filtering, grouping and virtualisation, with the markup left to you. The reason your data grid does not have to be a dependency.",
    category: 'development',
    tags: ['JavaScript', 'Tools', 'Performance'],
    dateAdded: '2026-09-18',
  },
  {
    id: "openhands",
    title: "OpenHands",
    url: "https://github.com/All-Hands-AI/OpenHands",
    description:
      "An open-source software agent that runs in a sandbox and does whole tasks from an issue description. Self-hostable, which matters for private codebases.",
    category: 'development',
    tags: ['AI coding', 'Open source', 'Tools'],
    dateAdded: '2026-09-16',
  },
  {
    id: "react-hook-form",
    title: "React Hook Form",
    url: "https://react-hook-form.com",
    description:
      "Form state without re-rendering on every keystroke, with validation that integrates with schema libraries. The practical fix for forms that feel sluggish.",
    category: 'development',
    tags: ['JavaScript', 'Framework', 'Performance'],
    dateAdded: '2026-09-15',
  },
  {
    id: "sveltekit",
    title: "SvelteKit",
    url: "https://svelte.dev/docs/kit",
    description:
      "Svelte's application framework, with routing, server endpoints and adapters for any host. Sends less JavaScript than React by default and reads more like plain HTML.",
    category: 'development',
    tags: ['Framework', 'JavaScript', 'Performance'],
    dateAdded: '2026-09-14',
  },
  {
    id: "zustand",
    title: "Zustand",
    url: "https://zustand.docs.pmnd.rs",
    description:
      "A tiny state store with no boilerplate: one hook, one object, selectors when you need them. What most applications reach for instead of a full state framework.",
    category: 'development',
    tags: ['JavaScript', 'Tools', 'Open source'],
    dateAdded: '2026-09-12',
  },
  {
    id: "solidjs",
    title: "SolidJS",
    url: "https://www.solidjs.com",
    description:
      "Fine-grained reactivity without a virtual DOM, so updates touch only what changed. Familiar JSX syntax with a materially different mental model underneath.",
    category: 'development',
    tags: ['Framework', 'JavaScript', 'Performance'],
    dateAdded: '2026-09-10',
  },
  {
    id: "jotai",
    title: "Jotai",
    url: "https://jotai.org",
    description:
      "Atomic state for React, where each piece is independent and derived values recompute themselves. A better fit than a global store for fine-grained interfaces.",
    category: 'development',
    tags: ['JavaScript', 'Tools', 'Open source'],
    dateAdded: '2026-09-09',
  },
  {
    id: "xstate",
    title: "XState",
    url: "https://stately.ai/docs/xstate",
    description:
      "State machines and actors for interfaces with genuinely complex behaviour, with a visual editor that checks your logic. Heavy for a toggle, transformative for a flow.",
    category: 'development',
    tags: ['JavaScript', 'Diagrams', 'Tools'],
    dateAdded: '2026-09-06',
  },
  {
    id: "qwik",
    title: "Qwik",
    url: "https://qwik.dev",
    description:
      "A framework built around resumability rather than hydration, aiming for instant interactivity on any page. Interesting even if you never ship it.",
    category: 'development',
    tags: ['Framework', 'JavaScript', 'Performance'],
    dateAdded: '2026-09-05',
  },
  {
    id: "swr",
    title: "SWR",
    url: "https://swr.vercel.app",
    description:
      "Data fetching with stale-while-revalidate caching in a single hook, from the team behind Next.js. Less capable than TanStack Query, and much smaller.",
    category: 'development',
    tags: ['JavaScript', 'Performance', 'Tools'],
    dateAdded: '2026-09-03',
  },
  {
    id: "remix",
    title: "Remix",
    url: "https://remix.run",
    description:
      "Web-standards routing with loaders and actions, so forms and data work without client state libraries. Now folded into React Router but still worth reading.",
    category: 'development',
    tags: ['Framework', 'JavaScript', 'Performance'],
    dateAdded: '2026-09-01',
  },
  {
    id: "valibot",
    title: "Valibot",
    url: "https://valibot.dev",
    description:
      "Schema validation with a tree-shakeable API, so a bundle only pays for the checks it uses. The lightweight alternative to Zod when size is the constraint.",
    category: 'development',
    tags: ['JavaScript', 'Tools', 'Performance'],
    dateAdded: '2026-08-31',
  },
  {
    id: "nodejs",
    title: "Node.js",
    url: "https://nodejs.org",
    description:
      "The JavaScript runtime everything else runs on, with LTS releases that make upgrade planning boring. The docs are plain but the guides are reliable.",
    category: 'development',
    tags: ['JavaScript', 'Documentation', 'Tools'],
    dateAdded: '2026-08-28',
  },
  {
    id: "date-fns",
    title: "date-fns",
    url: "https://date-fns.org",
    description:
      "Date utilities as individual functions rather than one mutable object, which plays well with tree shaking and immutable data. The sane default for date maths.",
    category: 'development',
    tags: ['JavaScript', 'Tools', 'Open source'],
    dateAdded: '2026-08-28',
  },
  {
    id: "msw",
    title: "Mock Service Worker",
    url: "https://mswjs.io",
    description:
      "Mocks APIs at the network layer, so tests and local development share the same handlers. Removes the fixture sprawl that comes with mocking modules.",
    category: 'development',
    tags: ['Testing', 'JavaScript', 'Open source'],
    dateAdded: '2026-08-25',
  },
  {
    id: "deno",
    title: "Deno",
    url: "https://deno.com",
    description:
      "A secure-by-default runtime with TypeScript built in, a standard library and no node_modules. The permissions model is the part worth stealing.",
    category: 'development',
    tags: ['JavaScript', 'Tools', 'Security'],
    dateAdded: '2026-08-24',
  },
  {
    id: "testing-library",
    title: "Testing Library",
    url: "https://testing-library.com",
    description:
      "Queries components the way a user finds them — by role and label — which quietly enforces accessibility. The philosophy is the valuable part.",
    category: 'development',
    tags: ['Testing', 'Accessibility', 'JavaScript'],
    dateAdded: '2026-08-22',
  },
  {
    id: "bun",
    title: "Bun",
    url: "https://bun.sh",
    description:
      "A runtime, package manager, bundler and test runner in one binary, optimised for speed. Impressively fast installs; check ecosystem edges before betting on it.",
    category: 'development',
    tags: ['JavaScript', 'Tools', 'Performance'],
    dateAdded: '2026-08-20',
  },
  {
    id: "k6",
    title: "k6",
    url: "https://k6.io",
    description:
      "Load testing with scripts written in JavaScript, run from the command line or CI. Answers whether the thing survives traffic before traffic arrives.",
    category: 'development',
    tags: ['Testing', 'Performance', 'Tools'],
    dateAdded: '2026-08-19',
  },
  {
    id: "express",
    title: "Express",
    url: "https://expressjs.com",
    description:
      "The minimal Node web framework that most tutorials still assume. Small, unopinionated, and still the shortest path from an idea to a running endpoint.",
    category: 'development',
    tags: ['Framework', 'JavaScript', 'Documentation'],
    dateAdded: '2026-08-16',
  },
  {
    id: "lighthouse-ci",
    title: "Lighthouse CI",
    url: "https://github.com/GoogleChrome/lighthouse-ci",
    description:
      "Runs Lighthouse on every pull request and fails when performance budgets slip. The mechanism that makes a performance score an actual constraint.",
    category: 'development',
    tags: ['Performance', 'Testing', 'DevOps'],
    dateAdded: '2026-08-16',
  },
  {
    id: "nx",
    title: "Nx",
    url: "https://nx.dev",
    description:
      "Monorepo tooling with dependency graphs, affected-only builds and generators, more opinionated and more capable than plain workspaces.",
    category: 'development',
    tags: ['Tools', 'DevOps', 'Performance'],
    dateAdded: '2026-08-13',
  },
  {
    id: "fastify",
    title: "Fastify",
    url: "https://fastify.dev",
    description:
      "A Node framework built for throughput, with schema-based validation and a plugin system. Where Express stops scaling, this is usually the next thing you try.",
    category: 'development',
    tags: ['Framework', 'JavaScript', 'Performance'],
    dateAdded: '2026-08-12',
  },
  {
    id: "lightning-css",
    title: "Lightning CSS",
    url: "https://lightningcss.dev",
    description:
      "A very fast CSS parser, transformer and minifier written in Rust, handling nesting and vendor prefixes. What more build pipelines will look like.",
    category: 'development',
    tags: ['CSS', 'Performance', 'Tools'],
    dateAdded: '2026-08-10',
  },
  {
    id: "hono",
    title: "Hono",
    url: "https://hono.dev",
    description:
      "A tiny, fast web framework that runs on Node, Bun, Deno and edge workers with the same code. The routing API is small enough to memorise.",
    category: 'development',
    tags: ['Framework', 'JavaScript', 'Performance'],
    dateAdded: '2026-08-08',
  },
  {
    id: "railway",
    title: "Railway",
    url: "https://railway.com",
    description:
      "Deploys a service and a database in a few clicks, with logs and metrics attached. The least ceremony between a repository and a running API.",
    category: 'development',
    tags: ['Cloud', 'DevOps', 'Tools'],
    dateAdded: '2026-08-07',
  },
  {
    id: "nestjs",
    title: "NestJS",
    url: "https://nestjs.com",
    description:
      "A structured Node framework with modules, decorators and dependency injection, borrowing heavily from Angular. Opinionated enough to keep large codebases consistent.",
    category: 'development',
    tags: ['Framework', 'JavaScript', 'Documentation'],
    dateAdded: '2026-08-04',
  },
  {
    id: "fly-io",
    title: "Fly.io",
    url: "https://fly.io",
    description:
      "Runs containers close to users in many regions, with Postgres and volume storage. The practical step up from a single-region host.",
    category: 'development',
    tags: ['Cloud', 'DevOps', 'Performance'],
    dateAdded: '2026-08-04',
  },
  {
    id: "neon",
    title: "Neon",
    url: "https://neon.tech",
    description:
      "Serverless Postgres with branching, so a pull request can have its own database copy. The copy-and-branch model is what makes it interesting.",
    category: 'development',
    tags: ['Databases', 'Cloud', 'DevOps'],
    dateAdded: '2026-08-01',
  },
  {
    id: "trpc",
    title: "tRPC",
    url: "https://trpc.io",
    description:
      "End-to-end type safety between a TypeScript server and client with no schema or codegen step. The ergonomics are excellent if both ends are yours.",
    category: 'development',
    tags: ['JavaScript', 'Tools', 'Documentation'],
    dateAdded: '2026-07-31',
  },
  {
    id: "turso",
    title: "Turso",
    url: "https://turso.tech",
    description:
      "SQLite replicated to the edge with per-database pricing, and embedded replicas that read locally. An appealing option for read-heavy applications.",
    category: 'development',
    tags: ['Databases', 'Cloud', 'Performance'],
    dateAdded: '2026-07-29',
  },
  {
    id: "graphql",
    title: "GraphQL",
    url: "https://graphql.org",
    description:
      "A query language for APIs where the client asks for exactly the fields it needs. The spec and the learn section are the right starting point, not the tooling.",
    category: 'development',
    tags: ['Documentation', 'Tools', 'Reference'],
    dateAdded: '2026-07-27',
  },
  {
    id: "upstash",
    title: "Upstash",
    url: "https://upstash.com",
    description:
      "Serverless Redis and Kafka with per-request pricing that scales to zero. Fits the usage pattern of most small applications far better than a fixed instance.",
    category: 'development',
    tags: ['Databases', 'Cloud', 'Tools'],
    dateAdded: '2026-07-26',
  },
  {
    id: "prisma",
    title: "Prisma",
    url: "https://www.prisma.io",
    description:
      "A typed ORM with a declarative schema and generated client, plus migrations that read clearly. Good when you want the database model to be the source of truth.",
    category: 'development',
    tags: ['Databases', 'Tools', 'JavaScript'],
    dateAdded: '2026-07-23',
  },
  {
    id: "otel",
    title: "OpenTelemetry",
    url: "https://opentelemetry.io",
    description:
      "The vendor-neutral standard for traces, metrics and logs, with SDKs for every major language. Instrument once, and send it wherever you like.",
    category: 'development',
    tags: ['DevOps', 'Documentation', 'Open source'],
    dateAdded: '2026-07-23',
  },
  {
    id: "drizzle",
    title: "Drizzle ORM",
    url: "https://orm.drizzle.team",
    description:
      "A TypeScript ORM that stays close to SQL, with typed queries that look like the statements they compile to. Thin enough that the abstraction rarely surprises.",
    category: 'development',
    tags: ['Databases', 'Tools', 'JavaScript'],
    dateAdded: '2026-07-19',
  },
  {
    id: "supabase",
    title: "Supabase",
    url: "https://supabase.com",
    description:
      "Postgres with auth, storage, realtime and row-level security attached, plus a generous free tier. The open-source answer to a backend-as-a-service.",
    category: 'development',
    tags: ['Databases', 'Tools', 'Open source'],
    dateAdded: '2026-07-15',
  },
  {
    id: "firebase",
    title: "Firebase",
    url: "https://firebase.google.com",
    description:
      "Google's managed backend: auth, a document database, hosting and functions. Fast to stand up, and worth pricing carefully before you depend on it.",
    category: 'development',
    tags: ['Databases', 'Tools', 'Cloud'],
    dateAdded: '2026-07-11',
  },
  {
    id: "docker-docs",
    title: "Docker Documentation",
    url: "https://docs.docker.com",
    description:
      "The reference for images, containers and Compose, with getting-started guides that assume nothing. The Compose file reference alone earns a bookmark.",
    category: 'development',
    tags: ['DevOps', 'Documentation', 'Tools'],
    dateAdded: '2026-07-07',
  },
  {
    id: "github-actions",
    title: "GitHub Actions",
    url: "https://docs.github.com/en/actions",
    description:
      "CI/CD that lives beside the code, with a marketplace of reusable actions. The workflow syntax is fiddly, but the free minutes cover most small projects.",
    category: 'development',
    tags: ['DevOps', 'Git', 'Tools'],
    dateAdded: '2026-07-03',
  },
  {
    id: "biome",
    title: "Biome",
    url: "https://biomejs.dev",
    description:
      "A single fast tool for formatting and linting JavaScript, TypeScript and CSS, replacing Prettier and ESLint together. Written in Rust, so it is quick enough to never disable.",
    category: 'development',
    tags: ['Tools', 'JavaScript', 'Performance'],
    dateAdded: '2026-06-29',
  },
  {
    id: "eslint",
    title: "ESLint",
    url: "https://eslint.org",
    description:
      "The long-standing linter for JavaScript, with a rule for nearly every stylistic argument your team has had. Plugin ecosystem is still its advantage.",
    category: 'development',
    tags: ['Tools', 'JavaScript', 'Documentation'],
    dateAdded: '2026-06-25',
  },
  {
    id: "prettier",
    title: "Prettier",
    url: "https://prettier.io",
    description:
      "An opinionated formatter that ended formatting debates by removing the choice. Configure it once, then stop thinking about indentation forever.",
    category: 'development',
    tags: ['Tools', 'JavaScript', 'Documentation'],
    dateAdded: '2026-06-21',
  },
  {
    id: "playwright",
    title: "Playwright",
    url: "https://playwright.dev",
    description:
      "Cross-browser end-to-end testing with auto-waiting, tracing and a codegen mode. The trace viewer is the reason it beats older tools when a test fails in CI.",
    category: 'development',
    tags: ['Testing', 'Tools', 'JavaScript'],
    dateAdded: '2026-06-17',
  },
  {
    id: "cypress",
    title: "Cypress",
    url: "https://www.cypress.io",
    description:
      "Browser testing with a live reloading runner and time-travel debugging. Pleasant to write, though parallel runs and cross-browser support sit behind pricing.",
    category: 'development',
    tags: ['Testing', 'Tools', 'JavaScript'],
    dateAdded: '2026-06-13',
  },
  {
    id: "storybook",
    title: "Storybook",
    url: "https://storybook.js.org",
    description:
      "Develop and document components in isolation, with a catalogue that doubles as a design reference. The visual regression add-ons are the quiet superpower.",
    category: 'development',
    tags: ['Testing', 'Design', 'Tools'],
    dateAdded: '2026-06-09',
  },
  {
    id: "tanstack-query",
    title: "TanStack Query",
    url: "https://tanstack.com/query",
    description:
      "Server state for React and friends: caching, refetching and request deduplication handled properly. Replaces most of the client-side store you were about to write.",
    category: 'development',
    tags: ['JavaScript', 'Tools', 'Performance'],
    dateAdded: '2026-06-05',
  },
  {
    id: "react-router",
    title: "React Router",
    url: "https://reactrouter.com",
    description:
      "The routing library React apps settled on, now with loaders and actions in framework mode. The docs explain the trade-offs rather than hiding them.",
    category: 'development',
    tags: ['JavaScript', 'Framework', 'Documentation'],
    dateAdded: '2026-06-01',
  },
  {
    id: "radix-ui",
    title: "Radix UI",
    url: "https://www.radix-ui.com",
    description:
      "Unstyled, accessible React primitives for dialogs, menus and popovers, with the keyboard behaviour already solved. Style them yourself, skip the ARIA archaeology.",
    category: 'development',
    tags: ['Accessibility', 'Framework', 'Open source'],
    dateAdded: '2026-05-28',
  },
  {
    id: "esbuild",
    title: "esbuild",
    url: "https://esbuild.github.io",
    description:
      "A bundler written in Go that is orders of magnitude faster than what came before. Most modern tooling uses it underneath, which is a good reason to understand it.",
    category: 'development',
    tags: ['Tools', 'Performance', 'JavaScript'],
    dateAdded: '2026-05-24',
  },
  {
    id: "turborepo",
    title: "Turborepo",
    url: "https://turborepo.com",
    description:
      "Task running and caching for monorepos, so unchanged packages are not rebuilt. Setup is light, and the difference on a large repo is immediate.",
    category: 'development',
    tags: ['Tools', 'Performance', 'DevOps'],
    dateAdded: '2026-05-20',
  },
  {
    id: "vercel",
    title: "Vercel",
    url: "https://vercel.com",
    description:
      "Deployment with preview URLs per branch, sensible defaults and instant rollbacks. Optimised for Next.js but works for any static or server output.",
    category: 'development',
    tags: ['Cloud', 'DevOps', 'Tools'],
    dateAdded: '2026-05-16',
  },
  {
    id: "netlify",
    title: "Netlify",
    url: "https://www.netlify.com",
    description:
      "Static hosting with forms, functions and deploy previews, and a free tier that covers small sites indefinitely. The original push-to-deploy experience.",
    category: 'development',
    tags: ['Cloud', 'DevOps', 'Tools'],
    dateAdded: '2026-05-12',
  },
  {
    id: "cloudflare-pages",
    title: "Cloudflare Pages",
    url: "https://pages.cloudflare.com",
    description:
      "Static and full-stack hosting on Cloudflare's edge, with generous bandwidth and Workers for dynamic bits. Often the cheapest option at any real traffic.",
    category: 'development',
    tags: ['Cloud', 'DevOps', 'Performance'],
    dateAdded: '2026-05-08',
  },
  {
    id: "postcss",
    title: "PostCSS",
    url: "https://postcss.org",
    description:
      "The plugin runner that turns modern CSS syntax into something every browser accepts. You probably use it already without knowing, through Autoprefixer.",
    category: 'development',
    tags: ['CSS', 'Tools', 'Performance'],
    dateAdded: '2026-05-04',
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
    id: "deeplearning-ai",
    title: "DeepLearning.AI",
    url: "https://www.deeplearning.ai",
    description:
      "Andrew Ng's courses, including the short LLM series on prompting, RAG and agents. Free to audit, and unusually well paced for working developers.",
    category: 'learning',
    tags: ['Learning', 'LLM', 'Tutorial'],
    dateAdded: '2026-10-18',
  },
  {
    id: "karpathy-zero-to-hero",
    title: "Neural Networks: Zero to Hero",
    url: "https://karpathy.ai/zero-to-hero.html",
    description:
      "Andrej Karpathy builds backpropagation, a tokeniser and GPT from scratch on video, explaining every line. The clearest path from curiosity to understanding.",
    category: 'learning',
    tags: ['Learning', 'LLM', 'Video'],
    dateAdded: '2026-10-15',
  },
  {
    id: "hf-learn",
    title: "Hugging Face Learn",
    url: "https://huggingface.co/learn",
    description:
      "Free courses on NLP, transformers, agents and diffusion, each paired with runnable notebooks. The most current structured material on open models.",
    category: 'learning',
    tags: ['Learning', 'LLM', 'Tutorial'],
    dateAdded: '2026-10-12',
  },
  {
    id: "3blue1brown-nn",
    title: "3Blue1Brown: Neural Networks",
    url: "https://www.3blue1brown.com/topics/neural-networks",
    description:
      "Visual explanations of what a neural network is doing, from gradient descent to transformers. Watch these before the maths-heavy course.",
    category: 'learning',
    tags: ['Learning', 'Video', 'AI'],
    dateAdded: '2026-10-09',
  },
  {
    id: "google-ml-crash-course",
    title: "Google Machine Learning Crash Course",
    url: "https://developers.google.com/machine-learning/crash-course",
    description:
      "A free, practical introduction with interactive exercises on real datasets. Covers the fundamentals without assuming a research background.",
    category: 'learning',
    tags: ['Learning', 'Tutorial', 'Data'],
    dateAdded: '2026-10-06',
  },
  {
    id: "lilian-weng",
    title: "Lil'Log",
    url: "https://lilianweng.github.io",
    description:
      "Deep, carefully sourced posts on agents, hallucination, diffusion and retrieval, written by a researcher who explains mechanisms rather than results.",
    category: 'learning',
    tags: ['LLM', 'Learning', 'Reference'],
    dateAdded: '2026-10-03',
  },
  {
    id: "simon-willison",
    title: "Simon Willison's Weblog",
    url: "https://simonwillison.net",
    description:
      "Daily, sceptical, hands-on notes on LLM tooling and what actually works. The most reliable signal-to-noise in a field that mostly produces noise.",
    category: 'learning',
    tags: ['LLM', 'Learning', 'AI coding'],
    dateAdded: '2026-09-30',
  },
  {
    id: "latent-space",
    title: "Latent Space",
    url: "https://www.latent.space",
    description:
      "A podcast and newsletter for people building with AI, heavy on engineering detail and interviews with the people shipping. Practical rather than breathless.",
    category: 'learning',
    tags: ['Podcasts', 'LLM', 'Learning'],
    dateAdded: '2026-09-27',
  },
  {
    id: "mdn-learn",
    title: "MDN Learn",
    url: "https://developer.mozilla.org/en-US/docs/Learn_web_development",
    description:
      "Structured beginner-to-intermediate courses on HTML, CSS and JavaScript, written by the same people who maintain the reference. Free, and better sequenced than most paid courses.",
    category: 'learning',
    tags: ['Learning', 'Tutorial', 'HTML'],
    dateAdded: '2026-09-26',
  },
  {
    id: "learn-prompting",
    title: "Learn Prompting",
    url: "https://learnprompting.org",
    description:
      "A free, structured course from basic prompting to retrieval and agents, with exercises. Opens with what the models cannot do, which is rare.",
    category: 'learning',
    tags: ['Learning', 'LLM', 'Tutorial'],
    dateAdded: '2026-09-24',
  },
  {
    id: "full-stack-open",
    title: "Full Stack Open",
    url: "https://fullstackopen.com/en/",
    description:
      "A free University of Helsinki course on modern web development with React, Node and GraphQL, with exercises that count toward ECTS credits. Genuinely rigorous.",
    category: 'learning',
    tags: ['Learning', 'Practice', 'JavaScript'],
    dateAdded: '2026-09-22',
  },
  {
    id: "illustrated-transformer",
    title: "The Illustrated Transformer",
    url: "https://jalammar.github.io/illustrated-transformer/",
    description:
      "Attention and transformers explained with diagrams rather than notation, step by step through a translation example. The clearest forty minutes you can spend on the architecture.",
    category: 'learning',
    tags: ['LLM', 'Learning', 'Reference'],
    dateAdded: '2026-09-21',
  },
  {
    id: "boot-dev",
    title: "Boot.dev",
    url: "https://www.boot.dev",
    description:
      "A gamified back-end curriculum covering Python, Go, SQL and systems, built around exercises rather than videos. Paid, with a free tier to test the format.",
    category: 'learning',
    tags: ['Learning', 'Practice', 'Tutorial'],
    dateAdded: '2026-09-17',
  },
  {
    id: "codecademy",
    title: "Codecademy",
    url: "https://www.codecademy.com",
    description:
      "Interactive lessons where you write code in the browser from the first minute. The free tier covers fundamentals; the career paths are the paid part.",
    category: 'learning',
    tags: ['Learning', 'Practice', 'Tutorial'],
    dateAdded: '2026-09-13',
  },
  {
    id: "khan-academy-computing",
    title: "Khan Academy Computing",
    url: "https://www.khanacademy.org/computing",
    description:
      "Free courses on algorithms, cryptography and information theory, taught with unusual clarity. Good for filling the gaps a framework tutorial leaves behind.",
    category: 'learning',
    tags: ['Learning', 'Tutorial', 'Practice'],
    dateAdded: '2026-09-09',
  },
  {
    id: "coursera",
    title: "Coursera",
    url: "https://www.coursera.org",
    description:
      "University and company courses with graded assignments and certificates, many auditable for free. The computer science catalogue is deep if you pick carefully.",
    category: 'learning',
    tags: ['Learning', 'Tutorial'],
    dateAdded: '2026-09-04',
  },
  {
    id: "edx",
    title: "edX",
    url: "https://www.edx.org",
    description:
      "Courses from universities including MIT and Harvard, auditable at no cost. Less polished than Coursera, with more genuinely academic material.",
    category: 'learning',
    tags: ['Learning', 'Tutorial'],
    dateAdded: '2026-08-31',
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
    id: "frontend-masters",
    title: "Frontend Masters",
    url: "https://frontendmasters.com",
    description:
      "Deep, instructor-led courses from people who wrote the libraries, with full transcripts and exercise files. Paid, and the quality is consistently above average.",
    category: 'learning',
    tags: ['Learning', 'Tutorial', 'JavaScript'],
    dateAdded: '2026-08-27',
  },
  {
    id: "egghead",
    title: "egghead",
    url: "https://egghead.io",
    description:
      "Short, focused video lessons on modern JavaScript and React, usually ten minutes each. Good for filling one specific gap without sitting through a course.",
    category: 'learning',
    tags: ['Learning', 'Tutorial', 'JavaScript'],
    dateAdded: '2026-08-23',
  },
  {
    id: "laracasts",
    title: "Laracasts",
    url: "https://laracasts.com",
    description:
      "The best-produced screencasts in web development, nominally about Laravel but covering JavaScript, testing and tooling too. Some series are free.",
    category: 'learning',
    tags: ['Learning', 'Tutorial', 'Community'],
    dateAdded: '2026-08-19',
  },
  {
    id: "leetcode",
    title: "LeetCode",
    url: "https://leetcode.com",
    description:
      "Thousands of algorithm problems with a judge and editorial solutions, organised by pattern. Useful practice, with the caveat that interviews are not the job.",
    category: 'learning',
    tags: ['Practice', 'Learning', 'Community'],
    dateAdded: '2026-08-15',
  },
  {
    id: "codewars",
    title: "Codewars",
    url: "https://www.codewars.com",
    description:
      "Small kata in dozens of languages, ranked by difficulty, where you see how others solved the same problem afterwards. The comparison is the point.",
    category: 'learning',
    tags: ['Practice', 'Learning', 'Community'],
    dateAdded: '2026-08-11',
  },
  {
    id: "advent-of-code",
    title: "Advent of Code",
    url: "https://adventofcode.com",
    description:
      "Twenty-five two-part puzzles every December, language-agnostic and increasingly devious. A yearly excuse to write code for fun rather than for a ticket.",
    category: 'learning',
    tags: ['Practice', 'Learning', 'Community'],
    dateAdded: '2026-08-07',
  },
  {
    id: "project-euler",
    title: "Project Euler",
    url: "https://projecteuler.net",
    description:
      "Hundreds of mathematical programming problems that reward cleverness over brute force. Older than most of the web, and still a good workout.",
    category: 'learning',
    tags: ['Practice', 'Learning'],
    dateAdded: '2026-08-03',
  },
  {
    id: "javascript30",
    title: "JavaScript30",
    url: "https://javascript30.com",
    description:
      "Thirty small vanilla JavaScript projects, built live with no frameworks and no dependencies. The antidote to tutorial hell for anyone who only knows React.",
    category: 'learning',
    tags: ['JavaScript', 'Practice', 'Tutorial'],
    dateAdded: '2026-07-30',
  },
  {
    id: "flexbox-froggy",
    title: "Flexbox Froggy",
    url: "https://flexboxfroggy.com",
    description:
      "A puzzle game that teaches flexbox by moving frogs onto lily pads. You will remember the properties afterwards, which is more than videos manage.",
    category: 'learning',
    tags: ['CSS', 'Layout', 'Practice'],
    dateAdded: '2026-07-26',
  },
  {
    id: "grid-garden",
    title: "Grid Garden",
    url: "https://cssgridgarden.com",
    description:
      "The grid equivalent of Flexbox Froggy: water the carrots, learn grid-column and grid-area. Twenty-eight levels, and it takes about half an hour.",
    category: 'learning',
    tags: ['CSS', 'Layout', 'Practice'],
    dateAdded: '2026-07-22',
  },
  {
    id: "grid-by-example",
    title: "Grid by Example",
    url: "https://gridbyexample.com",
    description:
      "Rachel Andrew's collection of CSS grid patterns, each small enough to read in a minute. The reference you want open while actually writing layout code.",
    category: 'learning',
    tags: ['CSS', 'Layout', 'Reference'],
    dateAdded: '2026-07-18',
  },
  {
    id: "30-seconds-of-code",
    title: "30 seconds of code",
    url: "https://www.30secondsofcode.org",
    description:
      "Short, tested snippets for JavaScript, CSS and React, each explained in a paragraph. Good for recalling the modern way to do something you last did in 2019.",
    category: 'learning',
    tags: ['JavaScript', 'Tips', 'Reference'],
    dateAdded: '2026-07-14',
  },
  {
    id: "stackoverflow",
    title: "Stack Overflow",
    url: "https://stackoverflow.com",
    description:
      "Still the largest archive of specific programming answers ever assembled. Search it with a search engine, read the dates, and check whether the API changed since.",
    category: 'learning',
    tags: ['Community', 'Reference', 'Learning'],
    dateAdded: '2026-07-10',
  },
  {
    id: "codepen",
    title: "CodePen",
    url: "https://codepen.io",
    description:
      "A playground for HTML, CSS and JavaScript with instant previews and a large public gallery of effects. The best place to isolate a bug from your build system.",
    category: 'learning',
    tags: ['Practice', 'Community', 'Tools'],
    dateAdded: '2026-07-06',
  },
  {
    id: "smashing-magazine",
    title: "Smashing Magazine",
    url: "https://www.smashingmagazine.com",
    description:
      "Long-form articles on front-end and design, edited rather than aggregated. The accessibility and performance archives are worth reading end to end.",
    category: 'learning',
    tags: ['Learning', 'Design', 'Accessibility'],
    dateAdded: '2026-07-02',
  },
  {
    id: "a-list-apart",
    title: "A List Apart",
    url: "https://alistapart.com",
    description:
      "The publication that shaped web standards thinking, still publishing considered essays on craft and practice. Slower than the feed, and better for it.",
    category: 'learning',
    tags: ['Learning', 'Design', 'Community'],
    dateAdded: '2026-06-28',
  },
  {
    id: "css-weekly",
    title: "CSS Weekly",
    url: "https://css-weekly.com",
    description:
      "A curated weekly digest of CSS articles, demos and tools. Low volume, high signal, and it will surface things the algorithms miss.",
    category: 'learning',
    tags: ['CSS', 'Community', 'Learning'],
    dateAdded: '2026-06-24',
  },
  {
    id: "javascript-weekly",
    title: "JavaScript Weekly",
    url: "https://javascriptweekly.com",
    description:
      "One email a week covering releases, deep dives and tools across the JavaScript ecosystem. Skim the headlines, read one article properly.",
    category: 'learning',
    tags: ['JavaScript', 'Community', 'Learning'],
    dateAdded: '2026-06-20',
  },
  {
    id: "frontend-focus",
    title: "Frontend Focus",
    url: "https://frontendfoo.us",
    description:
      "A weekly newsletter on browser features, CSS and tooling, with a consistently good balance of news and technique. Free, and easy to unsubscribe from.",
    category: 'learning',
    tags: ['Community', 'Learning', 'CSS'],
    dateAdded: '2026-06-16',
  },
  {
    id: "syntax-fm",
    title: "Syntax",
    url: "https://syntax.fm",
    description:
      "Wes Bos and Scott Tolinski talking through web development topics in a format that is part tutorial, part opinion. Good company while doing the washing up.",
    category: 'learning',
    tags: ['Podcasts', 'Learning', 'JavaScript'],
    dateAdded: '2026-06-12',
  },
  {
    id: "shoptalk-show",
    title: "ShopTalk Show",
    url: "https://shoptalkshow.com",
    description:
      "Chris Coyier and Dave Rupert answering listener questions about front-end work, with guests from across the industry. Over a decade of episodes to dig into.",
    category: 'learning',
    tags: ['Podcasts', 'Learning', 'CSS'],
    dateAdded: '2026-06-08',
  },
  {
    id: "changelog",
    title: "The Changelog",
    url: "https://changelog.com",
    description:
      "Interviews with the people behind open-source projects and infrastructure, plus the weekly news show. The history is more useful than the headlines.",
    category: 'learning',
    tags: ['Podcasts', 'Open source', 'Community'],
    dateAdded: '2026-06-04',
  },
  {
    id: "teach-yourself-cs",
    title: "Teach Yourself Computer Science",
    url: "https://teachyourselfcs.com",
    description:
      "A curated path through the computer science you would get from a degree, with one recommended book or course per subject. Opinionated and refreshingly short.",
    category: 'learning',
    tags: ['Learning', 'Books', 'Reference'],
    dateAdded: '2026-05-31',
  },
  {
    id: "ossu",
    title: "Open Source Society University",
    url: "https://github.com/ossu/computer-science",
    description:
      "A free, community-maintained computer science curriculum drawn from open courseware. Heavy, but every resource is vetted and the order is deliberate.",
    category: 'learning',
    tags: ['Learning', 'Open source', 'Community'],
    dateAdded: '2026-05-27',
  },
  {
    id: "google-codelabs",
    title: "Google Codelabs",
    url: "https://codelabs.developers.google.com",
    description:
      "Guided, hands-on tutorials for Google's developer tools and APIs, each meant to take under an hour. The fastest way to evaluate a platform before committing.",
    category: 'learning',
    tags: ['Tutorial', 'Learning', 'Tools'],
    dateAdded: '2026-05-23',
  },
  {
    id: "microsoft-learn",
    title: "Microsoft Learn",
    url: "https://learn.microsoft.com",
    description:
      "Free, structured training for Azure, .NET and TypeScript, with sandboxes you can break. Drier than most courses, and correspondingly complete.",
    category: 'learning',
    tags: ['Learning', 'Tutorial', 'Documentation'],
    dateAdded: '2026-05-19',
  },
  {
    id: "w3schools",
    title: "W3Schools",
    url: "https://www.w3schools.com",
    description:
      "Reference-style tutorials with a live editor on nearly every page. Not where you learn architecture, but the fastest lookup for a tag or method you forget.",
    category: 'learning',
    tags: ['Learning', 'Reference', 'Tutorial'],
    dateAdded: '2026-05-15',
  },
  {
    id: "cssbattle",
    title: "CSSBattle",
    url: "https://cssbattle.dev",
    description:
      "Recreate a target image in the fewest characters of CSS, then compare with the leaderboard. Absurd, competitive, and a surprisingly effective CSS workout.",
    category: 'learning',
    tags: ['CSS', 'Practice', 'Community'],
    dateAdded: '2026-05-11',
  },
  {
    id: "frontend-happy-hour",
    title: "Frontend Happy Hour",
    url: "https://frontendhappyhour.com",
    description:
      "A podcast where engineers from Netflix, Atlassian and others talk honestly about front-end practice, over drinks. Relaxed, opinionated and never sponsored.",
    category: 'learning',
    tags: ['Podcasts', 'Community', 'JavaScript'],
    dateAdded: '2026-05-11',
  },
  {
    id: "frontend-horse",
    title: "Frontend Horse",
    url: "https://frontend.horse",
    description:
      "Tutorials and interviews about the creative side of the front end: animation, WebGL and unusual CSS. Inspiring without being another gallery of screenshots.",
    category: 'learning',
    tags: ['CSS', 'Animation', 'Learning'],
    dateAdded: '2026-05-07',
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
    id: "postman",
    title: "Postman",
    url: "https://www.postman.com",
    description:
      "The long-standing API client with collections, environments and test scripts. Heavier than it once was, but the ecosystem and familiarity still count for a lot.",
    category: 'tools',
    tags: ['Tools', 'Testing', 'Community'],
    dateAdded: '2026-09-25',
  },
  {
    id: "insomnia",
    title: "Insomnia",
    url: "https://insomnia.rest",
    description:
      "A lean API client with strong GraphQL and gRPC support, plus environment variables that make sense. The quieter alternative for daily request work.",
    category: 'tools',
    tags: ['Tools', 'Testing'],
    dateAdded: '2026-09-21',
  },
  {
    id: "ngrok",
    title: "ngrok",
    url: "https://ngrok.com",
    description:
      "Exposes a local server on a public URL in one command, which is how webhooks get tested without deploying. Free tier is enough for most solo work.",
    category: 'tools',
    tags: ['Tools', 'DevOps'],
    dateAdded: '2026-09-16',
  },
  {
    id: "warp",
    title: "Warp",
    url: "https://www.warp.dev",
    description:
      "A terminal with blocks, searchable history and AI command suggestions built in. The blocks alone make long outputs readable again.",
    category: 'tools',
    tags: ['Tools', 'CLI'],
    dateAdded: '2026-09-12',
  },
  {
    id: "crontab-guru",
    title: "crontab guru",
    url: "https://crontab.guru",
    description:
      "Type a cron expression and read it back in English, with a list of upcoming run times. Saves the small doubt after every schedule you write.",
    category: 'tools',
    tags: ['Tools', 'CLI', 'Reference'],
    dateAdded: '2026-09-08',
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
    id: "explainshell",
    title: "explainshell",
    url: "https://explainshell.com",
    description:
      "Paste a shell command and get every flag explained, sourced from man pages. The fastest way to understand something copied from a Stack Overflow answer.",
    category: 'tools',
    tags: ['CLI', 'Tools', 'Learning'],
    dateAdded: '2026-09-03',
  },
  {
    id: "transform-tools",
    title: "Transform",
    url: "https://transform.tools",
    description:
      "Convert between JSON, TypeScript, GraphQL, YAML, CSV and a dozen other formats in the browser. No upload, no account, no ads.",
    category: 'tools',
    tags: ['Tools', 'Data', 'Documentation'],
    dateAdded: '2026-08-30',
  },
  {
    id: "jsonlint",
    title: "JSONLint",
    url: "https://jsonlint.com",
    description:
      "Validates and formats JSON with a clear error position when it fails. Simple, old, and still the quickest way to find the missing comma.",
    category: 'tools',
    tags: ['Tools', 'Data'],
    dateAdded: '2026-08-26',
  },
  {
    id: "diffchecker",
    title: "Diffchecker",
    url: "https://www.diffchecker.com",
    description:
      "Side-by-side diffs for text, documents and images, with no install. Useful for spotting what actually changed between two versions of anything.",
    category: 'tools',
    tags: ['Tools', 'Writing'],
    dateAdded: '2026-08-22',
  },
  {
    id: "tableconvert",
    title: "TableConvert",
    url: "https://tableconvert.com",
    description:
      "Convert between Markdown tables, CSV, SQL, JSON and Excel without opening a spreadsheet. Small utility, saves a surprising amount of fiddling.",
    category: 'tools',
    tags: ['Tools', 'Data', 'Writing'],
    dateAdded: '2026-08-18',
  },
  {
    id: "mermaid-live",
    title: "Mermaid Live",
    url: "https://mermaid.live",
    description:
      "Write diagrams as text and watch them render, then export as SVG or PNG. Since GitHub renders Mermaid natively, these diagrams live in your README.",
    category: 'tools',
    tags: ['Diagrams', 'Tools', 'Documentation'],
    dateAdded: '2026-08-14',
  },
  {
    id: "drawio",
    title: "draw.io",
    url: "https://app.diagrams.net",
    description:
      "A full diagramming tool that runs in the browser with no account and no watermark. Saves locally or to your own cloud, which is rare and welcome.",
    category: 'tools',
    tags: ['Diagrams', 'Tools', 'Open source'],
    dateAdded: '2026-08-10',
  },
  {
    id: "shields-io",
    title: "Shields.io",
    url: "https://shields.io",
    description:
      "Generates the small badges at the top of most READMEs: build status, version, licence, coverage. Static or dynamic, and they never expire.",
    category: 'tools',
    tags: ['Tools', 'Documentation', 'Git'],
    dateAdded: '2026-08-06',
  },
  {
    id: "ray-so",
    title: "ray.so",
    url: "https://ray.so",
    description:
      "Turn code into a clean image with a choice of themes and padding, ready for a slide or a post. From the Raycast team, and free without an account.",
    category: 'tools',
    tags: ['Tools', 'Images', 'Design'],
    dateAdded: '2026-08-02',
  },
  {
    id: "have-i-been-pwned",
    title: "Have I Been Pwned",
    url: "https://haveibeenpwned.com",
    description:
      "Checks whether an email address appears in a known data breach, and notifies you when a new one surfaces. Worth running on your own addresses today.",
    category: 'tools',
    tags: ['Security', 'Privacy', 'Tools'],
    dateAdded: '2026-07-29',
  },
  {
    id: "virustotal",
    title: "VirusTotal",
    url: "https://www.virustotal.com",
    description:
      "Scans files and URLs against dozens of engines at once. The second-opinion tool before you run an installer you do not quite trust.",
    category: 'tools',
    tags: ['Security', 'Tools'],
    dateAdded: '2026-07-25',
  },
  {
    id: "snyk",
    title: "Snyk",
    url: "https://snyk.io",
    description:
      "Finds and fixes vulnerabilities in dependencies and containers, with pull requests instead of warnings. The free tier covers open-source projects.",
    category: 'tools',
    tags: ['Security', 'DevOps', 'Tools'],
    dateAdded: '2026-07-21',
  },
  {
    id: "1password",
    title: "1Password",
    url: "https://1password.com",
    description:
      "Password and secret management with good sharing for families and teams, plus SSH key and passkey support. Paid, and the least annoying option.",
    category: 'tools',
    tags: ['Privacy', 'Tools', 'Security'],
    dateAdded: '2026-07-17',
  },
  {
    id: "localsend",
    title: "LocalSend",
    url: "https://localsend.org",
    description:
      "Share files between devices on the same network with no account and no internet, across every major platform. The AirDrop replacement that also does Windows.",
    category: 'tools',
    tags: ['Tools', 'Privacy', 'Open source'],
    dateAdded: '2026-07-13',
  },
  {
    id: "syncthing",
    title: "Syncthing",
    url: "https://syncthing.net",
    description:
      "Continuous file sync directly between your own devices, encrypted and with no cloud in the middle. Fiddly to set up, then it simply works.",
    category: 'tools',
    tags: ['Tools', 'Privacy', 'Open source'],
    dateAdded: '2026-07-09',
  },
  {
    id: "etcher",
    title: "balenaEtcher",
    url: "https://etcher.balena.io",
    description:
      "Writes OS images to SD cards and USB drives with verification afterwards. Prevents the class of mistake that wastes an evening on a Raspberry Pi.",
    category: 'tools',
    tags: ['Tools', 'Open source'],
    dateAdded: '2026-07-05',
  },
  {
    id: "ventoy",
    title: "Ventoy",
    url: "https://www.ventoy.net",
    description:
      "Put several bootable ISOs on one USB stick and pick at boot, instead of reflashing every time. A small change that saves a lot of tedium.",
    category: 'tools',
    tags: ['Tools', 'Open source'],
    dateAdded: '2026-07-01',
  },
  {
    id: "n8n",
    title: "n8n",
    url: "https://n8n.io",
    description:
      "Workflow automation you can self-host, with a visual editor and code nodes when the blocks run out. The open-source answer to Zapier pricing.",
    category: 'tools',
    tags: ['Automation', 'Tools', 'Open source'],
    dateAdded: '2026-06-27',
  },
  {
    id: "zapier",
    title: "Zapier",
    url: "https://zapier.com",
    description:
      "Connects thousands of apps with triggers and actions, no code required. The free tier is small, but nothing else covers as many integrations.",
    category: 'tools',
    tags: ['Automation', 'Tools', 'Productivity'],
    dateAdded: '2026-06-23',
  },
  {
    id: "make",
    title: "Make",
    url: "https://www.make.com",
    description:
      "Visual automation with branching and loops, priced by operations rather than by task. Cheaper than Zapier once scenarios get complicated.",
    category: 'tools',
    tags: ['Automation', 'Tools', 'Productivity'],
    dateAdded: '2026-06-19',
  },
  {
    id: "uptimerobot",
    title: "UptimeRobot",
    url: "https://uptimerobot.com",
    description:
      "Monitors sites and endpoints and emails you when they stop responding, with a free plan covering fifty monitors. Boring insurance.",
    category: 'tools',
    tags: ['DevOps', 'Tools'],
    dateAdded: '2026-06-15',
  },
  {
    id: "cloudflare",
    title: "Cloudflare",
    url: "https://www.cloudflare.com",
    description:
      "DNS, CDN, caching and DDoS protection on a free plan that covers most sites. Also where you go when a domain needs to resolve in five minutes.",
    category: 'tools',
    tags: ['Cloud', 'DevOps', 'Performance'],
    dateAdded: '2026-06-11',
  },
  {
    id: "rectangle",
    title: "Rectangle",
    url: "https://rectangleapp.com",
    description:
      "Keyboard-driven window snapping for macOS, free and open source. Replaces a paid utility and removes the mouse from window management entirely.",
    category: 'tools',
    tags: ['Tools', 'Open source', 'Productivity'],
    dateAdded: '2026-06-07',
  },
  {
    id: "obsidian-webkit",
    title: "Obsidian Web Clipper",
    url: "https://obsidian.md/clipper",
    description:
      "Saves a page into your vault as clean Markdown with the highlights you chose. The missing bridge between reading on the web and keeping notes locally.",
    category: 'tools',
    tags: ['Tools', 'Notes', 'Privacy'],
    dateAdded: '2026-06-03',
  },
  {
    id: "devtoys",
    title: "DevToys",
    url: "https://devtoys.app",
    description:
      "An offline desktop toolbox of converters, encoders, testers and generators, in one window. The native equivalent of a page full of small web utilities.",
    category: 'tools',
    tags: ['Tools', 'Open source'],
    dateAdded: '2026-05-30',
  },
  {
    id: "httpie",
    title: "HTTPie",
    url: "https://httpie.io",
    description:
      "A command-line HTTP client with readable syntax and formatted JSON output. Makes curl feel like it was designed for machines, which it was.",
    category: 'tools',
    tags: ['CLI', 'Tools', 'Testing'],
    dateAdded: '2026-05-26',
  },
  {
    id: "jq",
    title: "jq",
    url: "https://jqlang.org",
    description:
      "The command-line JSON processor: filter, reshape and extract without writing a script. Once the syntax clicks, it replaces a lot of throwaway Python.",
    category: 'tools',
    tags: ['CLI', 'Data', 'Tools'],
    dateAdded: '2026-05-22',
  },
  {
    id: "fzf",
    title: "fzf",
    url: "https://github.com/junegunn/fzf",
    description:
      "A fuzzy finder for the command line that attaches to files, history, branches and anything else you can pipe into it. Changes how you use a terminal.",
    category: 'tools',
    tags: ['CLI', 'Tools', 'Open source'],
    dateAdded: '2026-05-18',
  },
  {
    id: "ripgrep",
    title: "ripgrep",
    url: "https://github.com/BurntSushi/ripgrep",
    description:
      "A search tool that respects gitignore and is dramatically faster than grep on a real codebase. Usually the first install on a new machine.",
    category: 'tools',
    tags: ['CLI', 'Tools', 'Performance'],
    dateAdded: '2026-05-14',
  },
  {
    id: "stripe",
    title: "Stripe",
    url: "https://stripe.com",
    description:
      "Payments infrastructure with documentation that is itself a lesson in API design. Test mode means you can build the whole flow before talking to anyone.",
    category: 'tools',
    tags: ['Tools', 'Documentation'],
    dateAdded: '2026-05-10',
  },
  {
    id: "resend",
    title: "Resend",
    url: "https://resend.com",
    description:
      "Transactional email with a modern API, React templates and logs that explain why a message failed. A relief after years of SMTP configuration.",
    category: 'tools',
    tags: ['Tools', 'Email', 'DevOps'],
    dateAdded: '2026-05-06',
  },
  {
    id: "localcan",
    title: "LocalCan",
    url: "https://www.localcan.com",
    description:
      "Local HTTPS domains and tunnels for development on macOS, with no port juggling. Handy when a project needs real domains and certificates locally.",
    category: 'tools',
    tags: ['Tools', 'DevOps'],
    dateAdded: '2026-05-02',
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
    id: "things",
    title: "Things",
    url: "https://culturedcode.com/things/",
    description:
      "A task manager for Apple devices with a calm interface and a genuinely good Today view. Paid once per platform, with no subscription and no web app.",
    category: 'productivity',
    tags: ['Productivity', 'Tools'],
    dateAdded: '2026-09-29',
  },
  {
    id: "craft",
    title: "Craft",
    url: "https://www.craft.do",
    description:
      "Documents that look good by default, with blocks, nesting and a strong export story. Better than most note apps for anything you might show someone else.",
    category: 'productivity',
    tags: ['Notes', 'Writing', 'Productivity'],
    dateAdded: '2026-09-25',
  },
  {
    id: "logseq",
    title: "Logseq",
    url: "https://logseq.com",
    description:
      "Outliner and knowledge base stored as local Markdown, built around daily journals and backlinks. The privacy-respecting alternative to hosted note tools.",
    category: 'productivity',
    tags: ['Notes', 'Privacy', 'Open source'],
    dateAdded: '2026-09-20',
  },
  {
    id: "anytype",
    title: "Anytype",
    url: "https://anytype.io",
    description:
      "Local-first, encrypted workspace with objects, relations and graph views, in the Notion mould. Data lives on your devices and syncs peer to peer.",
    category: 'productivity',
    tags: ['Notes', 'Privacy', 'Productivity'],
    dateAdded: '2026-09-16',
  },
  {
    id: "joplin",
    title: "Joplin",
    url: "https://joplinapp.org",
    description:
      "Open-source notes and to-dos with Markdown, end-to-end encryption and your choice of sync target. The mature, unexciting option that keeps working.",
    category: 'productivity',
    tags: ['Notes', 'Open source', 'Privacy'],
    dateAdded: '2026-09-11',
  },
  {
    id: "simplenote",
    title: "Simplenote",
    url: "https://simplenote.com",
    description:
      "Plain-text notes with instant sync and version history, and nothing else. Free forever, which is increasingly unusual for a note app.",
    category: 'productivity',
    tags: ['Notes', 'Productivity'],
    dateAdded: '2026-09-07',
  },
  {
    id: "readwise",
    title: "Readwise",
    url: "https://readwise.io",
    description:
      "Collects highlights from Kindle, articles and podcasts, then resurfaces a few each day for review. Paid, and the spaced repetition is the point.",
    category: 'productivity',
    tags: ['Notes', 'Learning', 'Productivity'],
    dateAdded: '2026-09-03',
  },
  {
    id: "instapaper",
    title: "Instapaper",
    url: "https://www.instapaper.com",
    description:
      "Saves articles to read later in a stripped-back view, with speed reading and text-to-speech. Still the cleanest read-later experience.",
    category: 'productivity',
    tags: ['Productivity', 'Writing', 'Tools'],
    dateAdded: '2026-08-30',
  },
  {
    id: "mymind",
    title: "mymind",
    url: "https://mymind.com",
    description:
      "A private visual bookmarking space that organises by what you saved rather than by folders you forget to use. Paid, with no social features at all.",
    category: 'productivity',
    tags: ['Notes', 'Privacy', 'Productivity'],
    dateAdded: '2026-08-26',
  },
  {
    id: "feedly",
    title: "Feedly",
    url: "https://feedly.com",
    description:
      "RSS reader with AI grouping and keyword alerts, plus a decent free tier. The reliable way to follow sites that do not deserve an email subscription.",
    category: 'productivity',
    tags: ['Productivity', 'Tools', 'AI'],
    dateAdded: '2026-08-22',
  },
  {
    id: "inoreader",
    title: "Inoreader",
    url: "https://www.inoreader.com",
    description:
      "A power-user RSS reader with rules, filters and search across feeds. More configuration than Feedly, and correspondingly more control.",
    category: 'productivity',
    tags: ['Productivity', 'Tools'],
    dateAdded: '2026-08-18',
  },
  {
    id: "zotero",
    title: "Zotero",
    url: "https://www.zotero.org",
    description:
      "Free reference manager that captures citations from the browser and formats bibliographies in any style. Open source and used across academia.",
    category: 'productivity',
    tags: ['Reference', 'Writing', 'Open source'],
    dateAdded: '2026-08-14',
  },
  {
    id: "airtable",
    title: "Airtable",
    url: "https://airtable.com",
    description:
      "Spreadsheet-database hybrid with views, linked records and automations. Good for processes that outgrow a spreadsheet but do not deserve an application.",
    category: 'productivity',
    tags: ['Productivity', 'Databases', 'Tools'],
    dateAdded: '2026-08-10',
  },
  {
    id: "coda",
    title: "Coda",
    url: "https://coda.io",
    description:
      "Documents with tables, buttons and formulas, so a process can live in one page. More flexible than a wiki and less rigid than a project tool.",
    category: 'productivity',
    tags: ['Productivity', 'Tools', 'Documentation'],
    dateAdded: '2026-08-06',
  },
  {
    id: "clickup",
    title: "ClickUp",
    url: "https://clickup.com",
    description:
      "Tasks, docs, goals and time in one workspace, with a feature for almost everything. Powerful if you configure it, overwhelming if you do not.",
    category: 'productivity',
    tags: ['Productivity', 'Tools'],
    dateAdded: '2026-08-02',
  },
  {
    id: "asana",
    title: "Asana",
    url: "https://asana.com",
    description:
      "Project and task management with a clear separation between lists, boards and timelines. The free tier suits small teams that mostly need shared visibility.",
    category: 'productivity',
    tags: ['Productivity', 'Tools'],
    dateAdded: '2026-07-29',
  },
  {
    id: "trello",
    title: "Trello",
    url: "https://trello.com",
    description:
      "Kanban boards that anyone understands in ten seconds. Still the best choice when the process is simple and the people are not technical.",
    category: 'productivity',
    tags: ['Productivity', 'Tools'],
    dateAdded: '2026-07-25',
  },
  {
    id: "basecamp",
    title: "Basecamp",
    url: "https://basecamp.com",
    description:
      "Project management deliberately limited to message boards, to-dos, schedules and files. A fixed price for unlimited users, and a strong opinion about scope.",
    category: 'productivity',
    tags: ['Productivity', 'Tools'],
    dateAdded: '2026-07-21',
  },
  {
    id: "shortcut",
    title: "Shortcut",
    url: "https://www.shortcut.com",
    description:
      "Issue tracking built for software teams, with stories, epics and iterations that stay out of the way. A lighter alternative to Jira at similar scale.",
    category: 'productivity',
    tags: ['Productivity', 'Tools', 'Git'],
    dateAdded: '2026-07-17',
  },
  {
    id: "notion-calendar",
    title: "Notion Calendar",
    url: "https://www.notion.com/product/calendar",
    description:
      "A fast calendar that merges Google and Outlook accounts and shows your Notion tasks beside meetings. Free, and better than most paid calendar apps.",
    category: 'productivity',
    tags: ['Productivity', 'Tools'],
    dateAdded: '2026-07-13',
  },
  {
    id: "fantastical",
    title: "Fantastical",
    url: "https://flexibits.com/fantastical",
    description:
      "Calendar for Apple devices with natural-language entry and a menu-bar view that shows what is next. Paid, and the best input experience available.",
    category: 'productivity',
    tags: ['Productivity', 'Tools'],
    dateAdded: '2026-07-09',
  },
  {
    id: "reclaim",
    title: "Reclaim",
    url: "https://reclaim.ai",
    description:
      "Schedules focus time and habits around your meetings, and defends the blocks when something tries to book over them. Works with Google Calendar.",
    category: 'productivity',
    tags: ['Productivity', 'Automation', 'Tools'],
    dateAdded: '2026-07-05',
  },
  {
    id: "rescuetime",
    title: "RescueTime",
    url: "https://www.rescuetime.com",
    description:
      "Tracks where your computer time actually goes and grades your focus, without screenshots or keystroke capture. Sobering for the first week.",
    category: 'productivity',
    tags: ['Productivity', 'Privacy', 'Tools'],
    dateAdded: '2026-07-01',
  },
  {
    id: "clockify",
    title: "Clockify",
    url: "https://clockify.me",
    description:
      "Time tracking with unlimited users on the free plan, projects and reports included. The practical choice for freelancers billing by the hour.",
    category: 'productivity',
    tags: ['Productivity', 'Tools'],
    dateAdded: '2026-06-27',
  },
  {
    id: "pomofocus",
    title: "Pomofocus",
    url: "https://pomofocus.io",
    description:
      "A pomodoro timer in the browser with tasks attached, and nothing to install. Sometimes the smallest possible tool is the one that gets used.",
    category: 'productivity',
    tags: ['Productivity', 'Tools'],
    dateAdded: '2026-06-23',
  },
  {
    id: "forest",
    title: "Forest",
    url: "https://www.forestapp.cc",
    description:
      "Grows a virtual tree while you stay off your phone, and plants real ones through a partner charity. Gamification that survives the novelty phase.",
    category: 'productivity',
    tags: ['Productivity', 'Tools'],
    dateAdded: '2026-06-19',
  },
  {
    id: "focusmate",
    title: "Focusmate",
    url: "https://www.focusmate.com",
    description:
      "Pairs you with a stranger for a silent, camera-on work session. Surprisingly effective accountability for tasks you keep postponing.",
    category: 'productivity',
    tags: ['Productivity', 'Community'],
    dateAdded: '2026-06-15',
  },
  {
    id: "cold-turkey",
    title: "Cold Turkey",
    url: "https://getcoldturkey.com",
    description:
      "Blocks distracting sites and applications system-wide, with a lock you cannot talk yourself out of. Blunt, and that is the point.",
    category: 'productivity',
    tags: ['Productivity', 'Tools'],
    dateAdded: '2026-06-11',
  },
  {
    id: "superhuman",
    title: "Superhuman",
    url: "https://superhuman.com",
    description:
      "An email client built around keyboard shortcuts and speed, with follow-up reminders and read status. Expensive, and it does change how you triage.",
    category: 'productivity',
    tags: ['Email', 'Productivity', 'Tools'],
    dateAdded: '2026-06-07',
  },
  {
    id: "spark",
    title: "Spark Mail",
    url: "https://sparkmailapp.com",
    description:
      "Email with smart inboxes, scheduled sending and team comments, across every platform. A good middle ground between default mail and a paid client.",
    category: 'productivity',
    tags: ['Email', 'Productivity', 'Tools'],
    dateAdded: '2026-06-03',
  },
  {
    id: "missive",
    title: "Missive",
    url: "https://missiveapp.com",
    description:
      "Shared inboxes where a team can discuss an email privately before replying. Solves a real problem that forwarding and CC never did.",
    category: 'productivity',
    tags: ['Email', 'Productivity', 'Tools'],
    dateAdded: '2026-05-30',
  },
  {
    id: "obsidian-tasks",
    title: "Tasks for Obsidian",
    url: "https://publish.obsidian.md/tasks/",
    description:
      "Turns checkboxes in your notes into a queryable task system with due dates and filters. Keeps tasks in the same place as the thinking behind them.",
    category: 'productivity',
    tags: ['Notes', 'Productivity', 'Open source'],
    dateAdded: '2026-05-26',
  },
  {
    id: "openproject",
    title: "OpenProject",
    url: "https://www.openproject.org",
    description:
      "Open-source project management with Gantt charts, agile boards, time tracking and wikis. Self-host it, or use the hosted version with a free community tier.",
    category: 'productivity',
    tags: ['Productivity', 'Open source', 'Tools'],
    dateAdded: '2026-05-22',
  },
  {
    id: "toggl-plan",
    title: "Toggl Plan",
    url: "https://toggl.com/plan/",
    description:
      "Timeline-based planning with drag-and-drop scheduling, less ceremony than a full project tool. Good for small teams who plan by capacity.",
    category: 'productivity',
    tags: ['Productivity', 'Tools'],
    dateAdded: '2026-05-18',
  },
  {
    id: "hledger",
    title: "hledger",
    url: "https://hledger.org",
    description:
      "Plain-text accounting that keeps your finances in a versionable file and answers questions with reports. Steep, and completely yours to inspect.",
    category: 'productivity',
    tags: ['Productivity', 'CLI', 'Open source'],
    dateAdded: '2026-05-14',
  },
  {
    id: "habitica",
    title: "Habitica",
    url: "https://habitica.com",
    description:
      "Habits and to-dos as an old-school RPG, where missed tasks cost you health. Silly enough to work, and open source if you want to self-host.",
    category: 'productivity',
    tags: ['Productivity', 'Open source', 'Community'],
    dateAdded: '2026-05-10',
  },
  {
    id: "wayback-machine",
    title: "Wayback Machine",
    url: "https://web.archive.org",
    description:
      "Archives of pages as they used to be, for when a tutorial references something that changed. Also the only copy of some sites that no longer exist.",
    category: 'productivity',
    tags: ['Reference', 'Tools', 'Privacy'],
    dateAdded: '2026-05-06',
  },
  {
    id: "raindrop-collections",
    title: "Stretchly",
    url: "https://hovancik.net/stretchly/",
    description:
      "Reminds you to take micro-breaks and longer pauses, with a schedule you set once. Open source, cross-platform and quietly good for your wrists.",
    category: 'productivity',
    tags: ['Productivity', 'Open source'],
    dateAdded: '2026-05-02',
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
    id: "pixabay",
    title: "Pixabay",
    url: "https://pixabay.com",
    description:
      "Free photos, illustrations, vectors and video under a permissive licence, with no attribution required. The largest single library when Unsplash comes up short.",
    category: 'media',
    tags: ['Images', 'Video', 'Audio'],
    dateAdded: '2026-09-24',
  },
  {
    id: "burst",
    title: "Burst",
    url: "https://burst.shopify.com",
    description:
      "Free stock photography from Shopify, aimed at commerce and lifestyle rather than corporate handshakes. Small library, well chosen, no attribution needed.",
    category: 'media',
    tags: ['Images'],
    dateAdded: '2026-09-20',
  },
  {
    id: "kaboompics",
    title: "Kaboompics",
    url: "https://kaboompics.com",
    description:
      "Cohesive photo collections with the colour palette extracted for each one, so a hero image and its surroundings can match. Free for commercial use.",
    category: 'media',
    tags: ['Images', 'Color', 'Design'],
    dateAdded: '2026-09-15',
  },
  {
    id: "picsum",
    title: "Picsum",
    url: "https://picsum.photos",
    description:
      "Placeholder images served by URL, with size, blur and grayscale as parameters. The fastest way to stop a layout collapsing while you wait for real assets.",
    category: 'media',
    tags: ['Images', 'Tools'],
    dateAdded: '2026-09-11',
  },
  {
    id: "placehold",
    title: "Placehold.co",
    url: "https://placehold.co",
    description:
      "Generates placeholder images with custom text, colours and formats through the URL alone. Useful for mockups and for testing how a card behaves at odd ratios.",
    category: 'media',
    tags: ['Images', 'Tools'],
    dateAdded: '2026-09-06',
  },
  {
    id: "videvo",
    title: "Videvo",
    url: "https://www.videvo.net",
    description:
      "Free stock video clips, motion graphics and sound effects, with the licence stated per item. Check the terms before commercial use, as some clips are attribution-only.",
    category: 'media',
    tags: ['Video'],
    dateAdded: '2026-09-02',
  },
  {
    id: "mazwai",
    title: "Mazwai",
    url: "https://mazwai.com",
    description:
      "A small, carefully edited collection of cinematic free footage. Less choice than the big libraries and a much higher hit rate for background video.",
    category: 'media',
    tags: ['Video', 'Inspiration'],
    dateAdded: '2026-08-29',
  },
  {
    id: "uppbeat",
    title: "Uppbeat",
    url: "https://uppbeat.io",
    description:
      "Music for videos and podcasts with a free tier and clear per-track licensing, including safe-to-monetise tracks for small channels.",
    category: 'media',
    tags: ['Audio'],
    dateAdded: '2026-08-25',
  },
  {
    id: "zapsplat",
    title: "Zapsplat",
    url: "https://www.zapsplat.com",
    description:
      "Over 150,000 free sound effects and production music, organised by category and searchable by duration. Attribution required on the free tier.",
    category: 'media',
    tags: ['Audio', 'Reference'],
    dateAdded: '2026-08-21',
  },
  {
    id: "bbc-sound-effects",
    title: "BBC Sound Effects",
    url: "https://sound-effects.bbcrewind.co.uk",
    description:
      "Thousands of sound effects from the BBC archive, free for personal and educational use. The range of real-world recordings is hard to match anywhere else.",
    category: 'media',
    tags: ['Audio', 'Reference'],
    dateAdded: '2026-08-17',
  },
  {
    id: "iconmonstr",
    title: "Iconmonstr",
    url: "https://iconmonstr.com",
    description:
      "A large, consistent set of simple icons free for commercial use without attribution. Older than most alternatives and still one of the cleanest.",
    category: 'media',
    tags: ['Icons', 'Images'],
    dateAdded: '2026-08-13',
  },
  {
    id: "feather-icons",
    title: "Feather Icons",
    url: "https://feathericons.com",
    description:
      "About 280 icons drawn on a 24px grid with a uniform stroke, which keeps a whole interface visually consistent. Simple enough to redraw by hand if needed.",
    category: 'media',
    tags: ['Icons', 'Open source', 'Design'],
    dateAdded: '2026-08-09',
  },
  {
    id: "bootstrap-icons",
    title: "Bootstrap Icons",
    url: "https://icons.getbootstrap.com",
    description:
      "A free, MIT-licensed icon set with over 2,000 glyphs, including brand marks and file types. Ships as SVG or a font, and works outside Bootstrap too.",
    category: 'media',
    tags: ['Icons', 'Open source', 'Framework'],
    dateAdded: '2026-08-05',
  },
  {
    id: "font-awesome",
    title: "Font Awesome",
    url: "https://fontawesome.com",
    description:
      "The icon library most tutorials assume, with solid, regular and brand styles. The free set covers most needs; the full set is a paid subscription.",
    category: 'media',
    tags: ['Icons', 'Fonts'],
    dateAdded: '2026-08-01',
  },
  {
    id: "storyset",
    title: "Storyset",
    url: "https://storyset.com",
    description:
      "Editable illustration sets with a colour picker for your brand palette, free with attribution. Recolouring before download saves an awkward trip through an editor.",
    category: 'media',
    tags: ['Images', 'Design'],
    dateAdded: '2026-07-28',
  },
  {
    id: "open-peeps",
    title: "Open Peeps",
    url: "https://www.openpeeps.com",
    description:
      "A hand-drawn library of people you compose from parts: bodies, poses, hair and faces. Free, and the style has more character than most corporate illustrations.",
    category: 'media',
    tags: ['Images', 'Design', 'Open source'],
    dateAdded: '2026-07-24',
  },
  {
    id: "dafont",
    title: "DaFont",
    url: "https://www.dafont.com",
    description:
      "A huge archive of free display fonts, ideal for posters and one-off graphics. Read the licence on each font, because they vary per author.",
    category: 'media',
    tags: ['Fonts', 'Typography'],
    dateAdded: '2026-07-20',
  },
  {
    id: "iloveimg",
    title: "iLoveIMG",
    url: "https://www.iloveimg.com",
    description:
      "Compress, resize, crop and convert images in the browser, in batches. Free, with file limits on larger jobs and no account needed for the basics.",
    category: 'media',
    tags: ['Images', 'Tools'],
    dateAdded: '2026-07-16',
  },
  {
    id: "compressor-io",
    title: "Compressor.io",
    url: "https://compressor.io",
    description:
      "Lossy and lossless image compression with a before-and-after preview and a size delta. Quick, free for a handful of files, and no sign-up.",
    category: 'media',
    tags: ['Images', 'Performance', 'Tools'],
    dateAdded: '2026-07-12',
  },
  {
    id: "audacity",
    title: "Audacity",
    url: "https://www.audacityteam.org",
    description:
      "Free, cross-platform audio editing for recording and cleaning up voice tracks: noise removal, levelling and export. Old-fashioned interface, capable engine.",
    category: 'media',
    tags: ['Audio', 'Open source', 'Tools'],
    dateAdded: '2026-07-08',
  },
  {
    id: "davinci-resolve",
    title: "DaVinci Resolve",
    url: "https://www.blackmagicdesign.com/products/davinciresolve",
    description:
      "Professional colour grading, editing and audio in one free application. The free version is not a demo, which is unusual and worth taking advantage of.",
    category: 'media',
    tags: ['Video', 'Tools'],
    dateAdded: '2026-07-04',
  },
  {
    id: "handbrake",
    title: "HandBrake",
    url: "https://handbrake.fr",
    description:
      "Converts video between formats with presets that make sense for web, device or archive. The reliable tool for making a 400 MB clip into a 12 MB clip.",
    category: 'media',
    tags: ['Video', 'Open source', 'Tools'],
    dateAdded: '2026-06-30',
  },
  {
    id: "obs-studio",
    title: "OBS Studio",
    url: "https://obsproject.com",
    description:
      "Free recording and live streaming with scenes, sources and filters, used by most people who record their screen. The plugin ecosystem covers the rest.",
    category: 'media',
    tags: ['Video', 'Open source', 'Tools'],
    dateAdded: '2026-06-26',
  },
  {
    id: "giphy",
    title: "GIPHY",
    url: "https://giphy.com",
    description:
      "The largest GIF library, with an API for embedding search into your own product. Useful for demos and documentation, less so for anything permanent.",
    category: 'media',
    tags: ['Images', 'Animation', 'Tools'],
    dateAdded: '2026-06-22',
  },
  {
    id: "kap",
    title: "Kap",
    url: "https://getkap.co",
    description:
      "An open-source screen recorder for macOS that exports straight to GIF or MP4. Fast enough to use mid-conversation when a bug needs showing rather than describing.",
    category: 'media',
    tags: ['Video', 'Open source', 'Tools'],
    dateAdded: '2026-06-18',
  },
  {
    id: "blender",
    title: "Blender",
    url: "https://www.blender.org",
    description:
      "A complete 3D pipeline — modelling, animation, rendering, video editing — free and open source. Steep, but there is nothing else like it at the price.",
    category: 'media',
    tags: ['3D', 'Animation', 'Open source'],
    dateAdded: '2026-06-14',
  },
  {
    id: "krita",
    title: "Krita",
    url: "https://krita.org",
    description:
      "An open-source painting application built for digital artists, with strong brush engines and a clean interface. The natural free alternative for illustration.",
    category: 'media',
    tags: ['Images', 'Design', 'Open source'],
    dateAdded: '2026-06-10',
  },
  {
    id: "inkscape",
    title: "Inkscape",
    url: "https://inkscape.org",
    description:
      "Vector graphics editing with SVG as the native format, free and scriptable. Awkward in places, and the best no-cost alternative to Illustrator.",
    category: 'media',
    tags: ['Images', 'Design', 'Open source'],
    dateAdded: '2026-06-06',
  },
  {
    id: "gimp",
    title: "GIMP",
    url: "https://www.gimp.org",
    description:
      "Free image editing for retouching, compositing and batch work, with a plugin ecosystem. Dated menus, but capable of everything Photoshop does for most tasks.",
    category: 'media',
    tags: ['Images', 'Open source', 'Tools'],
    dateAdded: '2026-06-02',
  },
  {
    id: "affinity",
    title: "Affinity",
    url: "https://affinity.serif.com",
    description:
      "Professional photo, vector and layout applications that became free in 2025. Serious software with no subscription, now genuinely accessible to everyone.",
    category: 'media',
    tags: ['Images', 'Design', 'Tools'],
    dateAdded: '2026-05-29',
  },
  {
    id: "realfavicon",
    title: "RealFaviconGenerator",
    url: "https://realfavicongenerator.net",
    description:
      "Produces every favicon variant you need — SVG, ICO, Apple touch icons, manifest entries — from one upload. The dull task, done properly once.",
    category: 'media',
    tags: ['Icons', 'Tools', 'Performance'],
    dateAdded: '2026-05-25',
  },
  {
    id: "shots-so",
    title: "Shots",
    url: "https://shots.so",
    description:
      "Creates presentation-ready browser mockups of a screenshot with backgrounds, shadows and devices. Free, browser-based, and quick enough for a changelog post.",
    category: 'media',
    tags: ['Images', 'Design', 'Tools'],
    dateAdded: '2026-05-21',
  },
  {
    id: "screely",
    title: "Screely",
    url: "https://www.screely.com",
    description:
      "Turns a screenshot into a framed window with a background colour and padding, in two clicks. Less configurable than Shots and faster to use.",
    category: 'media',
    tags: ['Images', 'Tools'],
    dateAdded: '2026-05-17',
  },
  {
    id: "cleanup-pictures",
    title: "Cleanup.pictures",
    url: "https://cleanup.pictures",
    description:
      "Removes objects, people and text from photos using inpainting, with a brush and a live preview. Free for small images, and startlingly good for the effort.",
    category: 'media',
    tags: ['Images', 'Tools', 'AI'],
    dateAdded: '2026-05-13',
  },
  {
    id: "upscayl",
    title: "Upscayl",
    url: "https://upscayl.org",
    description:
      "Open-source AI upscaling that runs locally on your own machine, so images never leave it. Good results on screenshots and old photos alike.",
    category: 'media',
    tags: ['Images', 'AI', 'Open source'],
    dateAdded: '2026-05-09',
  },
  {
    id: "vecteezy",
    title: "Vecteezy",
    url: "https://www.vecteezy.com",
    description:
      "Vectors, illustrations and video with a large free section under an attribution licence. Useful when a project needs something specific and cheap.",
    category: 'media',
    tags: ['Images', 'Video'],
    dateAdded: '2026-05-05',
  },
  {
    id: "loom",
    title: "Loom",
    url: "https://www.loom.com",
    description:
      "Screen and camera recording with an instant share link and viewer analytics. The fastest way to explain a bug or a decision without scheduling a call.",
    category: 'media',
    tags: ['Video', 'Productivity', 'Tools'],
    dateAdded: '2026-05-01',
  },
  {
    id: "descript",
    title: "Descript",
    url: "https://www.descript.com",
    description:
      "Edit audio and video by editing the transcript, with filler-word removal and studio sound. Rethinks editing for anyone who talks for a living.",
    category: 'media',
    tags: ['Audio', 'Video', 'AI'],
    dateAdded: '2026-04-27',
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
    id: "openai-platform",
    title: "OpenAI Platform",
    url: "https://platform.openai.com/docs",
    description:
      "The API reference and guides for the current models: structured outputs, tool calling, embeddings and batch jobs. The cookbook beside it is often more useful than the reference.",
    category: 'data-ai',
    tags: ['LLM', 'Documentation', 'AI'],
    dateAdded: '2026-10-21',
  },
  {
    id: "anthropic-docs",
    title: "Anthropic Docs",
    url: "https://docs.anthropic.com",
    description:
      "The Claude API reference, with unusually careful guidance on prompting, tool use and building agents. Worth reading for the advice, not just the endpoints.",
    category: 'data-ai',
    tags: ['LLM', 'Documentation', 'AI'],
    dateAdded: '2026-10-19',
  },
  {
    id: "google-ai-studio",
    title: "Google AI Studio",
    url: "https://aistudio.google.com",
    description:
      "A browser workbench for the Gemini models: prompt, tune parameters, compare outputs and export working code. The fastest way to try a long-context model.",
    category: 'data-ai',
    tags: ['LLM', 'Tools', 'AI'],
    dateAdded: '2026-10-17',
  },
  {
    id: "vercel-ai-sdk",
    title: "AI SDK",
    url: "https://ai-sdk.dev",
    description:
      "A TypeScript toolkit for streaming text, tool calls and structured output across providers, with React hooks that handle the hard parts. The default for AI features in a web app.",
    category: 'data-ai',
    tags: ['LLM', 'Framework', 'AI coding'],
    dateAdded: '2026-10-14',
  },
  {
    id: "langgraph",
    title: "LangGraph",
    url: "https://langchain-ai.github.io/langgraph/",
    description:
      "Build agents as explicit graphs of state and transitions, with human-in-the-loop checkpoints. The clearest mental model for anything beyond a single prompt.",
    category: 'data-ai',
    tags: ['Agents', 'LLM', 'Framework'],
    dateAdded: '2026-10-11',
  },
  {
    id: "crewai",
    title: "CrewAI",
    url: "https://www.crewai.com",
    description:
      "Frames multi-agent systems as roles, tasks and a crew, which maps well onto how people actually describe a workflow. Quick to a running prototype.",
    category: 'data-ai',
    tags: ['Agents', 'LLM', 'Framework'],
    dateAdded: '2026-10-08',
  },
  {
    id: "autogen",
    title: "AutoGen",
    url: "https://microsoft.github.io/autogen/",
    description:
      "Microsoft's framework for multi-agent conversations, with patterns for group chat and code execution. Research-flavoured and still actively moving.",
    category: 'data-ai',
    tags: ['Agents', 'LLM', 'Open source'],
    dateAdded: '2026-10-05',
  },
  {
    id: "dspy",
    title: "DSPy",
    url: "https://dspy.ai",
    description:
      "Replace hand-written prompts with programs whose instructions are optimised against your examples. Reframes prompt engineering as a compile step.",
    category: 'data-ai',
    tags: ['LLM', 'Framework', 'Evaluation'],
    dateAdded: '2026-10-02',
  },
  {
    id: "instructor",
    title: "Instructor",
    url: "https://python.useinstructor.com",
    description:
      "Turns LLM responses into validated Pydantic models, with retries when the model returns something malformed. Structured output without the parsing code.",
    category: 'data-ai',
    tags: ['LLM', 'Tools', 'Open source'],
    dateAdded: '2026-09-29',
  },
  {
    id: "outlines",
    title: "Outlines",
    url: "https://dottxt-ai.github.io/outlines/",
    description:
      "Constrains generation to a schema or grammar at the token level, so the model cannot return invalid JSON. The idea is more interesting than the library.",
    category: 'data-ai',
    tags: ['LLM', 'Tools', 'Open source'],
    dateAdded: '2026-09-26',
  },
  {
    id: "google-gemini",
    title: "Google Gemini",
    url: "https://gemini.google.com",
    description:
      "Google's assistant, tied into Search, Workspace and Android, with strong multimodal handling. Useful for anything involving images, documents or a Google account.",
    category: 'data-ai',
    tags: ['AI', 'Tools'],
    dateAdded: '2026-09-23',
  },
  {
    id: "litellm",
    title: "LiteLLM",
    url: "https://docs.litellm.ai",
    description:
      "One OpenAI-compatible interface in front of a hundred providers, with budgets, fallbacks and logging. The pragmatic way to stop rewriting your client code.",
    category: 'data-ai',
    tags: ['LLM', 'Tools', 'Open source'],
    dateAdded: '2026-09-23',
  },
  {
    id: "ollama-models",
    title: "Ollama Model Library",
    url: "https://ollama.com/library",
    description:
      "A browsable catalogue of open-weight models with sizes and quantisations, each runnable with one command. The simplest way to find what fits your machine.",
    category: 'data-ai',
    tags: ['LLM', 'Tools', 'Open source'],
    dateAdded: '2026-09-20',
  },
  {
    id: "microsoft-copilot",
    title: "Microsoft Copilot",
    url: "https://copilot.microsoft.com",
    description:
      "Microsoft's assistant, integrated across Windows, Edge and Office. Best value if your work already lives in that ecosystem rather than beside it.",
    category: 'data-ai',
    tags: ['AI', 'Tools', 'Productivity'],
    dateAdded: '2026-09-19',
  },
  {
    id: "lm-evaluation-harness",
    title: "LM Evaluation Harness",
    url: "https://github.com/EleutherAI/lm-evaluation-harness",
    description:
      "The framework behind most published benchmark numbers, usable on your own models and tasks. Running it yourself is the cure for trusting a leaderboard.",
    category: 'data-ai',
    tags: ['Evaluation', 'LLM', 'Open source'],
    dateAdded: '2026-09-17',
  },
  {
    id: "mistral",
    title: "Mistral AI",
    url: "https://mistral.ai",
    description:
      "A European lab publishing open-weight models with permissive licences and a hosted API. Worth a look when data residency or self-hosting matters.",
    category: 'data-ai',
    tags: ['AI', 'Open source'],
    dateAdded: '2026-09-14',
  },
  {
    id: "promptfoo",
    title: "Promptfoo",
    url: "https://www.promptfoo.dev",
    description:
      "Test prompts and models like code: define cases, run them in CI and diff results between changes. The most practical tool for stopping regressions quietly shipped.",
    category: 'data-ai',
    tags: ['Evaluation', 'LLM', 'Tools'],
    dateAdded: '2026-09-14',
  },
  {
    id: "ragas",
    title: "Ragas",
    url: "https://docs.ragas.io",
    description:
      "Metrics for retrieval-augmented pipelines, scoring faithfulness, relevance and context quality separately. Useful because it tells you which half is failing.",
    category: 'data-ai',
    tags: ['RAG', 'Evaluation', 'LLM'],
    dateAdded: '2026-09-11',
  },
  {
    id: "groq",
    title: "Groq",
    url: "https://groq.com",
    description:
      "Serves open models on custom hardware at unusually low latency, which makes voice and agent loops feel instant. The speed is the entire pitch.",
    category: 'data-ai',
    tags: ['AI', 'Performance', 'Tools'],
    dateAdded: '2026-09-10',
  },
  {
    id: "langsmith",
    title: "LangSmith",
    url: "https://smith.langchain.com",
    description:
      "Tracing and evaluation for LLM applications, showing every step of a chain with inputs and costs. The debugging view you miss after the first complex run.",
    category: 'data-ai',
    tags: ['Evaluation', 'LLM', 'Tools'],
    dateAdded: '2026-09-08',
  },
  {
    id: "openrouter",
    title: "OpenRouter",
    url: "https://openrouter.ai",
    description:
      "One API key and one interface for hundreds of models across providers, with per-request pricing and fallbacks. The practical way to compare models.",
    category: 'data-ai',
    tags: ['AI', 'Tools'],
    dateAdded: '2026-09-05',
  },
  {
    id: "braintrust",
    title: "Braintrust",
    url: "https://www.braintrust.dev",
    description:
      "Evaluation, datasets and prompt playgrounds for teams shipping AI features, with a usable free tier. Built around comparing versions rather than single runs.",
    category: 'data-ai',
    tags: ['Evaluation', 'LLM', 'Tools'],
    dateAdded: '2026-09-05',
  },
  {
    id: "helicone",
    title: "Helicone",
    url: "https://helicone.ai",
    description:
      "A proxy that logs LLM requests, cost and latency without changing your application code. The quickest way to find out where the bill is coming from.",
    category: 'data-ai',
    tags: ['LLM', 'Tools', 'Open source'],
    dateAdded: '2026-09-02',
  },
  {
    id: "together-ai",
    title: "Together AI",
    url: "https://www.together.ai",
    description:
      "Hosted inference and fine-tuning for open models, billed by usage. A straightforward route to running something without owning a GPU.",
    category: 'data-ai',
    tags: ['AI', 'Cloud', 'Tools'],
    dateAdded: '2026-09-01',
  },
  {
    id: "chroma",
    title: "Chroma",
    url: "https://www.trychroma.com",
    description:
      "An embedding database that runs in-process for prototypes and scales to a server, with metadata filtering built in. Fastest path to a working retrieval demo.",
    category: 'data-ai',
    tags: ['RAG', 'Databases', 'Open source'],
    dateAdded: '2026-08-30',
  },
  {
    id: "lm-studio",
    title: "LM Studio",
    url: "https://lmstudio.ai",
    description:
      "A desktop app for downloading and running local models with a chat interface and a local server. The easiest entry point to offline, private inference.",
    category: 'data-ai',
    tags: ['AI', 'Tools', 'Privacy'],
    dateAdded: '2026-08-28',
  },
  {
    id: "qdrant",
    title: "Qdrant",
    url: "https://qdrant.tech",
    description:
      "A vector database written in Rust with strong filtering and a generous free tier. Solid documentation, including guidance on choosing distance metrics.",
    category: 'data-ai',
    tags: ['RAG', 'Databases', 'Open source'],
    dateAdded: '2026-08-27',
  },
  {
    id: "llama-cpp",
    title: "llama.cpp",
    url: "https://github.com/ggml-org/llama.cpp",
    description:
      "The C++ inference engine behind most local model tooling, optimised to run on ordinary hardware. Where you end up when the wrapper apps hit a limit.",
    category: 'data-ai',
    tags: ['AI', 'Open source', 'CLI'],
    dateAdded: '2026-08-24',
  },
  {
    id: "weaviate",
    title: "Weaviate",
    url: "https://weaviate.io",
    description:
      "Vector search with hybrid keyword-plus-semantic queries and modules for common embedding models. Good when retrieval quality needs both approaches.",
    category: 'data-ai',
    tags: ['RAG', 'Databases', 'Open source'],
    dateAdded: '2026-08-24',
  },
  {
    id: "pinecone",
    title: "Pinecone",
    url: "https://www.pinecone.io",
    description:
      "Managed vector search with no infrastructure to run, priced by usage. The default when retrieval is a feature rather than a project.",
    category: 'data-ai',
    tags: ['RAG', 'Databases', 'Tools'],
    dateAdded: '2026-08-21',
  },
  {
    id: "open-webui",
    title: "Open WebUI",
    url: "https://openwebui.com",
    description:
      "A self-hosted chat interface for local and remote models, with document upload and user accounts. Feels like a product, runs on your own machine.",
    category: 'data-ai',
    tags: ['AI', 'Open source', 'Privacy'],
    dateAdded: '2026-08-20',
  },
  {
    id: "pgvector",
    title: "pgvector",
    url: "https://github.com/pgvector/pgvector",
    description:
      "Vector similarity search as a Postgres extension, so embeddings live beside your relational data. Usually the right first answer before adding a dedicated database.",
    category: 'data-ai',
    tags: ['RAG', 'Databases', 'Open source'],
    dateAdded: '2026-08-18',
  },
  {
    id: "jan",
    title: "Jan",
    url: "https://jan.ai",
    description:
      "An open-source desktop assistant that runs models locally and keeps conversations on disk. A calmer, fully offline alternative to hosted chat apps.",
    category: 'data-ai',
    tags: ['AI', 'Open source', 'Privacy'],
    dateAdded: '2026-08-16',
  },
  {
    id: "unsloth",
    title: "Unsloth",
    url: "https://unsloth.ai",
    description:
      "Fine-tunes open models roughly twice as fast using less memory, with notebooks that run on a single consumer GPU. Makes LoRA practical without a cluster.",
    category: 'data-ai',
    tags: ['Fine-tuning', 'LLM', 'Open source'],
    dateAdded: '2026-08-15',
  },
  {
    id: "langchain",
    title: "LangChain",
    url: "https://www.langchain.com",
    description:
      "Building blocks for LLM applications: chains, tools, retrieval and memory, with integrations for most providers. Opinionated, and a good map of the problem space.",
    category: 'data-ai',
    tags: ['AI', 'Framework', 'Documentation'],
    dateAdded: '2026-08-12',
  },
  {
    id: "axolotl",
    title: "Axolotl",
    url: "https://axolotl.ai",
    description:
      "A YAML-driven fine-tuning framework that covers the configurations people actually use, with sensible defaults for LoRA and full fine-tunes.",
    category: 'data-ai',
    tags: ['Fine-tuning', 'LLM', 'Open source'],
    dateAdded: '2026-08-12',
  },
  {
    id: "huggingface-peft",
    title: "Hugging Face PEFT",
    url: "https://huggingface.co/docs/peft",
    description:
      "Parameter-efficient fine-tuning methods — LoRA, prefix tuning and friends — implemented against the Transformers stack. The reference for what each method costs.",
    category: 'data-ai',
    tags: ['Fine-tuning', 'LLM', 'Documentation'],
    dateAdded: '2026-08-09',
  },
  {
    id: "llamaindex",
    title: "LlamaIndex",
    url: "https://www.llamaindex.ai",
    description:
      "A data framework for retrieval-augmented generation, focused on connecting your own documents to a model. Stronger than most on the ingestion side.",
    category: 'data-ai',
    tags: ['AI', 'Data', 'Framework'],
    dateAdded: '2026-08-08',
  },
  {
    id: "modal",
    title: "Modal",
    url: "https://modal.com",
    description:
      "Serverless GPUs on demand, billed by the second with no cluster to manage. Particularly good for batch inference and fine-tuning jobs that run occasionally.",
    category: 'data-ai',
    tags: ['AI', 'Cloud', 'Tools'],
    dateAdded: '2026-08-06',
  },
  {
    id: "vllm",
    title: "vLLM",
    url: "https://docs.vllm.ai",
    description:
      "A high-throughput inference server for open models, using paged attention to serve many requests on one GPU. What you use when self-hosting gets serious.",
    category: 'data-ai',
    tags: ['AI', 'Performance', 'Documentation'],
    dateAdded: '2026-08-04',
  },
  {
    id: "runpod",
    title: "RunPod",
    url: "https://www.runpod.io",
    description:
      "Rents GPUs by the hour with templates for the usual frameworks, and persistent volumes so work survives a restart. Cheaper than managed endpoints for experiments.",
    category: 'data-ai',
    tags: ['AI', 'Cloud', 'Tools'],
    dateAdded: '2026-08-03',
  },
  {
    id: "wandb",
    title: "Weights & Biases",
    url: "https://wandb.ai",
    description:
      "Experiment tracking, metrics and model artefacts for machine learning teams, with a usable free tier. Makes runs comparable instead of archaeological.",
    category: 'data-ai',
    tags: ['AI', 'Data', 'Tools'],
    dateAdded: '2026-07-31',
  },
  {
    id: "fireworks-ai",
    title: "Fireworks AI",
    url: "https://fireworks.ai",
    description:
      "Fast hosted inference for open models, with fine-tuning and a serverless-to-dedicated path. A useful comparison point when latency budgets matter.",
    category: 'data-ai',
    tags: ['LLM', 'AI', 'Tools'],
    dateAdded: '2026-07-31',
  },
  {
    id: "artificial-analysis",
    title: "Artificial Analysis",
    url: "https://artificialanalysis.ai",
    description:
      "Side-by-side benchmarks for price, speed and quality across hosted models, updated as providers change. The sanity check before committing to a model.",
    category: 'data-ai',
    tags: ['Evaluation', 'LLM', 'Reference'],
    dateAdded: '2026-07-28',
  },
  {
    id: "mlflow",
    title: "MLflow",
    url: "https://mlflow.org",
    description:
      "Open-source tracking, packaging and deployment for models, with no vendor attached. The default when you want reproducibility without a subscription.",
    category: 'data-ai',
    tags: ['AI', 'Open source', 'Data'],
    dateAdded: '2026-07-27',
  },
  {
    id: "lmarena",
    title: "LMArena",
    url: "https://lmarena.ai",
    description:
      "Blind, crowdsourced model comparisons scored by human preference, with a leaderboard that shifts monthly. The closest thing to an opinion poll of users.",
    category: 'data-ai',
    tags: ['Evaluation', 'LLM', 'Community'],
    dateAdded: '2026-07-25',
  },
  {
    id: "scikit-learn",
    title: "scikit-learn",
    url: "https://scikit-learn.org",
    description:
      "The reference library for classical machine learning in Python, with consistent APIs and excellent documentation. Most problems do not need a neural network.",
    category: 'data-ai',
    tags: ['Data', 'Documentation', 'AI'],
    dateAdded: '2026-07-23',
  },
  {
    id: "pytorch",
    title: "PyTorch",
    url: "https://pytorch.org",
    description:
      "The deep learning framework most research and a growing share of production uses, with a Pythonic feel and a mature ecosystem of tutorials.",
    category: 'data-ai',
    tags: ['AI', 'Framework', 'Documentation'],
    dateAdded: '2026-07-19',
  },
  {
    id: "tensorflow",
    title: "TensorFlow",
    url: "https://www.tensorflow.org",
    description:
      "Google's machine learning platform, with strong deployment tooling and mobile support. Still a reasonable choice alongside PyTorch rather than instead of it.",
    category: 'data-ai',
    tags: ['AI', 'Framework', 'Documentation'],
    dateAdded: '2026-07-15',
  },
  {
    id: "jax",
    title: "JAX",
    url: "https://jax.readthedocs.io",
    description:
      "Composable numerical computing with automatic differentiation and just-in-time compilation. The tool of choice where research needs speed and control.",
    category: 'data-ai',
    tags: ['AI', 'Performance', 'Documentation'],
    dateAdded: '2026-07-11',
  },
  {
    id: "pandas",
    title: "pandas",
    url: "https://pandas.pydata.org",
    description:
      "The dataframe library nearly every Python data workflow starts with, with docs that double as a cookbook. Clunky at scale, unmatched for exploration.",
    category: 'data-ai',
    tags: ['Data', 'Documentation'],
    dateAdded: '2026-07-07',
  },
  {
    id: "polars",
    title: "Polars",
    url: "https://pola.rs",
    description:
      "A dataframe library built on Apache Arrow with a lazy query engine, fast enough to make pandas feel slow. Worth learning if you process large files.",
    category: 'data-ai',
    tags: ['Data', 'Performance', 'Tools'],
    dateAdded: '2026-07-03',
  },
  {
    id: "duckdb",
    title: "DuckDB",
    url: "https://duckdb.org",
    description:
      "An analytical database that runs in-process, querying CSV and Parquet files with real SQL. The missing tool between a spreadsheet and a warehouse.",
    category: 'data-ai',
    tags: ['Data', 'Databases', 'Tools'],
    dateAdded: '2026-06-29',
  },
  {
    id: "metabase",
    title: "Metabase",
    url: "https://www.metabase.com",
    description:
      "Self-hosted business intelligence that lets people query a database through a friendly interface. Open source, and the setup is a few minutes.",
    category: 'data-ai',
    tags: ['Data', 'Open source', 'Tools'],
    dateAdded: '2026-06-25',
  },
  {
    id: "grafana",
    title: "Grafana",
    url: "https://grafana.com",
    description:
      "Dashboards across metrics, logs and traces from many data sources, with alerting attached. The default when you need to see what a system is doing.",
    category: 'data-ai',
    tags: ['Data', 'DevOps', 'Tools'],
    dateAdded: '2026-06-21',
  },
  {
    id: "tableau-public",
    title: "Tableau Public",
    url: "https://public.tableau.com",
    description:
      "Free publishing for interactive data visualisations, with a large gallery to learn from. Your work is public, which is the trade for the price.",
    category: 'data-ai',
    tags: ['Data', 'Tools', 'Community'],
    dateAdded: '2026-06-17',
  },
  {
    id: "datawrapper",
    title: "Datawrapper",
    url: "https://www.datawrapper.de",
    description:
      "Chart and map publishing used by newsrooms, with sensible defaults and accessible palettes. The free tier is generous for single charts.",
    category: 'data-ai',
    tags: ['Data', 'Tools', 'Design'],
    dateAdded: '2026-06-13',
  },
  {
    id: "flourish",
    title: "Flourish",
    url: "https://flourish.studio",
    description:
      "Scrollytelling templates and animated charts that look editorial with very little work. Free for public visualisations, paid for private ones.",
    category: 'data-ai',
    tags: ['Data', 'Animation', 'Tools'],
    dateAdded: '2026-06-09',
  },
  {
    id: "rawgraphs",
    title: "RAWGraphs",
    url: "https://www.rawgraphs.io",
    description:
      "Paste data, pick an unusual chart type, export as SVG. Open source, and a good way to try visual forms beyond bars and lines.",
    category: 'data-ai',
    tags: ['Data', 'Open source', 'Tools'],
    dateAdded: '2026-06-05',
  },
  {
    id: "d3",
    title: "D3",
    url: "https://d3js.org",
    description:
      "The library underneath most bespoke web charts, binding data to the DOM with total control. Steep, and nothing else bends as far.",
    category: 'data-ai',
    tags: ['Data', 'JavaScript', 'Documentation'],
    dateAdded: '2026-06-01',
  },
  {
    id: "r4ds",
    title: "R for Data Science",
    url: "https://r4ds.hadley.nz",
    description:
      "The free book that teaches the tidyverse end to end: import, tidy, transform, visualise, communicate. The clearest data workflow writing available.",
    category: 'data-ai',
    tags: ['Data', 'Books', 'Learning'],
    dateAdded: '2026-05-28',
  },
  {
    id: "fast-ai",
    title: "fast.ai",
    url: "https://www.fast.ai",
    description:
      "A free course that starts with working models and works backwards into the theory. Good for people who learn by building rather than by derivation.",
    category: 'data-ai',
    tags: ['AI', 'Learning', 'Tutorial'],
    dateAdded: '2026-05-24',
  },
  {
    id: "statquest",
    title: "StatQuest",
    url: "https://statquest.org",
    description:
      "Statistics and machine learning explained slowly and clearly, with hand-drawn diagrams. The resource to watch when a paper assumes knowledge you lack.",
    category: 'data-ai',
    tags: ['Data', 'Learning', 'Video'],
    dateAdded: '2026-05-20',
  },
  {
    id: "arxiv",
    title: "arXiv",
    url: "https://arxiv.org",
    description:
      "Preprints across computer science, mathematics and physics, free to read. Everything current appears here first, long before it is peer reviewed.",
    category: 'data-ai',
    tags: ['AI', 'Reference', 'Data'],
    dateAdded: '2026-05-16',
  },
  {
    id: "semantic-scholar",
    title: "Semantic Scholar",
    url: "https://www.semanticscholar.org",
    description:
      "Academic search with citation context and automatic summaries, covering most fields. Better than a plain search when you need to know what cites what.",
    category: 'data-ai',
    tags: ['Reference', 'AI', 'Data'],
    dateAdded: '2026-05-12',
  },
  {
    id: "connected-papers",
    title: "Connected Papers",
    url: "https://www.connectedpapers.com",
    description:
      "Builds a graph of related papers around one seed, so you can see the shape of a field. The quickest way to find the work you should have read first.",
    category: 'data-ai',
    tags: ['Reference', 'Data', 'AI'],
    dateAdded: '2026-05-08',
  },
  {
    id: "elicit",
    title: "Elicit",
    url: "https://elicit.com",
    description:
      "An AI research assistant that extracts findings from papers into a structured table. Useful for literature reviews that would otherwise take a week.",
    category: 'data-ai',
    tags: ['AI', 'Data', 'Reference'],
    dateAdded: '2026-05-04',
  },
  {
    id: "notebooklm",
    title: "NotebookLM",
    url: "https://notebooklm.google.com",
    description:
      "Upload your own documents and ask questions grounded in them, with citations back to the source. The audio overview is a surprisingly good study aid.",
    category: 'data-ai',
    tags: ['AI', 'Notes', 'Learning'],
    dateAdded: '2026-04-30',
  },
  {
    id: "prompting-guide",
    title: "Prompt Engineering Guide",
    url: "https://www.promptingguide.ai",
    description:
      "A practical guide to prompting techniques, with examples and papers behind each one. Free, open source and updated as the models change.",
    category: 'data-ai',
    tags: ['AI', 'Learning', 'Documentation'],
    dateAdded: '2026-04-26',
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
    id: "hack-the-box",
    title: "Hack The Box",
    url: "https://www.hackthebox.com",
    description:
      "Retired machines and live labs you break into legally, with official walkthroughs and a large community. The closest thing to a gym for offensive skills.",
    category: 'security',
    tags: ['Red teaming', 'CTF', 'Practice'],
    dateAdded: '2026-10-20',
  },
  {
    id: "tryhackme",
    title: "TryHackMe",
    url: "https://tryhackme.com",
    description:
      "Guided, browser-based security rooms that start at absolute beginner and reach red-team territory. The best on-ramp if you have never opened a terminal.",
    category: 'security',
    tags: ['Red teaming', 'Blue teaming', 'Learning'],
    dateAdded: '2026-10-18',
  },
  {
    id: "portswigger-academy",
    title: "PortSwigger Web Security Academy",
    url: "https://portswigger.net/web-security",
    description:
      "Free, genuinely excellent labs on every class of web vulnerability, written by the makers of Burp Suite. Finish it and you understand appsec better than most.",
    category: 'security',
    tags: ['AppSec', 'Red teaming', 'Learning'],
    dateAdded: '2026-10-15',
  },
  {
    id: "hacktricks",
    title: "HackTricks",
    url: "https://book.hacktricks.wiki",
    description:
      "An immense, constantly updated wiki of offensive techniques and privilege escalation paths. The bookmarked page you consult halfway through every box.",
    category: 'security',
    tags: ['Red teaming', 'Reference', 'Tips'],
    dateAdded: '2026-10-12',
  },
  {
    id: "payloads-all-the-things",
    title: "Payloads All The Things",
    url: "https://github.com/swisskyrepo/PayloadsAllTheThings",
    description:
      "A curated list of payloads and bypasses for web and infrastructure attacks, organised by vulnerability class. Reference material, not a tutorial.",
    category: 'security',
    tags: ['Red teaming', 'AppSec', 'Reference'],
    dateAdded: '2026-10-09',
  },
  {
    id: "seclists",
    title: "SecLists",
    url: "https://github.com/danielmiessler/SecLists",
    description:
      "The wordlists nearly every security tool expects: usernames, passwords, directories, fuzzing strings. Install once and stop hunting for lists.",
    category: 'security',
    tags: ['Red teaming', 'Tools', 'Open source'],
    dateAdded: '2026-10-06',
  },
  {
    id: "owasp-zap",
    title: "OWASP ZAP",
    url: "https://www.zaproxy.org",
    description:
      "A free, open-source web proxy and scanner for finding vulnerabilities in your own applications. The realistic alternative to Burp's paid tiers.",
    category: 'security',
    tags: ['AppSec', 'Tools', 'Open source'],
    dateAdded: '2026-10-03',
  },
  {
    id: "burp-suite",
    title: "Burp Suite",
    url: "https://portswigger.net/burp",
    description:
      "The standard interception proxy for web security work, with a capable community edition. You will meet it in every bug bounty writeup you read.",
    category: 'security',
    tags: ['AppSec', 'Bug bounty', 'Tools'],
    dateAdded: '2026-09-30',
  },
  {
    id: "kali-linux",
    title: "Kali Linux",
    url: "https://www.kali.org",
    description:
      "A Debian distribution with the offensive toolset preinstalled, maintained by Offensive Security. Run it in a VM and nothing else on your machine gets exposed.",
    category: 'security',
    tags: ['Red teaming', 'Tools', 'Open source'],
    dateAdded: '2026-09-27',
  },
  {
    id: "nmap",
    title: "Nmap",
    url: "https://nmap.org",
    description:
      "Port scanning and service detection that everything else builds on, with a scripting engine for deeper checks. The first command in most engagements.",
    category: 'security',
    tags: ['Red teaming', 'Tools', 'Reference'],
    dateAdded: '2026-09-24',
  },
  {
    id: "metasploit",
    title: "Metasploit",
    url: "https://www.metasploit.com",
    description:
      "The exploitation framework with modules for known vulnerabilities, payloads and post-exploitation. Loud, effective, and best used on machines you own.",
    category: 'security',
    tags: ['Red teaming', 'Tools'],
    dateAdded: '2026-09-21',
  },
  {
    id: "sqlmap",
    title: "sqlmap",
    url: "https://sqlmap.org",
    description:
      "Detects and exploits SQL injection automatically, with tamper scripts for awkward filters. A reminder of why parameterised queries are not optional.",
    category: 'security',
    tags: ['Red teaming', 'AppSec', 'Tools'],
    dateAdded: '2026-09-18',
  },
  {
    id: "gtfobins",
    title: "GTFOBins",
    url: "https://gtfobins.github.io",
    description:
      "Unix binaries that can be abused to escape restrictions or escalate privileges, with the exact syntax. The first lookup after landing on a box.",
    category: 'security',
    tags: ['Red teaming', 'Reference', 'Tips'],
    dateAdded: '2026-09-15',
  },
  {
    id: "lolbas",
    title: "LOLBAS",
    url: "https://lolbas-project.github.io",
    description:
      "The Windows equivalent of GTFOBins: signed system binaries that can download, execute or bypass controls. Essential for understanding living-off-the-land attacks.",
    category: 'security',
    tags: ['Red teaming', 'Blue teaming', 'Reference'],
    dateAdded: '2026-09-12',
  },
  {
    id: "bloodhound",
    title: "BloodHound",
    url: "https://bloodhound.specterops.io",
    description:
      "Maps Active Directory relationships as a graph and finds the shortest path to domain admin. The tool that changed how Windows estates are assessed.",
    category: 'security',
    tags: ['Red teaming', 'Tools', 'Open source'],
    dateAdded: '2026-09-09',
  },
  {
    id: "impacket",
    title: "Impacket",
    url: "https://github.com/fortra/impacket",
    description:
      "Python classes for Windows network protocols, behind a lot of the tooling you already use. The library you drop into when a script needs SMB or Kerberos.",
    category: 'security',
    tags: ['Red teaming', 'Tools', 'Open source'],
    dateAdded: '2026-09-06',
  },
  {
    id: "revshells",
    title: "RevShells",
    url: "https://www.revshells.com",
    description:
      "Generates reverse shell one-liners in dozens of languages, with encoding options. Saves hunting through notes for the syntax that works on this box.",
    category: 'security',
    tags: ['Red teaming', 'Tools', 'Tips'],
    dateAdded: '2026-09-03',
  },
  {
    id: "ghidra",
    title: "Ghidra",
    url: "https://ghidra-sre.org",
    description:
      "NSA's open-source reverse engineering suite, with a decompiler that turns binaries back into readable C. Free, and good enough to replace paid tools.",
    category: 'security',
    tags: ['Reverse engineering', 'Malware', 'Open source'],
    dateAdded: '2026-08-31',
  },
  {
    id: "ida-free",
    title: "IDA Free",
    url: "https://hex-rays.com/ida-free",
    description:
      "The free tier of the disassembler most professional reverse engineers learned on. Limited to non-commercial use and a subset of architectures.",
    category: 'security',
    tags: ['Reverse engineering', 'Tools'],
    dateAdded: '2026-08-28',
  },
  {
    id: "hashcat",
    title: "Hashcat",
    url: "https://hashcat.net/hashcat/",
    description:
      "GPU-accelerated password recovery supporting hundreds of hash types. The reality check on whether your password policy means anything.",
    category: 'security',
    tags: ['Red teaming', 'Cryptography', 'Tools'],
    dateAdded: '2026-08-25',
  },
  {
    id: "john-the-ripper",
    title: "John the Ripper",
    url: "https://www.openwall.com/john/",
    description:
      "The veteran password cracker, strongest on Unix formats and rule-based mangling. Slower than Hashcat on GPUs and still enormously useful.",
    category: 'security',
    tags: ['Red teaming', 'Cryptography', 'Open source'],
    dateAdded: '2026-08-22',
  },
  {
    id: "wireshark",
    title: "Wireshark",
    url: "https://www.wireshark.org",
    description:
      "The packet analyser everybody eventually installs, with dissectors for nearly every protocol. Nothing else explains a network problem as concretely.",
    category: 'security',
    tags: ['Blue teaming', 'Tools', 'Reference'],
    dateAdded: '2026-08-19',
  },
  {
    id: "zeek",
    title: "Zeek",
    url: "https://zeek.org",
    description:
      "A network security monitor that turns traffic into rich connection logs rather than packets. The foundation of serious network detection work.",
    category: 'security',
    tags: ['Blue teaming', 'Threat intel', 'Open source'],
    dateAdded: '2026-08-16',
  },
  {
    id: "suricata",
    title: "Suricata",
    url: "https://suricata.io",
    description:
      "High-performance intrusion detection with rulesets shared across the industry. Pairs naturally with Zeek: alerts from one, context from the other.",
    category: 'security',
    tags: ['Blue teaming', 'Threat intel', 'Open source'],
    dateAdded: '2026-08-13',
  },
  {
    id: "sigma",
    title: "Sigma",
    url: "https://sigmahq.io",
    description:
      "A vendor-neutral rule format for writing detections once and converting them to whatever SIEM you actually run. The pragmatic answer to lock-in.",
    category: 'security',
    tags: ['Blue teaming', 'Threat intel', 'Open source'],
    dateAdded: '2026-08-10',
  },
  {
    id: "yara",
    title: "YARA",
    url: "https://virustotal.github.io/yara/",
    description:
      "Pattern-matching rules for identifying and classifying malware samples, used by nearly every scanner. Simple syntax, and it rewards careful writing.",
    category: 'security',
    tags: ['Blue teaming', 'Malware', 'Open source'],
    dateAdded: '2026-08-07',
  },
  {
    id: "atomic-red-team",
    title: "Atomic Red Team",
    url: "https://github.com/redcanaryco/atomic-red-team",
    description:
      "Small, mapped tests for each ATT&CK technique, so you can prove whether a detection fires. The practical bridge between red and blue.",
    category: 'security',
    tags: ['Red teaming', 'Blue teaming', 'Open source'],
    dateAdded: '2026-08-04',
  },
  {
    id: "mitre-attack",
    title: "MITRE ATT&CK",
    url: "https://attack.mitre.org",
    description:
      "The shared vocabulary of adversary tactics and techniques, mapped to real groups and software. Everything in detection engineering refers back to it.",
    category: 'security',
    tags: ['Threat intel', 'Reference', 'Blue teaming'],
    dateAdded: '2026-08-01',
  },
  {
    id: "mitre-cve",
    title: "CVE Program",
    url: "https://www.cve.org",
    description:
      "The canonical identifiers for publicly disclosed vulnerabilities, with the records behind every advisory you read. Dry, and the source of truth.",
    category: 'security',
    tags: ['Threat intel', 'Reference', 'AppSec'],
    dateAdded: '2026-07-29',
  },
  {
    id: "nvd",
    title: "NIST NVD",
    url: "https://nvd.nist.gov",
    description:
      "Enriched CVE records with CVSS scores, weaknesses and affected products. Where you check severity before deciding whether to panic.",
    category: 'security',
    tags: ['Threat intel', 'Reference', 'AppSec'],
    dateAdded: '2026-07-26',
  },
  {
    id: "exploit-db",
    title: "Exploit Database",
    url: "https://www.exploit-db.com",
    description:
      "A public archive of exploits and proof-of-concept code, searchable by CVE and product. The gap between a disclosure and something you can test.",
    category: 'security',
    tags: ['Red teaming', 'Threat intel', 'Reference'],
    dateAdded: '2026-07-23',
  },
  {
    id: "cisa-kev",
    title: "CISA KEV Catalog",
    url: "https://www.cisa.gov/known-exploited-vulnerabilities-catalog",
    description:
      "The vulnerabilities confirmed as exploited in the wild, with remediation deadlines for US agencies. The shortest list of things to patch first.",
    category: 'security',
    tags: ['Blue teaming', 'Threat intel', 'Reference'],
    dateAdded: '2026-07-20',
  },
  {
    id: "shodan",
    title: "Shodan",
    url: "https://www.shodan.io",
    description:
      "A search engine for internet-connected devices, indexed by banner and port. Useful for understanding your own exposure, alarming at scale.",
    category: 'security',
    tags: ['OSINT', 'Threat intel', 'Tools'],
    dateAdded: '2026-07-17',
  },
  {
    id: "censys",
    title: "Censys",
    url: "https://censys.com",
    description:
      "Internet-wide scanning data with certificates and service fingerprints, and a free research tier. A quieter, more precise Shodan.",
    category: 'security',
    tags: ['OSINT', 'Threat intel', 'Tools'],
    dateAdded: '2026-07-14',
  },
  {
    id: "urlscan",
    title: "urlscan.io",
    url: "https://urlscan.io",
    description:
      "Scans a URL in a sandbox and records every request it makes, with a screenshot and DOM. The fastest way to see what a suspicious link does.",
    category: 'security',
    tags: ['Blue teaming', 'OSINT', 'Tools'],
    dateAdded: '2026-07-11',
  },
  {
    id: "anyrun",
    title: "ANY.RUN",
    url: "https://any.run",
    description:
      "Interactive malware sandbox where you click through the execution yourself. A free tier covers small public analyses.",
    category: 'security',
    tags: ['Malware', 'Blue teaming', 'Forensics'],
    dateAdded: '2026-07-08',
  },
  {
    id: "malwarebazaar",
    title: "MalwareBazaar",
    url: "https://bazaar.abuse.ch",
    description:
      "A public repository of malware samples shared for research, with hashes and family tags. Use it to tune detection, not to run anything.",
    category: 'security',
    tags: ['Malware', 'Threat intel', 'Blue teaming'],
    dateAdded: '2026-07-05',
  },
  {
    id: "velociraptor",
    title: "Velociraptor",
    url: "https://docs.velociraptor.app",
    description:
      "Endpoint visibility and DFIR collection across a fleet, built around hunting queries. The tool that makes a compromised estate searchable.",
    category: 'security',
    tags: ['Blue teaming', 'Forensics', 'Open source'],
    dateAdded: '2026-07-02',
  },
  {
    id: "wazuh",
    title: "Wazuh",
    url: "https://wazuh.com",
    description:
      "Open-source SIEM and XDR: log collection, file integrity monitoring and active response in one stack. The most practical free starting point for a SOC.",
    category: 'security',
    tags: ['Blue teaming', 'Open source', 'Tools'],
    dateAdded: '2026-06-29',
  },
  {
    id: "the-dfir-report",
    title: "The DFIR Report",
    url: "https://thedfirreport.com",
    description:
      "Detailed write-ups of real intrusions, with timelines, commands and the detections that would have caught them. Better than any textbook on incident response.",
    category: 'security',
    tags: ['Blue teaming', 'Forensics', 'Threat intel'],
    dateAdded: '2026-06-26',
  },
  {
    id: "blue-team-labs",
    title: "Blue Team Labs Online",
    url: "https://blueteamlabs.online",
    description:
      "Defensive challenges built from realistic alert data: phishing triage, log analysis, malware investigation. The counterpart to an offensive lab subscription.",
    category: 'security',
    tags: ['Blue teaming', 'Practice', 'Learning'],
    dateAdded: '2026-06-23',
  },
  {
    id: "letsdefend",
    title: "LetsDefend",
    url: "https://letsdefend.io",
    description:
      "A simulated SOC with alerts to investigate, scoring and learning paths. The closest you can get to shift experience without a job.",
    category: 'security',
    tags: ['Blue teaming', 'Learning', 'Practice'],
    dateAdded: '2026-06-20',
  },
  {
    id: "cyberdefenders",
    title: "CyberDefenders",
    url: "https://cyberdefenders.org",
    description:
      "Free blue-team labs built around packet captures, memory dumps and disk images. Each one ends in concrete answers, not a score.",
    category: 'security',
    tags: ['Blue teaming', 'Forensics', 'Practice'],
    dateAdded: '2026-06-17',
  },
  {
    id: "hackerone",
    title: "HackerOne",
    url: "https://www.hackerone.com",
    description:
      "The largest bug bounty platform, with public disclosure reports that double as a free education in how real bugs are found.",
    category: 'security',
    tags: ['Bug bounty', 'Community', 'AppSec'],
    dateAdded: '2026-06-14',
  },
  {
    id: "bugcrowd",
    title: "Bugcrowd",
    url: "https://www.bugcrowd.com",
    description:
      "Bug bounty and vulnerability disclosure programmes, with a strong emphasis on trusted researcher relationships. Broad programme catalogue.",
    category: 'security',
    tags: ['Bug bounty', 'Community', 'AppSec'],
    dateAdded: '2026-06-11',
  },
  {
    id: "intigriti",
    title: "Intigriti",
    url: "https://www.intigriti.com",
    description:
      "A European bug bounty platform with well-scoped programmes and a community that is unusually generous with write-ups.",
    category: 'security',
    tags: ['Bug bounty', 'Community', 'AppSec'],
    dateAdded: '2026-06-08',
  },
  {
    id: "pentester-land",
    title: "Pentester Land",
    url: "https://pentester.land",
    description:
      "An aggregated, searchable list of bug bounty write-ups and disclosure reports. The fastest way to learn a vulnerability class from real examples.",
    category: 'security',
    tags: ['Bug bounty', 'Learning', 'Reference'],
    dateAdded: '2026-06-05',
  },
  {
    id: "pentesterlab",
    title: "PentesterLab",
    url: "https://pentesterlab.com",
    description:
      "Hands-on exercises focused on understanding a vulnerability rather than firing a scanner. Paid, with a set of free badges to start.",
    category: 'security',
    tags: ['AppSec', 'Red teaming', 'Practice'],
    dateAdded: '2026-06-02',
  },
  {
    id: "ctftime",
    title: "CTFtime",
    url: "https://ctftime.org",
    description:
      "The calendar and rankings for capture-the-flag competitions worldwide, with write-ups linked after each event. Where to find your first CTF.",
    category: 'security',
    tags: ['CTF', 'Community', 'Learning'],
    dateAdded: '2026-05-30',
  },
  {
    id: "pwn-college",
    title: "pwn.college",
    url: "https://pwn.college",
    description:
      "Free, university-grade security courses from Arizona State, taught through browser-hosted labs on exploitation and defence. Demanding, and completely free.",
    category: 'security',
    tags: ['Red teaming', 'Learning', 'Practice'],
    dateAdded: '2026-05-27',
  },
  {
    id: "w3c",
    title: "W3C",
    url: "https://www.w3.org",
    description:
      "The standards body behind HTML, CSS and much of the web platform, with specifications and working drafts. Dense, but the source everything else cites.",
    category: 'reference',
    tags: ['Reference', 'Documentation', 'HTML'],
    dateAdded: '2026-09-22',
  },
  {
    id: "whatwg",
    title: "WHATWG",
    url: "https://whatwg.org",
    description:
      "The living standards for HTML and the DOM, maintained continuously rather than in versions. Where the browser behaviour you are debugging is actually specified.",
    category: 'reference',
    tags: ['HTML', 'Reference', 'Documentation'],
    dateAdded: '2026-09-18',
  },
  {
    id: "ecmascript",
    title: "ECMAScript Specification",
    url: "https://tc39.es/ecma262/",
    description:
      "The language specification for JavaScript, readable in sections once you accept the notation. The only answer to a semantics argument that ends it.",
    category: 'reference',
    tags: ['JavaScript', 'Reference', 'Documentation'],
    dateAdded: '2026-09-13',
  },
  {
    id: "tc39-proposals",
    title: "TC39 Proposals",
    url: "https://github.com/tc39/proposals",
    description:
      "Everything on its way into JavaScript, from stage zero to finished, with the open questions attached. Read it before adopting a syntax you saw in a post.",
    category: 'reference',
    tags: ['JavaScript', 'Reference', 'Open source'],
    dateAdded: '2026-09-09',
  },
  {
    id: "chrome-devtools",
    title: "Chrome DevTools Docs",
    url: "https://developer.chrome.com/docs/devtools",
    description:
      "Guides to every panel in the browser tools most of us use daily, including the ones you have never opened. The performance and network sections earn their keep.",
    category: 'reference',
    tags: ['Documentation', 'Performance', 'Tools'],
    dateAdded: '2026-09-04',
  },
  {
    id: "pagespeed-insights",
    title: "PageSpeed Insights",
    url: "https://pagespeed.web.dev",
    description:
      "Field and lab performance data for any URL, with the specific fixes that would gain the most. Run it before believing your site is fast.",
    category: 'reference',
    tags: ['Performance', 'Tools', 'Reference'],
    dateAdded: '2026-08-31',
  },
  {
    id: "w3c-validator",
    title: "W3C Markup Validator",
    url: "https://validator.w3.org",
    description:
      "Checks a page against the HTML specification and lists real errors with line numbers. Still catches the nesting mistakes that break accessibility.",
    category: 'reference',
    tags: ['HTML', 'Tools', 'Accessibility'],
    dateAdded: '2026-08-27',
  },
  {
    id: "wave",
    title: "WAVE",
    url: "https://wave.webaim.org",
    description:
      "Visual accessibility evaluation that overlays errors and contrast issues onto your page. The colour contrast feedback alone justifies bookmarking it.",
    category: 'reference',
    tags: ['Accessibility', 'Tools', 'Reference'],
    dateAdded: '2026-08-23',
  },
  {
    id: "axe",
    title: "Deque axe",
    url: "https://www.deque.com/axe/",
    description:
      "The accessibility engine behind many testing tools, available as a browser extension and an automated suite. Rules that map to real WCAG failures.",
    category: 'reference',
    tags: ['Accessibility', 'Testing', 'Tools'],
    dateAdded: '2026-08-19',
  },
  {
    id: "a11y-project",
    title: "The A11y Project",
    url: "https://www.a11yproject.com",
    description:
      "A community-driven handbook of accessibility practices, written for people without a specialist background. The checklist is a good place to start any project.",
    category: 'reference',
    tags: ['Accessibility', 'Learning', 'Community'],
    dateAdded: '2026-08-15',
  },
  {
    id: "aria-apg",
    title: "ARIA Authoring Practices",
    url: "https://www.w3.org/WAI/ARIA/apg/",
    description:
      "Patterns for building accessible widgets — menus, tabs, comboboxes — with the keyboard interactions spelled out. The reference before writing your own component.",
    category: 'reference',
    tags: ['Accessibility', 'Reference', 'Documentation'],
    dateAdded: '2026-08-11',
  },
  {
    id: "postgresql-docs",
    title: "PostgreSQL Documentation",
    url: "https://www.postgresql.org/docs/",
    description:
      "Thorough documentation for a database that rewards reading it, including the tutorial and the SQL command reference. The section on indexes is worth an hour.",
    category: 'reference',
    tags: ['Databases', 'Documentation', 'Reference'],
    dateAdded: '2026-08-07',
  },
  {
    id: "mysql-docs",
    title: "MySQL Documentation",
    url: "https://dev.mysql.com/doc/",
    description:
      "The official manual, covering SQL syntax, storage engines and configuration. Verbose in places, complete everywhere it matters.",
    category: 'reference',
    tags: ['Databases', 'Documentation', 'Reference'],
    dateAdded: '2026-08-03',
  },
  {
    id: "sqlite-docs",
    title: "SQLite Documentation",
    url: "https://sqlite.org/docs.html",
    description:
      "Small, precise documentation for the database inside almost every phone and browser. The pages on types and query planning explain a lot of surprises.",
    category: 'reference',
    tags: ['Databases', 'Documentation', 'Reference'],
    dateAdded: '2026-07-30',
  },
  {
    id: "redis-docs",
    title: "Redis Documentation",
    url: "https://redis.io/docs/",
    description:
      "Reference and guides for the in-memory store, from data types to persistence and clustering. The command pages are the part you will use daily.",
    category: 'reference',
    tags: ['Databases', 'Documentation', 'Performance'],
    dateAdded: '2026-07-26',
  },
  {
    id: "mongodb-docs",
    title: "MongoDB Documentation",
    url: "https://www.mongodb.com/docs/",
    description:
      "Manual for the document database, including the aggregation pipeline and schema design guidance. Read the schema section before modelling anything.",
    category: 'reference',
    tags: ['Databases', 'Documentation'],
    dateAdded: '2026-07-22',
  },
  {
    id: "kubernetes-docs",
    title: "Kubernetes Documentation",
    url: "https://kubernetes.io/docs/",
    description:
      "Concepts, tasks and API reference for the container orchestrator, with a decent tutorial path. Accurate, and the concepts pages prevent most confusion.",
    category: 'reference',
    tags: ['DevOps', 'Documentation', 'Reference'],
    dateAdded: '2026-07-18',
  },
  {
    id: "man7",
    title: "Linux man-pages",
    url: "https://man7.org/linux/man-pages/",
    description:
      "The system manual pages in browsable form, covering syscalls, library functions and commands. The appendix on signal handling answers most odd process questions.",
    category: 'reference',
    tags: ['CLI', 'Reference', 'Documentation'],
    dateAdded: '2026-07-14',
  },
  {
    id: "bash-manual",
    title: "Bash Reference Manual",
    url: "https://www.gnu.org/software/bash/manual/",
    description:
      "The definitive description of Bash: expansion, redirection, builtins and job control. Read the expansion order once and stop guessing.",
    category: 'reference',
    tags: ['CLI', 'Documentation', 'Reference'],
    dateAdded: '2026-07-10',
  },
  {
    id: "rfc-editor",
    title: "RFC Editor",
    url: "https://www.rfc-editor.org",
    description:
      "The archive of internet standards, from HTTP to DNS, in their original form. Heavier than MDN and authoritative in a way nothing else is.",
    category: 'reference',
    tags: ['Reference', 'Documentation', 'Compatibility'],
    dateAdded: '2026-07-06',
  },
  {
    id: "http-archive",
    title: "HTTP Archive",
    url: "https://httparchive.org",
    description:
      "Long-running measurements of how the web is actually built: payload sizes, frameworks, adoption. The evidence behind most performance claims.",
    category: 'reference',
    tags: ['Data', 'Performance', 'Reference'],
    dateAdded: '2026-07-02',
  },
  {
    id: "state-of-js",
    title: "State of JavaScript",
    url: "https://stateofjs.com",
    description:
      "Annual survey results on tools, usage and satisfaction, with the free-form comments that explain the numbers. Useful before adopting anything popular.",
    category: 'reference',
    tags: ['Data', 'Reference', 'JavaScript'],
    dateAdded: '2026-06-28',
  },
  {
    id: "so-survey",
    title: "Stack Overflow Developer Survey",
    url: "https://survey.stackoverflow.co",
    description:
      "The largest survey of developers, covering tools, salaries and demographics. Skewed toward its own audience, and still the best broad dataset.",
    category: 'reference',
    tags: ['Data', 'Reference', 'Career'],
    dateAdded: '2026-06-24',
  },
  {
    id: "npm-trends",
    title: "npm trends",
    url: "https://npmtrends.com",
    description:
      "Compares download counts for packages over time, which is the quickest reality check on whether a library is growing or quietly dying.",
    category: 'reference',
    tags: ['JavaScript', 'Data', 'Tools'],
    dateAdded: '2026-06-20',
  },
  {
    id: "commonmark",
    title: "CommonMark Spec",
    url: "https://spec.commonmark.org",
    description:
      "The precise definition of Markdown, including the edge cases where implementations disagree. The reference when your parser does something unexpected.",
    category: 'reference',
    tags: ['Writing', 'Reference', 'Documentation'],
    dateAdded: '2026-06-16',
  },
  {
    id: "json-schema",
    title: "JSON Schema",
    url: "https://json-schema.org",
    description:
      "A vocabulary for describing and validating JSON documents, with implementations in most languages. The specification is dry and the examples are clear.",
    category: 'reference',
    tags: ['Data', 'Reference', 'Documentation'],
    dateAdded: '2026-06-12',
  },
  {
    id: "openapi",
    title: "OpenAPI Specification",
    url: "https://spec.openapis.org",
    description:
      "The standard format for describing HTTP APIs, which unlocks docs, clients and tests generated from one file. Worth reading before hand-writing an API doc.",
    category: 'reference',
    tags: ['Documentation', 'Reference', 'Tools'],
    dateAdded: '2026-06-08',
  },
  {
    id: "semver",
    title: "Semantic Versioning",
    url: "https://semver.org",
    description:
      "The three-number convention and what each part promises. Short enough to read in a minute, and it settles most dependency arguments.",
    category: 'reference',
    tags: ['Reference', 'Git', 'Documentation'],
    dateAdded: '2026-06-04',
  },
  {
    id: "conventional-commits",
    title: "Conventional Commits",
    url: "https://www.conventionalcommits.org",
    description:
      "A commit message convention that makes changelogs and version bumps automatic. Adopt it early in a project; retrofitting it is tedious.",
    category: 'reference',
    tags: ['Git', 'Reference', 'Documentation'],
    dateAdded: '2026-05-31',
  },
  {
    id: "keep-a-changelog",
    title: "Keep a Changelog",
    url: "https://keepachangelog.com",
    description:
      "A human-readable changelog format organised by change type rather than by commit. The reasoning about who reads changelogs is worth the read.",
    category: 'reference',
    tags: ['Writing', 'Reference', 'Git'],
    dateAdded: '2026-05-27',
  },
  {
    id: "choosealicense",
    title: "Choose a License",
    url: "https://choosealicense.com",
    description:
      "Explains the practical differences between open-source licences and what each permits. The best short answer to a question with expensive consequences.",
    category: 'reference',
    tags: ['Reference', 'Open source', 'Documentation'],
    dateAdded: '2026-05-23',
  },
  {
    id: "github-gitignore",
    title: "GitHub gitignore Templates",
    url: "https://github.com/github/gitignore",
    description:
      "A maintained collection of .gitignore files for every language and editor. Copy one instead of discovering what you forgot two commits later.",
    category: 'reference',
    tags: ['Git', 'Reference', 'Open source'],
    dateAdded: '2026-05-19',
  },
  {
    id: "naming-cheatsheet",
    title: "Naming Cheatsheet",
    url: "https://github.com/kettanaito/naming-cheatsheet",
    description:
      "Conventions for naming variables, functions and components, with the reasoning behind each. Small, and it quietly improves every code review.",
    category: 'reference',
    tags: ['Reference', 'Tips', 'Documentation'],
    dateAdded: '2026-05-15',
  },
  {
    id: "awesome",
    title: "Awesome Lists",
    url: "https://github.com/sindresorhus/awesome",
    description:
      "An index of curated lists on nearly every technical subject, each maintained in the open. Quality varies by list, so check the last commit date.",
    category: 'reference',
    tags: ['Reference', 'Community', 'Open source'],
    dateAdded: '2026-05-11',
  },
  {
    id: "devhints",
    title: "Devhints",
    url: "https://devhints.io",
    description:
      "One-page cheatsheets for languages, tools and command-line utilities, designed to be scanned rather than read. The Bash and Vim sheets get used most.",
    category: 'reference',
    tags: ['Reference', 'Tips', 'Documentation'],
    dateAdded: '2026-05-07',
  },
  {
    id: "cheatography",
    title: "Cheatography",
    url: "https://cheatography.com",
    description:
      "Thousands of community-made cheatsheets across programming, systems and design. Printable, which is still how some of us learn.",
    category: 'reference',
    tags: ['Reference', 'Community'],
    dateAdded: '2026-05-03',
  },
  {
    id: "caniemail",
    title: "Can I email",
    url: "https://www.caniemail.com",
    description:
      "Support tables for HTML and CSS in email clients, the way Can I use does for browsers. Essential before designing anything that lands in Outlook.",
    category: 'reference',
    tags: ['Compatibility', 'Reference', 'Email'],
    dateAdded: '2026-04-29',
  },
  {
    id: "learn-x-in-y-minutes",
    title: "Learn X in Y minutes",
    url: "https://learnxinyminutes.com",
    description:
      "Each language condensed into one annotated file you can read in a sitting. The quickest way to read code in something you have never written.",
    category: 'reference',
    tags: ['Learning', 'Reference', 'Documentation'],
    dateAdded: '2026-04-25',
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
];
