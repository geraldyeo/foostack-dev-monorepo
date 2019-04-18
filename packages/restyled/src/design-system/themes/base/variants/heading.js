import { css } from 'styled-components';
import theming from 'styled-theming';
import { themed, txPx } from '@foostack-dev/core';

const colorsStyles = theming('variant', {
  light: css`
    color: ${themed('colors.accentsDarkened.light.0')};
  `,
  dark: css`
    color: ${themed('colors.accentsLightened.dark.0')};
  `,
});

const typographyStyles = css`
  ${({ as = 'h2', theme: { media } }) => {
    const responsive = {
      headings: {
        h1: [7, 8, 9],
        h2: [6, 7, 8],
        h3: [5, 6, 7],
        h4: [4, 5, 6],
        h5: [3, 4, 5],
        h6: [2, 3, 4],
      },
    };
    const [fss, fsn, fsh] = responsive.headings[as];
    const opts = { transformValue: txPx };

    // vertical rhythm
    return css`
      font-size: ${themed(`fontSizes.${fss}`, opts)};
      ${media.greaterThan('small')`
        font-size: ${themed(`fontSizes.${fsn}`, opts)};
      `}
      ${media.greaterThan('huge')`
        font-size: ${themed(`fontSizes.${fsh}`, opts)};
      `}
    `;
  }}
`;

export const headingStyles = css`
  /* common styles */
  /* variants and variations */
  ${colorsStyles}
  ${typographyStyles}
`;

export default headingStyles;
