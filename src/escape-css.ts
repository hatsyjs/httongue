/**
 * @packageDocumentation
 * @module @hatsy/hten
 */
/**
 * Escapes CSS identifier accordingly to rules defined for [CSS.escape()](https://drafts.csswg.org/cssom/#the-css.escape%28%29-method) utility method.
 *
 * Can be applied to CSS values as well, although it escapes characters that don't strictly need to be escaped.
 * A {@link escapeCSSVal} is a better alternative for that.
 *
 * @param text  CSS text to escape.
 *
 * @returns CSS text safe to be used as identifier, e.g. withing CSS selector.
 */
export function escapeCSS(text: string): string {

  const len = text.length;
  const first = text.charCodeAt(0);
  let out = '';
  let i = 0;

  if (first === 0x2d) {
    // If the first character is a "-" (U+002D)

    const second = text.charCodeAt(1);

    // ... and the second character is in the range [0-9] (U+0030 to U+0039).
    if (second > 0x2f && second < 0x3a) {
      // then '-' followed by the character escaped as code point.
      out += `-\\${second.toString(16)} `;
      i = 2;
    } else {
      out = '-';
      i = 1;
    }

    if (len === 1) {
      // ... and there is no second character, then the escaped character.
      return '\\-';
    }
  } else if (first > 0x2f && first < 0x3a) {
    // If the first character is in the range [0-9] (U+0030 to U+0039),
    // then the character escaped as code point.
    out += `\\${first.toString(16)} `;
    i = 1;
  }

  for (; i < len; ++i) {

    const c = text.charCodeAt(i);

    if (
        // Is in range [a-z] (U+0061 to U+007A),
        (c > 0x60 && c < 0x7b)
        // or is "-" (U+002D),
        || c === 0x2d
        // or is "_" (U+005F)
        || c === 0x5f
        // or is in range [0-9] (U+0030 to U+0039),
        || (c > 0x2f && c < 0x3a)
        // or is in range [A-Z] (U+0041 to U+005A)
        || (c > 0x40 && c < 0x5b)
    ) {
      // then the character itself.
      out += text[i];
    } else if (c > 0x7e) {
      out += c === 0x7f
          // If the character is U+007F
          // then the character escaped as code point.
          ? `\\${c.toString(16)} `
          // If the character is greater than or equal to U+0080,
          // then the character itself
          : text[i];
    } else if (c < 0x20) {
      out += c
          // If the character is in the range [\1-\1f] (U+0001 to U+001F)
          // then the character escaped as code point.
          ? `\\${c.toString(16)} `
          // If the character is NULL (U+0000)
          // then the REPLACEMENT CHARACTER (U+FFFD).
          : '\uFFFD';
    } else {
      // Otherwise, the escaped character.
      out += `\\${text[i]}`;
    }
  }

  return out;
}
