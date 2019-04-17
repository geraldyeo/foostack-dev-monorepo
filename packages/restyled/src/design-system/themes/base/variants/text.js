import { css } from 'styled-components';
import theming from 'styled-theming';
import { themed } from '@foostack-dev/core';

const colorsStyles = theming.variants('variant', 'variation', {
  primary: {
    light: css`
      color: ${themed('colors.neutrals.light.4')};
    `,
    dark: css`
      color: ${themed('colors.neutrals.dark.0')};
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

export const textStyles = css`
  /* common styles */
  /* variants and variations */
  ${colorsStyles}
`;

export default textStyles;
