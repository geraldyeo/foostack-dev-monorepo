import toString from './safe-string';

const urlPattern: RegExp = /https?:\/\/(www\.)?/i;
const wordSeparators: RegExp = /([ :–—-])/;

// Title case a string
const titleCase = (str: string, { except = [] } = {}): string => {
  const alphaNumeric: RegExp = /([A-Za-z0-9\u00C0-\u00FF])/;
  const smallWords: RegExp = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|v.?|vs.?|via)$/i;

  const _str = toString(str);
  if (_str.search(urlPattern) > -1) {
    return _str;
  }

  return _str
    .split(wordSeparators)
    .map(
      (curr: string, index: number, array: Array<string>): string => {
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
          curr.search(new RegExp(`^(${except.filter(v => !!v).join('|')})[-!,.?]*?$`, 'i')) > -1
        ) {
          return curr;
        }

        // Ignore intentional capitalization
        if (curr.substr(1).search(/[A-Z]|\../) > -1) {
          return curr;
        }

        // Capitalize the first letter
        return curr.replace(alphaNumeric, match => match.toUpperCase());
      },
    )
    .join('');
};

export default titleCase;
