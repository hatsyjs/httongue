import { describe, expect, it } from '@jest/globals';
import { jsPropertyAccessor, jsStringLiteral, quoteJsKey } from './js.js';

describe('jsStringLiteral', () => {
  it('escapes specials', () => {
    for (let i = 0; i < 0x20; ++i) {
      expect(unquote(String.fromCharCode(i)).charCodeAt(0)).toBe(i);
    }
  });
  it('escapes quotes', () => {
    expect(jsStringLiteral("'")).toBe("'\\''");
    expect(jsStringLiteral('"')).toBe("'\\\"'");
    expect(jsStringLiteral('`')).toBe("'\\`'");
  });
  it('escapes backslash', () => {
    expect(jsStringLiteral('\\')).toBe("'\\\\'");
  });
  it('does not escape ASCII chars', () => {
    expect(jsStringLiteral('Hello, World!')).toBe("'Hello, World!'");
    expect(jsStringLiteral('Hello, World!', '"')).toBe('"Hello, World!"');
    expect(jsStringLiteral('Hello, World!', '`')).toBe('`Hello, World!`');
  });
  it('escapes Unicode chars', () => {
    expect(jsStringLiteral('\u042a', '"')).toBe('"\\u042a"');
  });

  function unquote(input: string): string {
    const str = jsStringLiteral(input);
    // eslint-disable-next-line @typescript-eslint/no-implied-eval
    const fn = new Function(`return ${str};`);

    return fn();
  }
});

describe('quoteJsKey', () => {
  it('quotes numeric literals', () => {
    expect(quoteJsKey('0')).toBe("'0'");
    expect(quoteJsKey('3d')).toBe("'3d'");
  });
  it('quotes non-id chars', () => {
    expect(quoteJsKey('!')).toBe("'!'");
    expect(quoteJsKey('\0')).toBe("'\\0'");
    expect(quoteJsKey('a  b')).toBe("'a  b'");
  });
  it('does not quote valid id chars', () => {
    expect(quoteJsKey('$abc$123')).toBe('$abc$123');
    expect(quoteJsKey('_abc_123')).toBe('_abc_123');
  });
});

describe('jsPropertyAccessor', () => {
  it('quotes numeric literals', () => {
    expect(jsPropertyAccessor('0')).toBe("['0']");
    expect(jsPropertyAccessor('3d')).toBe("['3d']");
  });
  it('quotes non-id chars', () => {
    expect(jsPropertyAccessor('!')).toBe("['!']");
    expect(jsPropertyAccessor('\0')).toBe("['\\0']");
    expect(jsPropertyAccessor('a  b')).toBe("['a  b']");
  });
  it('does not quote valid id chars', () => {
    expect(jsPropertyAccessor('$abc$123')).toBe('.$abc$123');
    expect(jsPropertyAccessor('_abc_123')).toBe('._abc_123');
  });
});
