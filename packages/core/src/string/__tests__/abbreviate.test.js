import abbreviate from '../abbreviate';

describe('abbreviate', () => {
  it('should work with empty strings, null and undefined', () => {
    expect(abbreviate('')).toBe('');
    expect(abbreviate()).toBe('');
    expect(abbreviate(null)).toBe('');
    expect(abbreviate(undefined)).toBe('');
  });

  it('should return the string verbatim if there are no UPPERCASE chars', () => {
    const expected = 'verbatim';
    const value = abbreviate('verbatim');
    expect(value).toEqual(expected);
  });

  it('should abbreviate `Pan-Island Expressway` to `PIE`', () => {
    const expected = 'PIE';
    const value = abbreviate('Pan-Island Expressway');
    expect(value).toEqual(expected);
  });
});
