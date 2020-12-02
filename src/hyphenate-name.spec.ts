import { hyphenateName } from './hyphenate-name';

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
  it('caches the result', () => {
    expect(hyphenateName('color')).toBe('color');
    expect(hyphenateName('color')).toBe('color');
  });
});
