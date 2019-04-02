import toString from './safe-string';

// Sentence case a string
const sentenceCase = (str?: string, { except = [] } = {}): string => {
  const wordSeparators: RegExp = /([ :–—-])/;

  return (
    toString(str)
      .split(wordSeparators)
      .map((curr, index, array) => {
        /* Ignore exceptions */
        if (
          except.length &&
          curr.search(new RegExp(`^(${except.filter(Boolean).join('|')})$`, 'i')) > -1
        ) {
          return curr;
        }
        // Ignore URLs
        if (array[index + 1] === ':' && array[index + 2] !== '') {
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
