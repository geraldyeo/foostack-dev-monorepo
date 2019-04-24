import { css } from 'styled-components';
import theming from 'styled-theming';
import { themed } from '@foostack-dev/core';

const colorsStyles = theming.variants('variant', 'variation', {
  primary: {
    light: css`
      background-color: ${themed('colors.accentsDarkened.light.1')};
      color: ${themed('colors.neutrals.light.0')};
      :not(:disabled) {
        :focus,
        :hover {
          background-color: ${themed('colors.accents.light.1')};
        }
      }
    `,
    dark: css`
      background-color: ${themed('colors.accentsDarkened.dark.1')};
      color: ${themed('colors.neutrals.dark.0')};
      :not(:disabled) {
        :focus,
        :hover {
          background-color: ${themed('colors.accents.dark.1')};
        }
      }
    `,
  },
});

export const buttonStyles = css`
  /* common styles */
  cursor: pointer;
  text-transform: capitalize;
  user-select: none;
  transition: all 100ms ease-in-out;
  :disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  /* variants and variations */
  ${colorsStyles}
`;

export default buttonStyles;
