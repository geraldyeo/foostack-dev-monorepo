import { css } from 'styled-components';
import theming from 'styled-theming';
import { themed } from '@foostack-dev/core';

const colorsStyles = theming.variants('variant', 'variation', {
  primary: {
    light: css`
      color: ${themed('colors.texts.light.2')};
    `,
    dark: css`
      color: ${themed('colors.texts.dark.1')};
    `,
  },
});

export const captionStyles = css`
  /* common styles */
  /* variants and variations */
  ${colorsStyles}
`;

export default captionStyles;
