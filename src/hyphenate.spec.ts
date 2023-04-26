import { describe, expect, it } from '@jest/globals';
import { hyphenate, hyphenateCSS } from './hyphenate.js';

describe('hyphenate', () => {
  it('removes the leading hyphen', () => {
    expect(hyphenate('MozTransition')).toBe('moz-transition');
  });
  it('converts subsequent upper-case letters to lower case and hyphens the first and the last ones', () => {
    expect(hyphenate('MOZTransition')).toBe('moz-transition');
    expect(hyphenate('encodeURIComponent')).toBe('encode-uri-component');
    expect(hyphenate('encodeURI')).toBe('encode-uri');
  });
  it('removes leading hyphen from all-uppercase name', () => {
    expect(hyphenate('URL')).toBe('url');
  });
  it('does not affect lower-case leading letters', () => {
    expect(hyphenate('msTransition')).toBe('ms-transition');
  });
});

describe('hyphenateCSS', () => {
  it('converts upper-case letters to lower case and hyphens them', () => {
    expect(hyphenateCSS('backgroundColor')).toBe('background-color');
    expect(hyphenateCSS('MozTransition')).toBe('-moz-transition');
  });
  it('converts subsequent upper-case letters to lower case and hyphens the first and the last ones', () => {
    expect(hyphenateCSS('MOZTransition')).toBe('-moz-transition');
  });
  it('converts subsequent upper-case letters in the end to lower case and hyphens the first one', () => {
    expect(hyphenateCSS('someURL')).toBe('some-url');
  });
  it('handles `ms` prefix', () => {
    expect(hyphenateCSS('msTransition')).toBe('-ms-transition');
  });
  it('caches the result', () => {
    expect(hyphenateCSS('color')).toBe('color');
    expect(hyphenateCSS('color')).toBe('color');
  });
});
