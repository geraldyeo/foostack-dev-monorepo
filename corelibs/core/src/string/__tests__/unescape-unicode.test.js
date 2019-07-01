import unescapeUnicode from '../unescape-unicode';

describe('unescapeHtml', () => {
  it('should work with empty strings, null and undefined', () => {
    expect(unescapeUnicode('')).toBe('');
    expect(unescapeUnicode()).toBe('');
    expect(unescapeUnicode(null)).toBe('');
    expect(unescapeUnicode(undefined)).toBe('');
  });

  it('should unescape unicode chars', () => {
    const expected = 'before éãôø after éãôø';
    const value = unescapeUnicode(
      'before \\u00e9\\u00e3\\u00f4\\u00f8 after \\u00e9\\u00e3\\u00f4\\u00f8',
    );
    expect(value).toBe(expected);
  });

  it('should not affect regular chars or non-unicode scapes', () => {
    const expected = 'foo \n bar \t \\x45';
    const value = unescapeUnicode('foo \n bar \t \\x45');
    expect(value).toEqual(expected);
  });

  it('should work with escaped printable ASCII chars as well', () => {
    const expected = 'føo bår';
    const value = unescapeUnicode('\\u0066\\u00f8\\u006f\\u0020\\u0062\\u00e5\\u0072');
    expect(value).toEqual(expected);
  });
});
