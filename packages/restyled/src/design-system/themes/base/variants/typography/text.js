import { css } from 'styled-components';
import theming from 'styled-theming';
import { themed, txPx } from '@foostack-dev/core';

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

const typographyStyles = css`
  ${({ theme: { media } }) => {
    const responsive = {
      fontsizes: [1, 2, 3],
      lineheights: [0, 1, 2],
    };
    const [fss, fsn, fsh] = responsive.fontsizes;
    const [lhs, lhn, lhh] = responsive.lineheights;
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

export const textStyles = css`
  /* common styles */
  /* variants and variations */
  ${colorsStyles}
  ${typographyStyles}
`;

export default textStyles;
