import removeNonAscii from '../remove-non-ascii';

describe('removeNonAscii', () => {
  it('should work with empty strings, null and undefined', () => {
    expect(removeNonAscii('')).toBe('');
    expect(removeNonAscii()).toBe('');
    expect(removeNonAscii(null)).toBe('');
    expect(removeNonAscii(undefined)).toBe('');
  });

  it('should remove non-printable chars', () => {
    const expected = 'lorem ~!@#$%^&*()_+`-={}[]|\\:";\'/?><., ipsum';
    const value = removeNonAscii(
      'áÁâÂàÀåÅãÃäÄçÇéÉêÊèÈëËíÍîÎìÌïÏñÑóÓôÔòÒØõÕöÖÐþúÚûÛùÙüÜýÝÿlorem ~!@#$%^&*()_+`-={}[]|\\:";\'/?><., ipsum',
    );
    expect(value).toEqual(expected);
  });
});
