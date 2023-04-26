# Hypertext Tongue

[![NPM][npm-image]][npm-url]
[![Build Status][build-status-img]][build-status-link]
[![Code Quality][quality-img]][quality-link]
[![Coverage][coverage-img]][coverage-link]
[![GitHub Project][github-image]][github-url]
[![API Documentation][api-docs-image]][API documentation]

Hypertext and other web-related codecs.

- [`decodeURLComponent(string): string`][decodeURLComponent] - Decodes URL component.

  In contrast to standard [decodeURIComponent] function this one decodes `+` signs as spaces.

- [`escapeCSS(string): string`][escapeCSS] - Escapes CSS identifier accordingly to the rules defined for [CSS.escape]
  utility method.

- [`escapeCSSVal(string): string`][escapeCSSVal] - Escapes CSS value to be included into CSS string.

- [`escapeXML(string): string`][escapeXML] - Replaces XML-unsafe characters with corresponding
  [predefined XML entities].

  `escapeHTML(string): string` is an alias of [escapeXML].

- [`hyphenateName(string): string`][hyphenateName] - Hyphenates a camel-cased name

  **May add a leading hyphen** if the first letter of the name is in upper case.

  Has variants:

  - [`hyphenateCSSName(string): string`][hyphenateCSSName] - Hyphenates camel-cased CSS property name.

    Handles `ms` vendor prefix and caches the results.

  - [`hyphenateDecapName(string): string`][hyphenateDecapName] - De-capitalizes a camel-cased name and hyphenates it.

    No leading hyphen added.

[npm-image]: https://img.shields.io/npm/v/httongue.svg?logo=npm
[npm-url]: https://www.npmjs.com/package/httongue
[build-status-img]: https://github.com/hatsyjs/httongue/workflows/Build/badge.svg
[build-status-link]: https://github.com/hatsyjs/httongue/actions?query=workflow%3ABuild
[quality-img]: https://app.codacy.com/project/badge/Grade/67c2c4c63f1342569d693d27288749bf
[quality-link]: https://app.codacy.com/gh/hatsyjs/httongue/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade
[coverage-img]: https://app.codacy.com/project/badge/Coverage/67c2c4c63f1342569d693d27288749bf
[coverage-link]: https://www.codacy.com/gh/hatsyjs/httongue/dashboard?utm_source=github.com&utm_medium=referral&utm_content=hatsyjs/httongue&utm_campaign=Badge_Coverage
[github-image]: https://img.shields.io/static/v1?logo=github&label=GitHub&message=project&color=informational
[github-url]: https://github.com/hatsyjs/httongue
[api-docs-image]: https://img.shields.io/static/v1?logo=typescript&label=API&message=docs&color=informational
[API documentation]: https://hatsyjs.github.io/httongue/
[decodeURLComponent]: https://hatsyjs.github.io/httongue/functions/decodeURLComponent.html
[escapeCSS]: https://hatsyjs.github.io/httongue/functions/escapeCSS.html
[escapeCSSVal]: https://hatsyjs.github.io/httongue/functions/escapeCSSVal.html
[escapeXML]: https://hatsyjs.github.io/httongue/functions/escapeXML.html
[hyphenateCSSName]: https://hatsyjs.github.io/httongue/functions/hyphenateCSSName.html
[hyphenateDecapName]: https://hatsyjs.github.io/httongue/functions/hyphenateDecapName.html
[hyphenateName]: https://hatsyjs.github.io/httongue/functions/hyphenateName.html
[decodeURIComponent]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent
[CSS.escape]: https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape
[predefined XML entities]: https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Predefined_entities_in_XML
