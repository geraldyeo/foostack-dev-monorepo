import toString from './safe-string';

// Remove HTML tags from string.
const stripHtmlTags = (str?: string): string => toString(str).replace(/<[^>]*>/g, '');

export default stripHtmlTags;
