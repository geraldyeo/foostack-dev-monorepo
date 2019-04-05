export const safeString = (str?: string): string => (!str ? '' : str);

export default safeString;
