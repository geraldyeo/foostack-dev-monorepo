import { css } from 'styled-components';
import theming from 'styled-theming';
import { themed } from '@foostack-dev/core-utils';

const colorsStyles = theming.variants('variant', 'variation', {
  primary: {
    light: css`
      color: ${themed('colors.texts.light')};
    `,
    dark: css`
      color: ${themed('colors.texts.dark')};
    `,
  },
});

export const captionStyles = css`
  /* common styles */
  /* variants and variations */
  ${colorsStyles}
`;

export default captionStyles;
