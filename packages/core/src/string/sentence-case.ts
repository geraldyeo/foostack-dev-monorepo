import toString from './safe-string';

const urlPattern: RegExp = /https?:\/\/(www\.)?/i;
const wordSeparators: RegExp = /([ :–—-])/;

// Sentence case a string
const sentenceCase = (str?: string, { except = [] } = {}): string => {
  const _str = toString(str);
  if (_str.search(urlPattern) > -1) {
    return _str;
  }

  return (
    _str
      .split(wordSeparators)
      .map((curr, index, array) => {
        /* Ignore exceptions */
        if (
          except.length &&
          curr.search(new RegExp(`^(${except.filter(v => !!v).join('|')})$`, 'i')) > -1
        ) {
          return curr;
        }
        // Lowercase word
        return curr.toLowerCase();
      })
      .join('')
      // Replace first char of each sentence (new line or after '.\s+') to UPPERCASE
      .replace(/(^\w)|\.\s+(\w)/gm, (matched: string): string => matched.toUpperCase())
  );
};

export default sentenceCase;
