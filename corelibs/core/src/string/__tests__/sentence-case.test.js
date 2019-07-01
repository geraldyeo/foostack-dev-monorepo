import sentenceCase from '../sentence-case';

describe('sentenceCase', () => {
  it('should work with empty strings, null and undefined', () => {
    expect(sentenceCase('')).toBe('');
    expect(sentenceCase()).toBe('');
    expect(sentenceCase(null)).toBe('');
    expect(sentenceCase(undefined)).toBe('');
  });

  it('should uppercase first char of each sentence and lowercase others', () => {
    const expected = 'Lorem ipsum dolor. Sit amet dolor.';
    const value = sentenceCase('lorem Ipsum doLOr. sit amet dolor.');
    expect(value).toEqual(expected);
  });

  it('should ignore NASA', () => {
    const expected = 'We keep NASA capitalized';
    const value = sentenceCase('we keep NASA capitalized', { except: ['nasa'] });
    expect(value).toEqual(expected);
  });

  it('should ignore uri', () => {
    const expected = 'You have an https://example.com/ title';
    const value = sentenceCase('you have an https://example.com/ title');
    expect(value).toEqual(expected);
  });

  it('should ignore email', () => {
    const expected = 'Email email@example.com address';
    const value = sentenceCase('email email@example.com address');
    expect(value).toEqual(expected);
  });
});
