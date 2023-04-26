import { describe, expect, it } from '@jest/globals';
import { capitalize, decapitalize } from './capitalize.js';

describe('capitalize', () => {
  it('capitalizes first letter', () => {
    expect(capitalize('cURL')).toBe('CURL');
    expect(capitalize('data')).toBe('Data');
  });
  it('capitalizes first code point', () => {
    expect(capitalize('\uD803\uDCCB\uD803\uDCCB')).toBe('\uD803\uDC8B\uD803\uDCCB');
  });
  it('leaves empty input untouched', () => {
    expect(capitalize('')).toBe('');
  });
  it('leaves first uppercase letter untouched', () => {
    expect(capitalize('Data')).toBe('Data');
    expect(capitalize('URL')).toBe('URL');
  });
  it('leaves first uppercase code point untouched', () => {
    expect(capitalize('\uD803\uDC8B\uD803\uDCCB')).toBe('\uD803\uDC8B\uD803\uDCCB');
  });
});

describe('decapitalize', () => {
  it('de-capitalizes first letter', () => {
    expect(decapitalize('CURL')).toBe('cURL');
    expect(decapitalize('Data')).toBe('data');
  });
  it('de-capitalizes first code point', () => {
    expect(decapitalize('\uD803\uDC8B\uD803\uDCCB')).toBe('\uD803\uDCCB\uD803\uDCCB');
  });
  it('leaves empty input untouched', () => {
    expect(decapitalize('')).toBe('');
  });
  it('leaves first lowercase letter untouched', () => {
    expect(decapitalize('data')).toBe('data');
    expect(decapitalize('cURL')).toBe('cURL');
  });
  it('leaves first lowercase code point untouched', () => {
    expect(decapitalize('\uD803\uDCCB\uD803\uDCCB')).toBe('\uD803\uDCCB\uD803\uDCCB');
  });
});
