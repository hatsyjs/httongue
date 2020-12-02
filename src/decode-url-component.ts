/**
 * @packageDocumentation
 * @module @frontmeans/httongue
 */
/**
 * Decodes URL component.
 *
 * In contrast to standard [decodeURIComponent] function this one decodes `+` signs as spaces.
 *
 * [decodeURIComponent]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent
 */
export function decodeURLComponent(url: string): string {
  return decodeURIComponent(url.replace(/\+/g, ' '));
}
