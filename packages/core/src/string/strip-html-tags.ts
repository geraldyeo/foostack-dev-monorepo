import toString from './safe-string';

// Remove HTML tags from string.
export const stripHtmlTags = (str?: string): string => toString(str).replace(/<[^>]*>/g, '');

export default stripHtmlTags;
