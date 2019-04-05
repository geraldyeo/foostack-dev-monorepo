import toString from './safe-string';

export const removeNonWord = (str?: string): string =>
  toString(str).replace(/[^\x20\x2D0-9A-Z\x5Fa-z\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g, '');

export default removeNonWord;
