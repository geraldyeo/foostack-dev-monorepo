import { DesignSystem, generateMediaQuery, ms } from '@foostack-dev/core';
import { css } from 'styled-components';
import { getDarkenedColor, getLightenedColor, getColors } from '../../../utils/colors';
import * as styledVariants from './variants';

const breakpoints = {
  // reference only: 600px - mobile down (max-width)
  small: '600px', // - tablet portrait up (min-width)
  medium: '900px', // - tablet landscape up (min-width)
  large: '1200px', // - desktop up (min-width)
  huge: '1800px', // - desktop ultra-wide up (min-width)
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
const { between, greaterThan, lessThan } = generateMediaQuery(breakpoints, css);

const accents = {
  light: ['#247ba0', '#44c6ca', '#fce561', '#fcb813', '#d93d04'],
  dark: ['#1c333d', '#1f7369', '#aa8f4e', '#b27647', '#a9513b'],
};

const neutrals = ['#f2f2f2', '#d9d9d9', '#a6a6a6', '#595959', '#262626'];

const token = {
  breakpoints: Object.values(breakpoints),
  colors: {
    accents,
    accentsLightened: getColors(accents, getLightenedColor),
    accentsDarkened: getColors(accents, getDarkenedColor),
    neutrals: { light: neutrals, dark: neutrals },
  },
  fonts: {
    system:
      'system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    merriweather: '"Merriweather", serif',
    montserrat: '"Montserrat", san-serif',
    robotomono: '"Roboto Mono", monospace',
  },
  // @see {@link https://type-scale.com/}
  fontSizes: new Array(12).fill(0).map((_, i) => ms(i - 2, 'major third') * 16),
  fontWeights: {
    light: 300,
    regular: 400,
    bold: 700,
    black: 900,
  },
  lineHeights: new Array(6).fill(0).map((_, i) => ms(i + 1, 'perfect fourth')),
  media: { between, greaterThan, lessThan },
  radii: [0, 2, 4, 6],
  space: new Array(11)
    .fill(0)
    .map((_, i) => i * 8)
    .concat([128, 256, 512]),
  styledVariants,
};

export const baseTheme = new DesignSystem(token, 'light');

export default baseTheme;
