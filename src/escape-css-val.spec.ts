import { describe, expect, it } from '@jest/globals';
import { escapeCSSVal } from './escape-css-val.js';

describe('escapeCSSVal', () => {
  describe('If the character is NULL (U+0000)', () => {
    it('the REPLACEMENT CHARACTER (U+FFFD)', () => {
      expect(escapeCSSVal('\0')).toBe('\uFFFD');
      expect(escapeCSSVal('abc\0')).toBe('abc\uFFFD');
    });
  });
  describe('If the character is in the range [\\1-\\1f] (U+0001 to U+001F) or is U+007F', () => {
    it('the character escaped as code point', () => {
      expect(escapeCSSVal('\u0001abc\u007f')).toBe('\\1 abc\\7f ');
      expect(escapeCSSVal('\u001fabc\u007f')).toBe('\\1f abc\\7f ');
    });
  });
  describe('If the character is `"` (U+0022) or `\\` (U+005C)', () => {
    it('the escaped character', () => {
      expect(escapeCSSVal('"ab\\\'c"')).toBe('\\"ab\\\\\'c\\"');
    });
  });
});
