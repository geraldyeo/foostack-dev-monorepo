import toString from './safe-string';

// Unescapes HTML special chars
const unescapeHtml = (str?: string): string =>
  toString(str)
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#0*39;/g, "'")
    .replace(/&quot;/g, '"');

export default unescapeHtml;
