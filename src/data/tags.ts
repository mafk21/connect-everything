/**
 * Controlled tag vocabulary.
 * Order here is the order shown in the sidebar — roughly by how often a
 * visitor will reach for them, not alphabetically.
 *
 * Rule: a resource may carry 1–5 tags, and every tag must exist here.
 * Adding a new tag means adding one line to this file.
 */
export const TAG_GROUPS = [
  {
    id: 'discipline',
    label: 'Discipline',
    tags: [
      'CSS',
      'JavaScript',
      'Design',
      'Layout',
      'Typography',
      'Color',
      'Animation',
      '3D',
      'Performance',
      'Accessibility',
      'Compatibility',
      'Security',
    ],
  },
  {
    id: 'format',
    label: 'Format',
    tags: [
      'Reference',
      'Documentation',
      'Learning',
      'Tutorial',
      'Practice',
      'Tips',
      'Tools',
      'Inspiration',
    ],
  },
  {
    id: 'subject',
    label: 'Subject',
    tags: [
      'Images',
      'Icons',
      'Fonts',
      'Video',
      'Audio',
      'Diagrams',
      'Data',
      'Databases',
      'AI',
      'HTML',
      'Framework',
      'Testing',
      'Git',
    ],
  },
  {
    id: 'security',
    label: 'Security',
    tags: [
      'Red teaming',
      'Blue teaming',
      'Bug bounty',
      'AppSec',
      'CTF',
      'OSINT',
      'Forensics',
      'Malware',
      'Threat intel',
      'Reverse engineering',
      'Cryptography',
    ],
  },
  {
    id: 'ai',
    label: 'AI & LLM',
    tags: ['LLM', 'AI coding', 'Agents', 'RAG', 'Fine-tuning', 'Evaluation'],
  },
  {
    id: 'practice',
    label: 'Practice',
    tags: [
      'Productivity',
      'Notes',
      'Writing',
      'Email',
      'Automation',
      'CLI',
      'DevOps',
      'Cloud',
      'Podcasts',
      'Books',
      'Career',
    ],
  },
  {
    id: 'quality',
    label: 'Qualities',
    tags: ['Open source', 'Privacy', 'Community'],
  },
] as const;

/** Groups shown before "Show all tags". */
export const TAG_GROUPS_VISIBLE = 3;

/** Flat list, in sidebar order. This is the validation source of truth. */
export const TAGS = TAG_GROUPS.flatMap((group) => group.tags);

export type Tag = (typeof TAGS)[number];

const normalised = new Map<string, Tag>(TAGS.map((tag) => [tag.toLowerCase(), tag]));

/** Accept any casing in resource data, store the canonical spelling. */
export const canonicalTag = (input: string): Tag | undefined =>
  normalised.get(input.trim().toLowerCase());
