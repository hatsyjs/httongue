import { describe, expect, it } from '@jest/globals';
import { escapeCSS } from './escape-css';

describe('escapeCSS', () => {
  describe('If the character is NULL (U+0000)', () => {
    it('the REPLACEMENT CHARACTER (U+FFFD)', () => {
      expect(escapeCSS('\0')).toBe('\uFFFD');
      expect(escapeCSS('abc\0')).toBe('abc\uFFFD');
    });
  });
  describe('If the character is in the range [\\1-\\1f] (U+0001 to U+001F) or is U+007F', () => {
    it('the character escaped as code point', () => {
      expect(escapeCSS('\u0001abc\u007f')).toBe('\\1 abc\\7f ');
      expect(escapeCSS('\u001fabc\u007f')).toBe('\\1f abc\\7f ');
    });
  });
  describe('If the character is the first character and is in the range [0-9] (U+0030 to U+0039)', () => {
    it('the character escaped as code point', () => {
      expect(escapeCSS('0abc1')).toBe('\\30 abc1');
      expect(escapeCSS('9abc1')).toBe('\\39 abc1');
    });
  });
  describe('If the character is the second character and is in the range [0-9] (U+0030 to U+0039)', () => {
    it('the character escaped as code point', () => {
      expect(escapeCSS('-000')).toBe('-\\30 00');
      expect(escapeCSS('-999')).toBe('-\\39 99');
    });
  });
  describe('If the character is the first character and is a "-" (U+002D), and there is no second character', () => {
    it('the escaped character', () => {
      expect(escapeCSS('-')).toBe('\\-');
    });
  });
  describe('If the character is greater than or equal to U+0080', () => {
    it('the character itself', () => {
      expect(escapeCSS('\u0080')).toBe('\u0080');
      expect(escapeCSS('\u0080abc')).toBe('\u0080abc');
      expect(escapeCSS('abc\u0080')).toBe('abc\u0080');

      expect(escapeCSS('\u0081')).toBe('\u0081');
      expect(escapeCSS('\u0081abc')).toBe('\u0081abc');
      expect(escapeCSS('abc\u0081')).toBe('abc\u0081');
    });
  });
  describe('If the character is "-" (U+002D) or "_" (U+005F)', () => {
    it('the character itself', () => {
      expect(escapeCSS('-abc')).toBe('-abc');
      expect(escapeCSS('-ABC12')).toBe('-ABC12');
      expect(escapeCSS('abc-')).toBe('abc-');
      expect(escapeCSS('abc_')).toBe('abc_');
      expect(escapeCSS('_abc')).toBe('_abc');
      expect(escapeCSS('_123')).toBe('_123');
      expect(escapeCSS('_')).toBe('_');
    });
  });
  describe('If the character is punctuation', () => {
    it('the escaped character', () => {
      expect(escapeCSS(' ')).toBe('\\ ');
      expect(escapeCSS('!')).toBe('\\!');
      expect(escapeCSS('"')).toBe('\\"');
      expect(escapeCSS('#')).toBe('\\#');
      expect(escapeCSS('$')).toBe('\\$');
      expect(escapeCSS('%')).toBe('\\%');
      expect(escapeCSS('&')).toBe('\\&');
      expect(escapeCSS('\'')).toBe('\\\'');
      expect(escapeCSS('(')).toBe('\\(');
      expect(escapeCSS(')')).toBe('\\)');
      expect(escapeCSS('*')).toBe('\\*');
      expect(escapeCSS('+')).toBe('\\+');
      expect(escapeCSS(',')).toBe('\\,');
      expect(escapeCSS('.')).toBe('\\.');
      expect(escapeCSS('/')).toBe('\\/');
      expect(escapeCSS(':')).toBe('\\:');
      expect(escapeCSS('@')).toBe('\\@');
      expect(escapeCSS('[')).toBe('\\[');
      expect(escapeCSS(']')).toBe('\\]');
      expect(escapeCSS('^')).toBe('\\^');
      expect(escapeCSS('`')).toBe('\\`');
      expect(escapeCSS('{')).toBe('\\{');
      expect(escapeCSS('|')).toBe('\\|');
      expect(escapeCSS('}')).toBe('\\}');
      expect(escapeCSS('~')).toBe('\\~');
    });
  });
});
