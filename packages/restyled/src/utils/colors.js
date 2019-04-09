import { darken, lighten } from 'polished';

/**
 * Gets a darkened color
 * @param  {Object} colors
 * @return {string}
 */
export function getDarkenedColor(color) {
  return darken(0.08, color);
}

/**
 * Gets a lightened color
 * @param  {Object} colors
 * @return {string}
 */
export function getLightenedColor(color) {
  return lighten(0.05, color);
}
