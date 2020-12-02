/**
 * @internal
 */
export const uppercasePattern = /[A-Z]+/g;

/**
 * @internal
 */
export const hyphenateName$cache = (/*#__PURE__*/ new Map<string, string>());

/**
 * @internal
 */
export function toHyphenLower(letters: string, offset: number, str: string): string {

  const lowerCase = letters.toLowerCase();

  if ((lowerCase.length < 2) || (offset + lowerCase.length >= str.length)) {
    return '-' + lowerCase;
  }

  return '-' + lowerCase.slice(0, -1) + '-' + lowerCase.slice(-1);
}
