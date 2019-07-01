import { css } from 'styled-components';
import theming from 'styled-theming';
import { themed, txPx } from '@foostack-dev/core';

const colorsStyles = theming.variants('variant', 'variation', {
  primary: {
    light: css`
      color: ${themed('colors.shades.dark')};
    `,
    dark: css`
      color: ${themed('colors.shades.light')};
    `,
  },
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
      lineheights: {
        h1: [0, 1, 2],
        h2: [0, 1, 2],
        h3: [0, 0, 1],
        h4: [0, 0, 1],
        h5: [0, 0, 0],
        h6: [0, 0, 0],
      },
    };
    const [fss, fsn, fsh] = responsive.headings[as];
    const [lhs, lhn, lhh] = responsive.lineheights[as];
    const opts = { transformValue: txPx };

    // vertical rhythm
    return css`
      font-size: ${themed(`fontSizes.${fss}`, opts)};
      line-height: ${themed(`lineHeights.${lhs}`)};
      ${media.greaterThan('small')`
        font-size: ${themed(`fontSizes.${fsn}`, opts)};
        line-height: ${themed(`lineHeights.${lhn}`)};
      `}
      ${media.greaterThan('huge')`
        font-size: ${themed(`fontSizes.${fsh}`, opts)};
        line-height: ${themed(`lineHeights.${lhh}`)};
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
