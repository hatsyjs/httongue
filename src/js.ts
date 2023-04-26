/**
 * Escapes a string to be included into JavaScript string literal.
 *
 * Handles all kinds of quotes (`'`, `"`, and `\``) and special chars. Converts non-ASCII chars to corresponding
 * Unicode escapes.
 *
 * @param value - A string to escape.
 *
 * @returns Escaped string.
 */
export function escapeJsString(value: string): string {
  return value.replace(JS_STRING_ESCAPE_PATTERN, char => {
    const code = char.charCodeAt(0);

    if (code < 0x7f) {
      if (code < 0x20) {
        return code < 16 ? JS_ESCAPES[code] : `\\x${code.toString(16)}`;
      }

      return `\\${char}`;
    }

    return `\\u${code.toString(16).padStart(4, '0')}`;
  });
}

// eslint-disable-next-line no-control-regex
const JS_STRING_ESCAPE_PATTERN = /[\u0000-\u001f\\"'`\u007f-\uffff]/g;

const JS_ESCAPES = [
  '\\0',
  '\\1',
  '\\2',
  '\\3',
  '\\4',
  '\\5',
  '\\6',
  '\\7',
  '\\b',
  '\\t',
  '\\n',
  '\\v',
  '\\f',
  '\\r',
  '\\x0e',
  '\\x0f',
];

/**
 * Creates JavaScript string literal.
 *
 * Encloses the string into quotes and properly {@link escapeJsString escapes} it.
 *
 * @param value - A string contained inside literal.
 * @param quote - Quote symbol to use.
 *
 * @returns String literal.
 */
export function jsStringLiteral(value: string, quote: "'" | '"' | '`' = "'"): string {
  return `${quote}${escapeJsString(value)}${quote}`;
}

/**
 * Conditionally quotes JavaScript key.
 *
 * If the given `key` is valid JavaScript identifier, then leaves it as is. Otherwise, encloses it into quotes and
 * properly {@link escapeJsString escapes} if necessary.
 *
 * @param key - A key to quote.
 * @param quote - Quote symbol to use.
 *
 * @returns Conditionally quoted string.
 */
export function quoteJsKey(key: string, quote: "'" | '"' | '`' = "'"): string {
  return PROPERTY_KEY_PATTERN.test(key) ? key : jsStringLiteral(key, quote);
}

/**
 * Creates JavaScript property accessor expression.
 *
 * If accessed property `key` is valid JavaScript identifier, then creates a `.${key}` accessor. Otherwise, creates an
 * accessor like `['${key}']` with `key` properly {@link quoteJsKey quoted}.
 *
 * @param key - Accessed property key.
 * @param quote - Quote symbol to use.
 *
 * @returns Property accessor expression.
 */
export function jsPropertyAccessor(key: string, quote: "'" | '"' | '`' = "'"): string {
  return PROPERTY_KEY_PATTERN.test(key) ? `.${key}` : `[${quote}${escapeJsString(key)}${quote}]`;
}

const PROPERTY_KEY_PATTERN = /^[a-zA-Z_$][0-9a-zA-Z_$]*$/;
