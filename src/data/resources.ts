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
 * keep the description honest and specific, then run `npm run check`.
 * Everything else (domain, favicon, counts) is derived at build time.
 */
export const RESOURCES: Resource[] = [
  {
    id: 'frontend-mentor',
    title: 'Frontend Mentor',
    url: 'https://www.frontendmentor.io',
    description:
      'Improve your front-end coding skills by building real projects. Solve real-world HTML, CSS and JavaScript challenges while working to professional designs.',
    category: 'learning',
    tags: ['Practice', 'Learning', 'Community'],
    featured: true,
    dateAdded: '2026-01-15',
  },
  {
    id: 'mdn-web-docs',
    title: 'MDN Web Docs',
    url: 'https://developer.mozilla.org',
    description:
      'The MDN Web Docs site provides information about Open Web technologies including HTML, CSS, and APIs for both Web sites and progressive web apps.',
    category: 'reference',
    tags: ['Reference', 'HTML', 'CSS', 'JavaScript'],
    featured: true,
    dateAdded: '2026-01-10',
  },
  {
    id: 'react-docs',
    title: 'React Docs',
    url: 'https://react.dev',
    description:
      'The library for web and native user interfaces. Build user interfaces out of individual pieces called components.',
    category: 'development',
    tags: ['JavaScript', 'Framework', 'Reference'],
    dateAdded: '2026-02-20',
  },
  {
    id: 'claude',
    title: 'Claude',
    url: 'https://claude.ai',
    description:
      'An AI assistant created by Anthropic that can help with analysis, writing, coding, math, and creative tasks through natural conversation.',
    category: 'data-ai',
    tags: ['Tools', 'AI'],
    dateAdded: '2026-02-18',
  },
  {
    id: 'web-dev',
    title: 'web.dev',
    url: 'https://web.dev',
    description:
      'Guidance to build modern web experiences that work on any browser. Learn about web vitals, PWAs, and more.',
    category: 'learning',
    tags: ['Performance', 'Learning', 'Tips'],
    dateAdded: '2026-02-15',
  },
  {
    id: 'tailwind-css',
    title: 'Tailwind CSS',
    url: 'https://tailwindcss.com',
    description:
      'A utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.',
    category: 'development',
    tags: ['CSS', 'Framework', 'Tools'],
    dateAdded: '2026-02-12',
  },
  {
    id: 'dev-to',
    title: 'DEV Community',
    url: 'https://dev.to',
    description:
      'A constructive and inclusive social network for software developers. Share knowledge and grow your career alongside people building the same things you are.',
    category: 'learning',
    tags: ['Community', 'Learning', 'Practice'],
    dateAdded: '2026-02-08',
  },
  {
    id: 'javascript-info',
    title: 'JavaScript.info',
    url: 'https://javascript.info',
    description:
      'The Modern JavaScript Tutorial. How it is done now. From the basics to advanced topics with simple, but detailed explanations.',
    category: 'learning',
    tags: ['JavaScript', 'Tutorial', 'Reference'],
    featured: true,
    dateAdded: '2026-01-28',
  },
  {
    id: 'freecodecamp',
    title: 'freeCodeCamp',
    url: 'https://www.freecodecamp.org',
    description:
      'Learn to code for free. Build projects. Earn certifications. An open source community that helps you learn to code with free online courses and certifications.',
    category: 'learning',
    tags: ['Learning', 'Practice', 'Tutorial'],
    dateAdded: '2026-01-22',
  },
  {
    id: 'caniuse',
    title: 'Can I use',
    url: 'https://caniuse.com',
    description:
      'Browser support tables for modern web technologies. Check whether a CSS property or JavaScript API is safe to ship before you commit to it.',
    category: 'reference',
    tags: ['Compatibility', 'Reference', 'CSS'],
    dateAdded: '2026-01-18',
  },
  {
    id: 'css-tricks',
    title: 'CSS-Tricks',
    url: 'https://css-tricks.com',
    description:
      'A long-running publication about CSS and front-end craft, with the deepest explainers anywhere on layout, grid, and the odd corners of the cascade.',
    category: 'learning',
    tags: ['CSS', 'Layout', 'Tips'],
    dateAdded: '2026-01-12',
  },
  {
    id: 'figma',
    title: 'Figma',
    url: 'https://www.figma.com',
    description:
      'Collaborative interface design in the browser. Wireframe, prototype and hand off in the same file, with everyone looking at the same thing.',
    category: 'design',
    tags: ['Design', 'Tools'],
    featured: true,
    dateAdded: '2026-01-05',
  },
];
