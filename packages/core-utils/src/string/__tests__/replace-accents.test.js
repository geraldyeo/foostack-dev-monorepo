import replaceAccents from '../replace-accents';

describe('replaceAccents', () => {
  it('should work with empty strings, null and undefined', () => {
    expect(replaceAccents('')).toBe('');
    expect(replaceAccents()).toBe('');
    expect(replaceAccents(null)).toBe('');
    expect(replaceAccents(undefined)).toBe('');
  });

  it('should replace all Basic Latin and Latin-1 accented chars with regular ones', () => {
    var expected = 'aAaAaAaAaAaAcCeEeEeEeEiIiIiIiInNoOoOoOOoOoODpuUuUuUuUyYy';
    var value = replaceAccents('áÁâÂàÀåÅãÃäÄçÇéÉêÊèÈëËíÍîÎìÌïÏñÑóÓôÔòÒØõÕöÖÐþúÚûÛùÙüÜýÝÿ');
    expect(value).toEqual(expected);
  });
});
