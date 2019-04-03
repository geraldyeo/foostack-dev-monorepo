import DesignSystem from '@foostackdev/core';
import { generateMedia } from 'styled-media-query';

const breakpoints = {
  /* tiny: '40em', //  reference only: 640px (max-width) - phones */
  small: '40em', // 640px (min-width) - tablets portrait
  medium: '58em', // 928px (min-width) - tablets landscape
  large: '75em', // 1200px (min-width) - desktops
  huge: '112em', // 1792px (min-width) - desktops ultra-wide
};

/**
 * 3 main methods to generate media queries:
 * - between(firstBreakpoint | firstSize, lastBreakpoint | lastSize)
 * - greaterThan(breakpoint | size)
 * - lessThan(breakpoint | size)
 * @see {@link https://github.com/morajabi/styled-media-query}
 *
 * Example with breakpoint:
 * lessThan('small')`
 *  ...css
 * `
 *
 * Example with custom width:
 * lessThan('640px')`
 *  ...css
 * `
 *
 * The examples above is equivalent in pure css to:
 * @media (max-width: 640px) {
 *  ...css
 * }
 *
 * Helpful examples:
 * @example
 * lessThan('small')`...css` // target mobile phones only
 * between('small', 'large')`...css` // target tablets only
 * between('small', 'medium')`...css` // target tablets portrait only
 * between('medium', 'large')`...css` // target tablets landscape only
 * greaterThan('small')`...css` // target tablets and up
 * greaterThan('large')`...css` // target desktops and up
 * greaterThan('huge')`...css` // target ultra-wide desktop monitors
 */
const { between, greaterThan, lessThan } = generateMedia(breakpoints);

const token = {
  breakpoints: Object.values(breakpoints),
  fonts: {
    system: 'system-ui, system-fonts, sans-serif',
    roboto: 'Roboto, sans-serif',
    robotoSlab: '"Roboto Slab", serif',
  },
  fontSizes: [12, 14, 16, 18, 24, 32, 36, 48, 64, 72, 96],
  fontWeights: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  media: { between, greaterThan, lessThan },
  radii: [0, 2, 4, 6],
  space: [0, 8, 16, 24, 32, 64, 128, 256, 512],
};

export default new DesignSystem(token);
