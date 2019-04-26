import { css } from 'styled-components';
import theming from 'styled-theming';
import { themed } from '@foostack-dev/core';

const colorsStyles = theming.variants('variant', 'variation', {
  primary: {
    light: css`
      color: ${themed('colors.accents.light.2')};
    `,
    dark: css`
      color: ${themed('colors.accents.dark.2')};
    `,
  },
  body: {
    light: css`
      color: ${themed('colors.neutrals.light.3')};
    `,
    dark: css`
      color: ${themed('colors.neutrals.dark.1')};
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
