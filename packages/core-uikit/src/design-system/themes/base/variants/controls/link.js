import { css } from 'styled-components';
import theming from 'styled-theming';
import { themed } from '@foostack-dev/core-utils';

const colorsStyles = theming.variants('variant', 'variation', {
  primary: {
    light: css`
      color: ${themed('colors.accents.light')};
    `,
    dark: css`
      color: ${themed('colors.accents.dark')};
    `,
  },
  body: {
    light: css`
      color: ${themed('colors.shades.light')};
    `,
    dark: css`
      color: ${themed('colors.shades.dark')};
    `,
  },
});

export const linkStyles = css`
  /* common styles */
  text-decoration-skip: ink;
  /* variants and variations */
  ${colorsStyles}
`;

export default linkStyles;
