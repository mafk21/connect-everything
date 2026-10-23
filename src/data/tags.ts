/**
 * Controlled tag vocabulary.
 * Order here is the order shown in the sidebar — roughly by how often
 * a visitor will reach for them, not alphabetically.
 *
 * Rule: a resource may carry 1–5 tags, and every tag must exist here.
 * Adding a new tag means adding one line to this file.
 */
export const TAGS = [
  'AI',
  'Community',
  'Compatibility',
  'CSS',
  'Design',
  'Framework',
  'Git',
  'HTML',
  'JavaScript',
  'Layout',
  'Learning',
  'Performance',
  'Practice',
  'Reference',
  'Tips',
  'Tools',
  'Tutorial',
] as const;

export type Tag = (typeof TAGS)[number];

const normalised = new Map<string, Tag>(TAGS.map((tag) => [tag.toLowerCase(), tag]));

/** Accept any casing in resource data, store the canonical spelling. */
export const canonicalTag = (input: string): Tag | undefined =>
  normalised.get(input.trim().toLowerCase());
