/**
 * How many cards are painted at once.
 *
 * With 533 entries a single unpaginated grid was ~24 screens tall, which made
 * the library feel endless. 36 fills three rows on a wide screen and is a
 * comfortable first screen everywhere else.
 *
 * Every card is still server-rendered (so the page works without JavaScript
 * and stays fully crawlable); the rest are simply hidden until asked for.
 */
export const PAGE_SIZE = 36;
