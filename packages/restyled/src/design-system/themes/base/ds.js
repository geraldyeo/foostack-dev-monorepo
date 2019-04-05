import DesignSystem from '@foostackdev/core';
import { generateMedia } from 'styled-media-query';

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
const { between, greaterThan, lessThan } = generateMedia(breakpoints);

const token = {
  breakpoints: Object.values(breakpoints),
  colors: {
    accents: { light: ['#049DBF', '#F2B705', '#F29F05', '#F27405', '#D93D04'] },
    neutrals: { light: ['#F2F2F2', '#D9D9D9', '#A6A6A6', '#595959', '#262626'] },
  },
  fonts: {
    system:
      'system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    roboto: 'Roboto, sans-serif',
    robotoMono: '"Roboto Mono", monospace, serif',
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

export const dark = new DesignSystem(token, 'dark');
export const light = new DesignSystem(token, 'light');
export default { light, dark };
