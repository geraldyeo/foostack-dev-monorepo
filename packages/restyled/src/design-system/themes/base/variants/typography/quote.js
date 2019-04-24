import { css } from 'styled-components';
import theming from 'styled-theming';
import { themed } from '@foostack-dev/core';

const colorsStyles = theming.variants('variant', 'variation', {
  primary: {
    light: css`
      color: ${themed('colors.neutrals.light.2')};
    `,
    dark: css`
      color: ${themed('colors.neutrals.dark.1')};
    `,
  },
});

export const quoteStyles = css`
  /* common styles */
  /* variants and variations */
  ${colorsStyles}
`;

export default quoteStyles;
