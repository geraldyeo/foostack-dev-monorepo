import { css } from 'styled-components';
import theming from 'styled-theming';
import { themed } from '@foostack-dev/core-utils';
import { getDarkenedColor, getLightenedColor } from '../../../../../utils/colors';

const colorsStyles = theming.variants('variant', 'variation', {
  primary: {
    light: css`
      background-color: ${themed('colors.primary')};
      color: ${themed('colors.shades.light')};
      :not(:disabled) {
        :focus,
        :hover {
          background-color: ${props => getLightenedColor(themed('colors.primary')(props))};
        }
      }
    `,
    dark: css`
      background-color: ${props => getDarkenedColor(themed('colors.primary')(props))};
      color: ${themed('colors.shades.light')};
      :not(:disabled) {
        :focus,
        :hover {
          background-color: ${themed('colors.primary')};
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
