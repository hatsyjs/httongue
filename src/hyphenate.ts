/**
 * Hyphenates a camel-cased name.
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
 *   Hyphens remain in place.
 *
 * @param name - Camel-cased name to hyphenate.
 *
 * @returns Hyphenated name.
 */
export function hyphenateName(name: string): string {
  return name.replace(UPPERCASE_PATTERN, toHyphenLower);
}

/**
 * De-capitalizes a camel-cased name and hyphenates it.
 *
 * Calls {@link hyphenateName}, then removes the leading hyphen.
 *
 * Thus, e.g. `MozTransition` would be converted to `moz-transition` rather to `-moz-transition`.
 *
 * @param name - Camel-cased name to hyphenate.
 *
 * @returns Hyphenated name.
 */
export function hyphenateDecapName(name: string): string {
  const hyphenated = hyphenateName(name);

  return hyphenated.startsWith('-') ? hyphenated.substr(1) : hyphenated;
}

/**
 * Hyphenates a camel-cased CSS property key.
 *
 * Applicable to the names of `HTMLElement.style` properties, including vendor-specific ones.
 *
 * Calls {@link hyphenateName}, then replaces `ms-` prefix with `-ms-` one. Other vendor-specific prefixes are
 * capitalized, so the hyphen prefix is added already.
 *
 * Caches hyphenated names for the sake of speed.
 *
 * @param name - Camel-cased CSS property name to hyphenate.
 *
 * @returns Hyphenated CSS property name.
 */
export function hyphenateCSSName(name: string): string {
  const found = hyphenateCSSName$cache.get(name);

  if (found) {
    return found;
  }

  let hyphenated = hyphenateName(name);

  if (hyphenated.startsWith('ms-')) {
    hyphenated = '-' + hyphenated;
  }

  hyphenateCSSName$cache.set(name, hyphenated);

  return hyphenated;
}

const UPPERCASE_PATTERN = /[A-Z]+/g;

function toHyphenLower(letters: string, offset: number, str: string): string {
  const lowerCase = letters.toLowerCase();

  if (lowerCase.length > 1 && offset + lowerCase.length < str.length) {
    // More than one subsequent upper-case letters, unless at the end of the string.
    return `-${lowerCase.slice(0, -1)}-${lowerCase.slice(-1)}`;
  }

  return '-' + lowerCase;
}

const hyphenateCSSName$cache = /*#__PURE__*/ new Map<string, string>();
