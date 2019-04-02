import stripHtmlTags from '../strip-html-tags';

describe('stripHtmlTags', () => {
  it('should work with empty strings, null and undefined', () => {
    expect(stripHtmlTags('')).toBe('');
    expect(stripHtmlTags()).toBe('');
    expect(stripHtmlTags(null)).toBe('');
    expect(stripHtmlTags(undefined)).toBe('');
  });

  it('should remove html tags', () => {
    const expected = 'lorem ipsum dolor sit amet';
    const value = stripHtmlTags(
      '<div><div><span>lorem</span> ipsum <b>dolor</b></div><div> sit </div></div>amet',
    );
    expect(value).toEqual(expected);
  });
});
