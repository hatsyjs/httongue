Hypertext Tongue
================

[![NPM][npm-image]][npm-url]
[![Build Status][build-status-img]][build-status-link]
[![codecov][codecov-image]][codecov-url]
[![GitHub Project][github-image]][github-url]
[![API Documentation][api-docs-image]][API documentation]

Contains Hypertext-related encoding and decoding functions:

- [`decodeURLComponent(string): string`][decodeURLComponent] - Decodes URL component.

  In contrast to standard [decodeURIComponent] function this one decodes `+` signs as spaces.

- [`escapeCSS(string): string`][escapeCSS] - Escapes CSS identifier accordingly to the rules defined for [CSS.escape]
  utility method.

- [`escapeCSSVal(string): string`][escapeCSSVal] - Escapes CSS value to be included into CSS string.

- [`escapeXML(string): string`][escapeXML] - Replaces XML-unsafe characters with corresponding
  [predefined XML entities].

  `escapeHTML(string): string` is an alias of [escapeXML].

- [`hyphenateName(string): string`][hyphenateName] - Hyphenates camel-cased property names.

[npm-image]: https://img.shields.io/npm/v/@frontmeans/httongue.svg?logo=npm
[npm-url]: https://www.npmjs.com/package/@frontmeans/httongue
[build-status-img]: https://github.com/frontmeans/httongue/workflows/Build/badge.svg
[build-status-link]: https://github.com/frontmeans/httongue/actions?query=workflow%3ABuild
[codecov-image]: https://codecov.io/gh/frontmeans/httongue/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/frontmeans/httongue
[github-image]: https://img.shields.io/static/v1?logo=github&label=GitHub&message=project&color=informational
[github-url]: https://github.com/frontmeans/httongue
[api-docs-image]: https://img.shields.io/static/v1?logo=typescript&label=API&message=docs&color=informational
[API documentation]: https://frontmeans.github.io/httongue/ 

[decodeURLComponent]: https://frontmeans.github.io/httongue/globals.html#decodeURLComponent
[escapeCSS]: https://frontmeans.github.io/httongue/globals.html#escapeCSS
[escapeCSSVal]: https://frontmeans.github.io/httongue/globals.html#escapeCSSVal
[escapeXML]: https://frontmeans.github.io/httongue/globals.html#escapeXML
[hyphenateName]: https://frontmeans.github.io/httongue/globals.html#hyphenateName

[decodeURIComponent]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent
[CSS.escape]: https://drafts.csswg.org/cssom/#the-css.escape%28%29-method
[predefined XML entities]: https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Predefined_entities_in_XML
