import abbreviate from '../abbreviate';

describe('abbreviate', () => {
  it('should return string as is', () => {
    const value = 'cannot be abbreviated';
    expect(abbreviate(value)).toBe(value);
  });

  it('should abbreviate `Pan-Island Expressway` to `PIE`', () => {
    const expected = 'PIE';
    const value = 'Pan-Island Expressway';
    expect(abbreviate(value)).toBe(expected);
  });
});
