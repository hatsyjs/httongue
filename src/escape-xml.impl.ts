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
export function replaceXMLPredef(char: string): string {
  return xmlPredef[char];
}
