import { css } from 'styled-components';
import { variants } from 'styled-theming';
import { themed } from '@foostack-dev/core';

const cssBackgroundColor = variants('variant', 'variation', {
  default: {
    light: css`
      background-color: ${themed('colors.accents.light.0')};
    `,
    dark: css`
      background-color: ${themed('colors.accents.light.1')};
    `,
  },
});

export const buttonStyles = css`
  ${cssBackgroundColor}
`;

export default buttonStyles;
