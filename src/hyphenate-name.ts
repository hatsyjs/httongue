/**
 * @packageDocumentation
 * @module @frontmeans/httongue
 */
import { hyphenateName$cache, toHyphenLower, uppercasePattern } from './hyphenate-name.impl';

/**
 * Hyphenates a camel-cased property name.
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
 * @param name - Camel-cased CSS property name.
 *
 * @returns Hyphenated CSS property name.
 */
export function hyphenateName(name: string): string {

  const found = hyphenateName$cache.get(name);

  if (found) {
    return found;
  }

  const hyphenatedName = name.replace(uppercasePattern, toHyphenLower);

  hyphenateName$cache.set(name, hyphenatedName);

  return hyphenatedName;
}
