export function toShuffled<T>(array: T[]): T[] {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .toSorted((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}
