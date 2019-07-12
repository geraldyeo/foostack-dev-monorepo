import toString from '../safe-string';

describe('safe-string', () => {
  it('should work with empty strings, null and undefined', () => {
    expect(toString('')).toBe('');
    expect(toString()).toBe('');
    expect(toString(null)).toBe('');
    expect(toString(undefined)).toBe('');
  });

  it('should return the string verbatim', () => {
    const expected = 'verbatim';
    const value = toString('verbatim');
    expect(value).toEqual(expected);
  });
});
