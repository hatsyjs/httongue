/**
 * @packageDocumentation
 * @module @hatsy/hten
 */
/**
 * @internal
 */
const xmlPredef: Readonly<Record<string, string>> = {
  '"': '&#34;',
  '&': '&amp;',
  '\'': '&#39;',
  '<': '&lt;',
  '>': '&gt;',
};

/**
 * @internal
 */
function replaceXMLPredef(char: string): string {
  return xmlPredef[char];
}

/**
 * Replaces XML-unsafe characters with corresponding [predefined XML entities](https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Predefined_entities_in_XML).
 *
 * Uses the shortest possible entities representation. I.e. `&#34;` instead of `&quot;`, and `&#39;' instead of
 * `&apos;`.
 *
 * @param text  A text to escape.
 *
 * @returns XML-safe text.
 */
export function escapeXML(text: string): string {
  return text.replace(/[&<>'"]/g, replaceXMLPredef);
}

/**
 * An alias of {@link escapeXML}.
 */
export { escapeXML as escapeHTML };
