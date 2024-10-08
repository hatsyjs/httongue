# Hypertext Tongue

[![NPM][npm-image]][npm-url]
[![Build Status][build-status-img]][build-status-link]
[![Code Quality][quality-img]][quality-link]
[![Coverage][coverage-img]][coverage-link]
[![GitHub Project][github-image]][github-url]
[![API Documentation][api-docs-image]][API documentation]

Hypertext and other web-related codecs.

[npm-image]: https://img.shields.io/npm/v/httongue.svg?logo=npm
[npm-url]: https://www.npmjs.com/package/httongue
[build-status-img]: https://github.com/hatsyjs/httongue/workflows/Build/badge.svg
[build-status-link]: https://github.com/hatsyjs/httongue/actions?query=workflow%3ABuild
[quality-img]: https://app.codacy.com/project/badge/Grade/67c2c4c63f1342569d693d27288749bf
[quality-link]: https://app.codacy.com/gh/hatsyjs/httongue/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade
[coverage-img]: https://app.codacy.com/project/badge/Coverage/67c2c4c63f1342569d693d27288749bf
[coverage-link]: https://app.codacy.com/gh/hatsyjs/httongue/dashboard?utm_source=gh&utm_medium=referral&utm_content=hatsyjs/httongue&utm_campaign=Badge_Coverage
[github-image]: https://img.shields.io/static/v1?logo=github&label=GitHub&message=project&color=informational
[github-url]: https://github.com/hatsyjs/httongue
[api-docs-image]: https://img.shields.io/static/v1?logo=typescript&label=API&message=docs&color=informational
[API documentation]: https://hatsyjs.github.io/httongue/

## HTML and XML

- [`escapeXML(string): string`][escapeXML] - Replaces XML-unsafe characters with corresponding
  [predefined XML entities].

- [`escapeHTML(string): string`][escapeHTML] is an alias of [escapeXML].

[escapeHTML]: https://hatsyjs.github.io/httongue/modules.html#escapeHTML
[escapeXML]: https://hatsyjs.github.io/httongue/functions/escapeXML.html
[predefined XML entities]: https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Predefined_entities_in_XML

## CSS

- [`escapeCSS(string): string`][escapeCSS] - Escapes CSS identifier accordingly to the rules defined for [CSS.escape()]
  utility method.

- [`escapeCSSVal(string): string`][escapeCSSVal] - Escapes CSS value to be included into CSS string.

- [`hyphenateCSS(string): string`][hyphenateCSS] - Hyphenates camel-cased CSS property name.

  Handles `ms` vendor prefix and caches the results.

[escapeCSS]: https://hatsyjs.github.io/httongue/functions/escapeCSS.html
[escapeCSSVal]: https://hatsyjs.github.io/httongue/functions/escapeCSSVal.html
[hyphenateCSS]: https://hatsyjs.github.io/httongue/functions/hyphenateCSS.html
[CSS.escape()]: https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape

## JavaScript

- [`escapeJsString(string): string`][escapeJsString] - Escapes a string to be included into JavaScript string literal.

  Handles all kinds of quotes (`'`, `"`, and `\``) and special chars. Converts non-ASCII chars to corresponding
  Unicode escapes.

- [`jsPropertyAccessor(string, quote?): string`][jsPropertyAccessor] - Creates JavaScript property accessor expression.

  If accessed property `key` is valid JavaScript identifier, then creates a `.${key}` accessor. Otherwise, creates an
  accessor like `['${key}']` with `key` properly quoted.

- [`jsStringLiteral(string, quote?): string`][jsStringLiteral] - Creates JavaScript string literal.

  Encloses the string into quotes and properly escapes it.

- [`quoteJsKey(string, quote?): string`][quoteJsKey] - Conditionally quotes JavaScript key.

  If the given `key` is valid JavaScript identifier, then leaves it as is. Otherwise, encloses it into quotes and
  properly escapes if necessary.

[escapeJsString]: https://hatsyjs.github.io/httongue/functions/escapeJsString.html
[jsPropertyAccessor]: https://hatsyjs.github.io/httongue/functions/jsPropertyAccessor.html
[jsStringLiteral]: https://hatsyjs.github.io/httongue/functions/jsStringLiteral.html
[quoteJsKey]: https://hatsyjs.github.io/httongue/functions/quoteJsKey.html

## URI

- [`decodeURISearchPart(string): string`][decodeURISearchPart] - Decodes part of URI search string, i.e. either search
  parameter name or value.

  In contrast to standard [decodeURIComponent] function, this one treats _plus signs_ (`"+" (U+002B)`) as spaces.
  I.e. decodes the same way as [URLSearchParams] do.

- [`encodeURIPart(string | number | boolean): string`][encodeURIPart] - Encodes part of URI.

  In contrast to standard [encodeURIComponent] function, this one follows [RFC3869] requirements and percent-encodes
  all [URI reserved characters].

  Standard [decodeURIComponent] function can be used to decode URI.

- [`encodeURISearchPart(string | number | boolean): string`][encodeURISearchPart] - Encodes part of URI search string,
  i.e. either search parameter name or value.

  In contrast to standard [encodeURIComponent] function, this one encodes spaces as _plus signs_ `"+" (U+002B)`.
  In addition, percent-encodes all [URI reserved characters] according to [RFC3869].

[decodeURISearchPart]: https://hatsyjs.github.io/httongue/functions/decodeURISearchPart.html
[decodeURIComponent]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent
[encodeURIComponent]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
[encodeURIPart]: https://hatsyjs.github.io/httongue/functions/encodeURIPart.html
[encodeURISearchPart]: https://hatsyjs.github.io/httongue/functions/encodeURISearchPart.html
[URI reserved characters]: https://www.rfc-editor.org/rfc/rfc3986#section-2.2
[RFC3869]: https://www.rfc-editor.org/rfc/rfc3986
[URLSearchParams]: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams

## Other

- [`capitalize(string): string`][capitalize] - Capitalizes input string.

  Converts the first Unicode code point of input string to upper case.

- [`decapitalize(string): string`][decapitalize] - De-capitalizes input string.

  Converts the first Unicode code point of input string to lower case.

- [`hyphenate(string): string`][hyphenate] - Hyphenates a camel-cased string.

[capitalize]: https://hatsyjs.github.io/httongue/functions/capitalize.html
[decapitalize]: https://hatsyjs.github.io/httongue/functions/decapitalize.html
[hyphenate]: https://hatsyjs.github.io/httongue/functions/hyphenate.html
