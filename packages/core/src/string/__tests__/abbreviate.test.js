import abbreviate from '../abbreviate';

describe('abbreviate', () => {
  it('should return the string as is', () => {
    const expected = 'verbatim';
    const value = abbreviate('verbatim');
    expect(value).toBe(expected);
  });

  it('should abbreviate `Pan-Island Expressway` to `PIE`', () => {
    const expected = 'PIE';
    const value = abbreviate('Pan-Island Expressway');
    expect(value).toBe(expected);
  });
});
