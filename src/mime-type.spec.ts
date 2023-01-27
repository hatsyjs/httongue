import { describe, expect, it } from '@jest/globals';
import { MIMEType } from './mime-type.js';

describe('MIME', () => {
  it('contains JSON definitions', () => {
    expect(MIMEType.JSON).toBe('application/json');
    expect(MIMEType.TextJSON).toBe('text/json');
  });
  it('contains XML definitions', () => {
    expect(MIMEType.XML).toBe('application/xml');
    expect(MIMEType.TextXML).toBe('text/xml');
  });
});
