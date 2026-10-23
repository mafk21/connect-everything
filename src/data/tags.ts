/**
 * Controlled tag vocabulary.
 * Order here is the order shown in the sidebar — roughly by how often a
 * visitor will reach for them, not alphabetically.
 *
 * Rule: a resource may carry 1–5 tags, and every tag must exist here.
 * Adding a new tag means adding one line to this file.
 */
export const TAGS = [
  // disciplines and craft
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
  // what it is
  'Reference',
  'Documentation',
  'Learning',
  'Tutorial',
  'Practice',
  'Tips',
  'Tools',
  'Inspiration',
  // subject matter
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
  // security
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
  // working practice
  'Productivity',
  'AI coding',
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
  // qualities
  'Open source',
  'Privacy',
  'Community',
] as const;

export type Tag = (typeof TAGS)[number];

const normalised = new Map<string, Tag>(TAGS.map((tag) => [tag.toLowerCase(), tag]));

/** Accept any casing in resource data, store the canonical spelling. */
export const canonicalTag = (input: string): Tag | undefined =>
  normalised.get(input.trim().toLowerCase());
