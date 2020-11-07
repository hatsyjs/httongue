import { JSON__MIME, JSON_Text__MIME, XML__MIME, XML_Text__MIME } from './mime';

describe('MIME', () => {
  it('contains JSON definitions', () => {
    expect(JSON__MIME).toBe('application/json');
    expect(JSON_Text__MIME).toBe('text/json');
  });
  it('contains XML definitions', () => {
    expect(XML__MIME).toBe('application/xml');
    expect(XML_Text__MIME).toBe('text/xml');
  });
});
