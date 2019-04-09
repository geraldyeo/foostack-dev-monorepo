import { css } from '@emotion/core';
import { variants } from 'styled-theming';
import { themed } from '@foostackdev/core';

const cssBackgroundColor = variants('variant', 'variation', {
  default: {
    light: css`
      background-color: ${themed('colors.accents.0')};
    `,
    dark: css`
      background-color: ${themed('colors.accents.1')};
    `,
  },
});

export const buttonStyles = css`
  ${cssBackgroundColor}
`;

export default buttonStyles;
