import toString from './safe-string';

const abbreviate = (str?: string): string => {
  const matched: Array<string> = toString(str).match(/\b([A-Z])/g) || [];
  return matched.join('');
};

export default abbreviate;
