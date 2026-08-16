/**
 * Safe query parameter serializer and parser for shareable calculator links.
 */

export function encodeCalculatorState(params: Record<string, number | string | boolean>): string {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      searchParams.set(key, String(value));
    }
  });
  return searchParams.toString();
}

export function decodeCalculatorState<T extends Record<string, any>>(
  searchParams: URLSearchParams,
  defaults: T
): T {
  const result: Record<string, any> = { ...defaults };

  Object.keys(defaults).forEach((key) => {
    const rawVal = searchParams.get(key);
    if (rawVal !== null && rawVal !== undefined) {
      const defaultType = typeof defaults[key];
      if (defaultType === 'number') {
        const parsed = parseFloat(rawVal);
        if (!isNaN(parsed) && isFinite(parsed)) {
          result[key] = parsed;
        }
      } else if (defaultType === 'boolean') {
        result[key] = rawVal === 'true' || rawVal === '1';
      } else {
        result[key] = rawVal;
      }
    }
  });

  return result as T;
}
