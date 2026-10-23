/**
 * Categories — the browsing spine. Single-select in the UI.
 * Keep this list short (8 max) so the sidebar stays scannable.
 */
export const CATEGORIES = [
  {
    id: 'design',
    label: 'Design',
    blurb: 'Visual tools, UI kits and design references.',
  },
  {
    id: 'development',
    label: 'Development',
    blurb: 'Languages, frameworks and things that build the web.',
  },
  {
    id: 'learning',
    label: 'Learning',
    blurb: 'Courses, tutorials and places to practise.',
  },
  {
    id: 'tools',
    label: 'Tools',
    blurb: 'Utilities that save time or unlock new work.',
  },
  {
    id: 'productivity',
    label: 'Productivity',
    blurb: 'Notes, tasks and ways of staying on top of things.',
  },
  {
    id: 'media',
    label: 'Media',
    blurb: 'Images, audio, video and type.',
  },
  {
    id: 'data-ai',
    label: 'Data & AI',
    blurb: 'Models, datasets and assistants.',
  },
  {
    id: 'reference',
    label: 'Reference',
    blurb: 'Docs and lookup tables worth keeping close.',
  },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]['id'];

export const categoryById = (id: CategoryId) =>
  CATEGORIES.find((category) => category.id === id)!;
