import escapeHtml from '../escape-html';

describe('escapeHtml', () => {
  it('should return the string as is', () => {
    const expected = 'verbatim';
    const value = escapeHtml('verbatim');
    expect(value).toBe(expected);
  });

  it('should escape the html tags', () => {
    const expected = '&lt;div&gt;verbatim&lt;/div&gt;';
    const value = escapeHtml('<div>verbatim</div>');
    expect(value).toBe(expected);
  });
});
