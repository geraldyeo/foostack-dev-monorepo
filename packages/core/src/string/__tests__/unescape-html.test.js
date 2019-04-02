import unescapeHtml from '../unescape-html';

describe('escapeHtml', () => {
  it('should work with empty strings, null and undefined', () => {
    expect(unescapeHtml('')).toBe('');
    expect(unescapeHtml()).toBe('');
    expect(unescapeHtml(null)).toBe('');
    expect(unescapeHtml(undefined)).toBe('');
  });

  it('should convert &amp;', () => {
    const expected = 'foo & bar';
    const value = unescapeHtml('foo &amp; bar');
    expect(value).toEqual(expected);
  });

  it('should convert &quot;', () => {
    const expected = '"foo"';
    const value = unescapeHtml('&quot;foo&quot;');
    expect(value).toEqual(expected);
  });

  it('should convert &gt; and &lt;', () => {
    const expected = '<foo>';
    const value = unescapeHtml('&lt;foo&gt;');
    expect(value).toEqual(expected);
  });

  it('should convert &#39;', () => {
    const expected = "'foo'";
    const value = unescapeHtml('&#39;foo&#39;');
    expect(value).toEqual(expected);
  });

  it('should accept leading zeros in &#39;', () => {
    const expected = "'foo'";
    const value = unescapeHtml('&#0039;foo&#039;');
    expect(value).toEqual(expected);
  });
});
