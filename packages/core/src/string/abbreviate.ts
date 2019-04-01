import toString from './safe-string';

const abbreviate = (str?: string): string => {
  const _str = toString(str);
  const matched: Array<string> = _str.match(/\b([A-Z])/g) || [_str];
  return matched.join('');
};

export default abbreviate;
