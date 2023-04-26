/**
 * Replaces XML-unsafe characters with corresponding [predefined XML entities].
 *
 * Uses the shortest possible entities representation. I.e. `&#34;` instead of `&quot;`, and `&#39;' instead of
 * `&apos;`.
 *
 * [predefined XML entities]: https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Predefined_entities_in_XML.
 *
 * @param text - A text to escape.
 *
 * @returns XML-safe text.
 */
export function escapeXML(text: string): string {
  return text.replace(/[&<>'"]/g, escapeXMLEntity);
}

/**
 * An alias of {@link escapeXML}.
 */
export { escapeXML as escapeHTML };

function escapeXMLEntity(char: string): string {
  return XML_ESCAPE_MAP[char];
}

const XML_ESCAPE_MAP: Readonly<Record<string, string>> = {
  '"': '&#34;',
  '&': '&amp;',
  "'": '&#39;',
  '<': '&lt;',
  '>': '&gt;',
};
