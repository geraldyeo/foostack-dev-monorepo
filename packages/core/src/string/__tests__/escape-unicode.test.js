import escapeUnicode from '../escape-unicode';

describe('escapeHtml', () => {
  it('should work with empty strings, null and undefined', () => {
    expect(escapeUnicode('')).toBe('');
    expect(escapeUnicode()).toBe('');
    expect(escapeUnicode(null)).toBe('');
    expect(escapeUnicode(undefined)).toBe('');
  });

  it('should escape only especial chars by default', () => {
    const expected = 'before \\u00e9\\u00e3\\u00f4\\u00f8 after \\u00e9\\u00e3\\u00f4\\u00f8';
    const value = escapeUnicode('before éãôø after éãôø');
    expect(value).toEqual(expected);
  });

  it('should allow escaping everything', () => {
    const expected = '\\u0066\\u00f8\\u006f\\u0020\\u0062\\u00e5\\u0072';
    const value = escapeUnicode('føo bår', true);
    expect(value).toEqual(expected);
  });
});
