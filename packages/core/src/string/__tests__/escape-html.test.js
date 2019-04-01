import escapeHtml from '../escape-html';

describe('escapeHtml', () => {
  it('should return string as is', () => {
    const value = 'Nothing to escape';
    expect(escapeHtml(value)).toBe(value);
  });
});
