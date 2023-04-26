/**
 * Escapes CSS value to be included into CSS string.
 *
 * Escapes accordingly to [serialize a string] algorithm.
 *
 * [serialize a string]: https://drafts.csswg.org/cssom/#serialize-a-string
 *
 * @param text - A text to escape.
 *
 * @returns A string safe to be included into CSS value, e.g. within CSS string.
 */
export function escapeCSSVal(text: string): string {
  let out = '';
  const len = text.length;

  for (let i = 0; i < len; ++i) {
    const c = text.charCodeAt(i);

    if (c < 0x20 || c === 0x7f) {
      if (c) {
        // If the character is in the range [\1-\1f] (U+0001 to U+001F),
        // the character escaped as code point.
        out += `\\${c.toString(16)} `;
      } else {
        // If the character is NULL (U+0000), then the REPLACEMENT CHARACTER (U+FFFD).;
        out += '\uFFFD';
      }
    } else if (c === 0x22 || c === 0x5c) {
      // If the character is '"' (U+0022) or "\" (U+005C),
      // the escaped character.
      out += `\\${text[i]}`;
    } else {
      // Otherwise, the character itself.
      out += text[i];
    }
  }

  return out;
}
