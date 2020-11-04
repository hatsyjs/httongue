import { escapeHTML, escapeXML } from './escape-xml';

describe('escapeXML', () => {
  it('escapes HTML-unsafe symbols', () => {
    expect(escapeXML('<b&b>')).toEqual('&lt;b&amp;b&gt;');
  });
  it('escapes subsequent XML-unsafe symbols', () => {
    expect(escapeXML('<<<=>>>')).toEqual('&lt;&lt;&lt;=&gt;&gt;&gt;');
  });
  it('escapes double quotes', () => {
    expect(escapeHTML('"test"')).toEqual('&#34;test&#34;');
  });
  it('escapes single quotes', () => {
    expect(escapeHTML('\'test\'')).toEqual('&#39;test&#39;');
  });
});
