import { describe, expect, it } from '@jest/globals';
import { decodeURISearchPart, encodeURIPart, encodeURISearchPart } from './uri.js';

const URI_RESERVED_CHARS = ":/?#[]@!$&'()*+,;=".split('');

describe('encodeURIPart', () => {
  it.each(URI_RESERVED_CHARS.map(char => [char]))('percent-encodes reserved char "%s"', char => {
    expect(encodeURIPart(char)).toBe(
      '%' + char.charCodeAt(0).toString(16).padStart(2, '0').toUpperCase(),
    );
  });
  it('encodes URI part', () => {
    expect(encodeURIPart('Hello, World!')).toBe('Hello%2C%20World%21');
  });
});

describe('encodeURISearchPart', () => {
  it.each(URI_RESERVED_CHARS.map(char => [char]))('percent-encodes reserved char "%s"', char => {
    expect(encodeURISearchPart(char)).toBe(
      '%' + char.charCodeAt(0).toString(16).padStart(2, '0').toUpperCase(),
    );
  });
  it('encodes space as plus', () => {
    expect(encodeURISearchPart('Hello, World!')).toBe('Hello%2C+World%21');
  });
});

describe('decodeURISearchPart', () => {
  it('decodes `+` signs as spaces', () => {
    expect(decodeURISearchPart('abc+%2b+def')).toBe('abc + def');
  });
});
