/**
 * Hyphenates camel-cased string.
 *
 * Applicable to CSS property names.
 *
 * Converts:
 *
 * - `backgroundColor` to `background-color`.
 *
 *    Uppercase letters converted to lower case and prepended by hyphen,
 *
 * - `MozTransition` to `-moz-transition`.
 *
 *   The very first uppercase letter is prepended by hyphen too.
 *
 * - `MSTransition` to `-ms-transition`.
 *
 *   Subsequent upper-case letters converted to lower case. The first and the last ones prepended by hyphen.
 *
 * - `someURL` to `some-url`
 *
 *   Subsequent upper-case letters in the very end of the string converted to lower case and prepended by hyphen.
 *
 * - `color` to `color`.
 *
 *   All lower-case names remain as is.
 *
 * - `padding-left` to `padding-left`
 *
 * The leading upper-case letter is not prepended by hyphen. Thus, e.g. `MozTransition` would be converted to
 * `moz-transition` rather to `-moz-transition`.
 *
 * @param input - Camel-cased input to hyphenate.
 *
 * @returns Hyphenated name.
 */
export function hyphenate(input: string): string {
  return input.replace(CAPITAL_PATTERN, toHyphenLowerButLeading);
}

/**
 * Hyphenates a camel-cased CSS property key.
 *
 * Applicable to the names of `HTMLElement.style` properties, including vendor-specific ones.
 *
 * Prepends hyphen to leading capital letters, e.g. to vendor-specific prefixes. Replaces `ms-` prefix with `-ms-`
 * one.
 *
 * Caches hyphenated names for the sake of speed.
 *
 * @param name - Camel-cased CSS property name to hyphenate.
 *
 * @returns Hyphenated CSS property name.
 */
export function hyphenateCSS(name: string): string {
  const found = hyphenateCSS$cache.get(name);

  if (found) {
    return found;
  }

  let hyphenated = name.replace(CAPITAL_PATTERN, toHyphenLower);

  if (hyphenated.startsWith('ms-')) {
    hyphenated = '-' + hyphenated;
  }

  hyphenateCSS$cache.set(name, hyphenated);

  return hyphenated;
}

const CAPITAL_PATTERN = /[A-Z]+/g;

function toHyphenLowerButLeading(letters: string, offset: number, str: string): string {
  const lowerCase = letters.toLowerCase();

  if (lowerCase.length > 1 && offset + lowerCase.length < str.length) {
    // More than one subsequent capital letters, unless at the end of the string.
    return offset
      ? `-${lowerCase.slice(0, -1)}-${lowerCase.slice(-1)}`
      : `${lowerCase.slice(0, -1)}-${lowerCase.slice(-1)}`;
  }

  return offset ? `-${lowerCase}` : lowerCase;
}

function toHyphenLower(letters: string, offset: number, str: string): string {
  const lowerCase = letters.toLowerCase();

  if (lowerCase.length > 1 && offset + lowerCase.length < str.length) {
    // More than one subsequent capital letters, unless at the end of the string.
    return `-${lowerCase.slice(0, -1)}-${lowerCase.slice(-1)}`;
  }

  return `-${lowerCase}`;
}

const hyphenateCSS$cache = /*#__PURE__*/ new Map<string, string>();
