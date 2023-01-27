import { describe, expect, it } from '@jest/globals';
import { escapeHTML, escapeXML } from './escape-xml.js';

describe('escapeXML', () => {
  it('escapes HTML-unsafe symbols', () => {
    expect(escapeXML('<b&b>')).toBe('&lt;b&amp;b&gt;');
  });
  it('escapes subsequent XML-unsafe symbols', () => {
    expect(escapeXML('<<<=>>>')).toBe('&lt;&lt;&lt;=&gt;&gt;&gt;');
  });
  it('escapes double quotes', () => {
    expect(escapeHTML('"test"')).toBe('&#34;test&#34;');
  });
  it('escapes single quotes', () => {
    expect(escapeHTML("'test'")).toBe('&#39;test&#39;');
  });
});
