import toString from './safe-string';

// Unescape unicode char sequences
export const unescapeUnicode = (str?: string): string =>
  toString(str).replace(
    /\\u[0-9a-f]{4}/g,
    (matched: string): string => {
      const code = parseInt(matched.slice(2), 16);
      return String.fromCharCode(code);
    },
  );

export default unescapeUnicode;
