import toString from './safe-string';

// Escape string into unicode sequences
export const escapeUnicode = (str?: string, shouldEscapePrintable?: boolean): string =>
  toString(str).replace(/[\s\S]/g, (matched: string): string => {
    // skip printable ASCII chars if we should not escape them
    if (!shouldEscapePrintable && /[\x20-\x7E]/.test(matched)) {
      return matched;
    }
    // we use "000" and slice(-4) for brevity, need to pad zeros,
    // unicode escape always have 4 chars after "\u"
    return `\\u${`000${matched.charCodeAt(0).toString(16)}`.slice(-4)}`;
  });

export default escapeUnicode;
