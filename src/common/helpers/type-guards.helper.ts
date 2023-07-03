/**
 * Undefined type guard
 * @param value
 */
export function isUndefined(value: unknown): value is undefined {
  return typeof value === 'undefined';
}

/**
 * Null value guard
 * @param value
 */
export function isNull(value: unknown): value is null {
  return value === null;
}

/**
 * Null or undefined guard
 * @param value
 */
export function isNil(value: unknown): value is null | undefined {
  return value == null;
}
