/**
 * Select MIME type.
 */
export enum MIMEType {
  /**
   * `text/css`
   */
  CSS = 'text/css',

  /**
   * `multipart/form-data`.
   */
  FormData = 'multipart/form-data',

  /**
   * `application/x-www-form-urlencoded`
   */
  FormURLEncoded = 'application/x-www-form-urlencoded',

  /**
   * `text/html`
   */
  HTML = 'text/html',

  /**
   * `text/javascript`
   */
  JavaScript = 'text/javascript',

  /**
   * `application/json`
   */
  JSON = 'application/json',

  /**
   * `text/json`. The correct JSON MIME is {@link MIMEType.JSON application/json}
   */
  TextJSON = 'text/json',

  /**
   * `application/octet-stream`
   */
  OctetStream = 'application/octet-stream',

  /**
   * `image/svg+xml`
   */
  SVG = 'image/svg+xml',

  /**
   * `text/plain`
   */
  Text = 'text/plain',

  /**
   * `application/xhtml+xml`
   */
  XHTML = 'application/xhtml+xml',

  /**
   * `application/xml` - if _not_ readable from casual users ([RFC 3023](https://tools.ietf.org/html/rfc3023#section-3),
   * section 3)
   */
  XML = 'application/xml',

  /**
   * `text/xml` - if readable from casual users ([RFC 3023](https://tools.ietf.org/html/rfc3023#section-3),
   * section 3)
   */
  TextXML = 'text/xml',
}
