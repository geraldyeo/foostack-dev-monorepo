import escapeHtml from '../escape-html';

describe('escapeHtml', () => {
  it('should work with empty strings, null and undefined', () => {
    expect(escapeHtml('')).toBe('');
    expect(escapeHtml()).toBe('');
    expect(escapeHtml(null)).toBe('');
    expect(escapeHtml(undefined)).toBe('');
  });

  it('should return the string verbatim if there are no special chars', () => {
    const expected = 'verbatim';
    const value = escapeHtml('verbatim');
    expect(value).toEqual(expected);
  });

  it('should convert special chars into entities', () => {
    const expected = '&lt;em&gt;&#39;lorem&#39;&lt;/em&gt; &amp; &quot;ipsum&quot;';
    const value = escapeHtml('<em>\'lorem\'</em> & "ipsum"');
    expect(value).toEqual(expected);
  });
});
