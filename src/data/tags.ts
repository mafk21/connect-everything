/**
 * Controlled tag vocabulary.
 * Order here is the order shown in the sidebar — roughly by how often a
 * visitor will reach for them, not alphabetically.
 *
 * Rule: a resource may carry 1–5 tags, and every tag must exist here.
 * Adding a new tag means adding one line to this file.
 */
export const TAGS = [
  // disciplines
  'CSS',
  'JavaScript',
  'Design',
  'Layout',
  'Performance',
  'Accessibility',
  'Compatibility',
  // what it is
  'Reference',
  'Documentation',
  'Learning',
  'Tutorial',
  'Practice',
  'Tips',
  'Tools',
  'Productivity',
  'Data',
  'AI',
  // subject matter
  'Images',
  'Icons',
  'Video',
  'Audio',
  'Fonts',
  'Typography',
  'Color',
  'Animation',
  'Diagrams',
  'Notes',
  'Writing',
  'Testing',
  'Git',
  'HTML',
  'Framework',
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
