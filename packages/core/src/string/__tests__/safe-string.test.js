import toString from '../safe-string';

describe('safe-string', () => {
  it('should return empty string', () => {
    const expected = '';
    const value = toString();
    expect(value).toBe(expected);
  });

  it('should return the string as is', () => {
    const expected = 'verbatim';
    const value = toString('verbatim');
    expect(value).toBe(expected);
  });
});
