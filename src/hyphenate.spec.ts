import { hyphenateCSSName, hyphenateDecapName, hyphenateName } from './hyphenate';

describe('hyphenateName', () => {
  it('converts upper-case letters to lower case and hyphens them', () => {
    expect(hyphenateName('backgroundColor')).toBe('background-color');
    expect(hyphenateName('MozTransition')).toBe('-moz-transition');
  });
  it('converts subsequent upper-case letters to lower case and hyphens the first and the last ones', () => {
    expect(hyphenateName('MSTransition')).toBe('-ms-transition');
  });
  it('converts subsequent upper-case letters in the end to lower case and hyphens the first one', () => {
    expect(hyphenateName('someURL')).toBe('some-url');
  });
});

describe('hyphenateDecapName', () => {
  it('removes the leading hyphen', () => {
    expect(hyphenateDecapName('MozTransition')).toBe('moz-transition');
  });
  it('removes leading hyphen from all-uppercase name', () => {
    expect(hyphenateDecapName('URL')).toBe('url');
  });
  it('does not affect lower-case leading letters', () => {
    expect(hyphenateDecapName('msTransition')).toBe('ms-transition');
  });
});

describe('hyphenateCSSName', () => {
  it('handles `ms` prefix', () => {
    expect(hyphenateCSSName('msTransition')).toBe('-ms-transition');
  });
  it('caches the result', () => {
    expect(hyphenateCSSName('color')).toBe('color');
    expect(hyphenateCSSName('color')).toBe('color');
  });
});
