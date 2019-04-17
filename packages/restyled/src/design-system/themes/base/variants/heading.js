import { css } from 'styled-components';
import theming from 'styled-theming';
import { themed } from '@foostack-dev/core';

const colorsStyles = theming.variants('variant', 'variation', {
  primary: {
    light: css`
      color: ${themed('colors.accentsDarkened.light.0')};
    `,
    dark: css`
      color: ${themed('colors.accentsLightened.dark.0')};
    `,
  },
});

export const headingStyles = css`
  /* common styles */
  /* variants and variations */
  ${colorsStyles}
`;

export default headingStyles;
