import removeNonWord from '../remove-non-word';

describe('removeNonWord', () => {
  it('should work with empty strings, null and undefined', () => {
    expect(removeNonWord('')).toBe('');
    expect(removeNonWord()).toBe('');
    expect(removeNonWord(null)).toBe('');
    expect(removeNonWord(undefined)).toBe('');
  });

  it('should remove non word chars', () => {
    const expected = 'lorem _- ipsum';
    const value = removeNonWord('lorem ~!@#$%^&*()_+`-={}[]|\\:";\'/?><., ipsum\xD7');
    expect(value).toEqual(expected);
  });
});
