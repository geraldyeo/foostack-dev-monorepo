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

/**
 * Gets a transformed set of colors
 * @param  {Object} colors
 * @return {string}
 */
export function getColors(colors, transformColors) {
  return Object.entries(colors)
    .map(([m, c]) => [m, c.map(transformColors)])
    .reduce((acc, [m, c]) => ({ ...acc, [m]: c }), {});
}
