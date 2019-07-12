import toString from './safe-string';

// Title case a string
export const titleCase = (str: string, { except = [] } = {}): string => {
  const alphaNumeric = /([A-Za-z0-9\u00C0-\u00FF])/;
  const smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|v.?|vs.?|via)$/i;
  const wordSeparators = /([ :–—-])/;

  return toString(str)
    .split(wordSeparators)
    .map((curr: string, index: number, array: string[]): string => {
      if (
        /* Check for small words */
        curr.search(smallWords) > -1 &&
        /* Skip first and last word */
        index !== 0 &&
        index !== array.length - 1 &&
        /* Ignore title end and subtitle start */
        array[index - 3] !== ':' &&
        array[index + 1] !== ':' &&
        /* Ignore small words that start a hyphenated phrase */
        (array[index + 1] !== '-' || (array[index - 1] === '-' && array[index + 1] === '-'))
      ) {
        return curr.toLowerCase();
      }
      // Ignore exceptions
      if (
        except.length &&
        curr.search(new RegExp(`^(${except.filter(Boolean).join('|')})[-!,.?]*?$`, 'i')) > -1
      ) {
        return curr;
      }
      // Ignore intentional capitalization
      if (curr.substr(1).search(/[A-Z]|\../) > -1) {
        return curr;
      }
      // Ignore URLs
      if (array[index + 1] === ':' && array[index + 2] !== '') {
        return curr;
      }
      // Capitalize the first letter
      return curr.replace(alphaNumeric, (match: string): string => match.toUpperCase());
    })
    .join('');
};

export default titleCase;
