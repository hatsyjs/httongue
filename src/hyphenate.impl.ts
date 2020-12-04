/**
 * @internal
 */
export const uppercasePattern = /[A-Z]+/g;

/**
 * @internal
 */
export function toHyphenLower(letters: string, offset: number, str: string): string {

  const lowerCase = letters.toLowerCase();

  if ((lowerCase.length > 1) && (offset + lowerCase.length < str.length)) {
    // More than one subsequent upper-case letters, unless at the end of the string.
    return `-${lowerCase.slice(0, -1)}-${lowerCase.slice(-1)}`;
  }

  return '-' + lowerCase;
}

/**
 * @internal
 */
export const hyphenateCSSName$cache = (/*#__PURE__*/ new Map<string, string>());
