export function createEnumUtil<T extends Record<string, string | number>>(
  obj: T
) {
  return Object.freeze(obj) as {
    [K in keyof T]: T[K]
  }
}
