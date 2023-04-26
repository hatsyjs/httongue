/**
 * Encodes part of URI.
 *
 * In contrast to standard [encodeURIComponent] function, this one follows [RFC3869] requirements and percent-encodes
 * all [URI reserved characters].
 *
 * Standard [decodeURIComponent] function can be used to decode URI.
 *
 * [encodeURIComponent]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
 * [decodeURIComponent]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent
 * [URI reserved characters]: https://www.rfc-editor.org/rfc/rfc3986#section-2.2
 * [RFC3869]: https://www.rfc-editor.org/rfc/rfc3986
 *
 * @param part - Part of URI to encode.
 *
 * @returns Encoded URI part.
 */
export function encodeURIPart(part: string | number | boolean): string {
  return encodeURIComponent(part).replace(URI_RESERVED_PATTERN, escapeURIPart);
}

function escapeURIPart(char: string): string {
  return URI_ESCAPE_MAP[char];
}

const URI_RESERVED_PATTERN = /[!'()*]/g;
const URI_ESCAPE_MAP: { [reserved: string]: string } = {
  '!': '%21',
  "'": '%27',
  '(': '%28',
  ')': '%29',
  '*': '%2A',
};

/**
 * Decodes part of URI search string, i.e. either search parameter name or value.
 *
 * In contrast to standard [decodeURIComponent] function, this one treats _plus signs_ (`"+" (U+002B)`) as spaces.
 * I.e. decodes the same way as [URLSearchParams] do.
 *
 * [decodeURIComponent]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent
 * [URLSearchParams]: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams
 *
 * @param encodedURI - Part of URI search string to decode.
 *
 * @returns Decoded part of URI search string.
 */
export function decodeURISearchPart(encodedURI: string): string {
  return decodeURIComponent(encodedURI.replaceAll('+', ' '));
}

/**
 * Encodes part of URI search string, i.e. either search parameter name or value.
 *
 * In contrast to standard [encodeURIComponent] function, this one encodes spaces as _plus signs_ `"+" (U+002B)`.
 * In addition, percent-encodes all [URI reserved characters] according to [RFC3869].
 *
 * [encodeURIComponent]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
 * [URI reserved characters]: https://www.rfc-editor.org/rfc/rfc3986#section-2.2
 * [RFC3869]: https://www.rfc-editor.org/rfc/rfc3986
 *
 * @param part - Part of URI search string to encode.
 *
 * @returns Encoded part of URI search string.
 */
export function encodeURISearchPart(part: string | number | boolean): string {
  return encodeURIComponent(part).replace(URI_SEARCH_RESERVED_PATTERN, escapeURISearchPart);
}

function escapeURISearchPart(char: string): string {
  return URI_SEARCH_ESCAPE_MAP[char];
}

const URI_SEARCH_RESERVED_PATTERN = /[!'()*]|%20/g;
const URI_SEARCH_ESCAPE_MAP: { [reserved: string]: string } = {
  '%20': '+',
  '!': '%21',
  "'": '%27',
  '(': '%28',
  ')': '%29',
  '*': '%2A',
};
