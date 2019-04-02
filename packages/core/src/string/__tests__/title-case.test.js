import titleCase from '../title-case';

describe('titleCase', () => {
  it('should work with empty strings, null and undefined', () => {
    expect(titleCase('')).toBe('');
    expect(titleCase()).toBe('');
    expect(titleCase(null)).toBe('');
    expect(titleCase(undefined)).toBe('');
  });

  it('should uppercase first char of each word', () => {
    const expected = 'One Two Three';
    const value = titleCase('one two three');
    expect(value).toEqual(expected);
  });

  it('should uppercase first char of start and end', () => {
    const expected =
      'Start a an and as at but by en for if in nor of on or per the to v vs via End';
    const value = titleCase(
      'start a an and as at but by en for if in nor of on or per the to v vs via end',
    );
    expect(value).toEqual(expected);
  });

  it('should keep NASA capitalized', () => {
    const expected = 'We Keep NASA Capitalized';
    const value = titleCase('we keep NASA capitalized');
    expect(value).toEqual(expected);
  });

  it('should uppercase first char of hyphenated words, except small words', () => {
    const expected = 'Follow Step-by-Step Instructions on E-Commerce Site';
    const value = titleCase('follow step-by-step instructions on e-commerce site');
    expect(value).toEqual(expected);
  });

  it('should ignore uri', () => {
    const expected = 'You Have an https://example.com/ Title';
    const value = titleCase('you have an https://example.com/ title');
    expect(value).toEqual(expected);
  });

  it('should ignore email', () => {
    const expected = 'Email email@example.com Address';
    const value = titleCase('email email@example.com address');
    expect(value).toEqual(expected);
  });

  it('should ignore exceptions', () => {
    const expected = 'Email email@example.com address';
    const value = titleCase('email email@example.com address', { except: ['address'] });
    expect(value).toEqual(expected);
  });
});
