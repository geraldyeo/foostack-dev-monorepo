import { css } from 'styled-components';
import theming from 'styled-theming';
import { themed, toPx } from '@foostack-dev/core';

const colorsStyles = theming('variant', {
  light: css`
    color: ${themed('colors.accentsDarkened.light.0')};
  `,
  dark: css`
    color: ${themed('colors.accentsLightened.dark.0')};
  `,
});

const h1Styles = css`
  ${({ theme: { media } }) => css`
    font-size: ${themed('fontSizes.7', { transformValue: toPx })};
    ${media.greaterThan('small')`
      font-size: ${themed('fontSizes.8', { transformValue: toPx })};
    `}
  `}
`;
const h2Styles = css`
  ${({ theme: { media } }) => css`
    font-size: ${themed('fontSizes.6', { transformValue: toPx })};
    ${media.greaterThan('small')`
      font-size: ${themed('fontSizes.7', { transformValue: toPx })};
    `}
  `}
`;
const h3Styles = css`
  ${({ theme: { media } }) => css`
    font-size: ${themed('fontSizes.5', { transformValue: toPx })};
    ${media.greaterThan('small')`
      font-size: ${themed('fontSizes.6', { transformValue: toPx })};
    `}
  `}
`;
const h4Styles = css`
  ${({ theme: { media } }) => css`
    font-size: ${themed('fontSizes.4', { transformValue: toPx })};
    ${media.greaterThan('small')`
      font-size: ${themed('fontSizes.5', { transformValue: toPx })};
    `}
  `}
`;
const h5Styles = css`
  ${({ theme: { media } }) => css`
    font-size: ${themed('fontSizes.4', { transformValue: toPx })};
    ${media.greaterThan('small')`
      font-size: ${themed('fontSizes.4', { transformValue: toPx })};
    `}
  `}
`;
const h6Styles = css`
  ${({ theme: { media } }) => css`
    font-size: ${themed('fontSizes.2', { transformValue: toPx })};
    ${media.greaterThan('small')`
      font-size: ${themed('fontSizes.3', { transformValue: toPx })};
    `}
  `}
`;
const fontSizeStyles = css`
  ${({ as }) => {
    switch (as) {
      case 'h1':
        return h1Styles;
      case 'h3':
        return h3Styles;
      case 'h4':
        return h4Styles;
      case 'h5':
        return h5Styles;
      case 'h6':
        return h6Styles;
      default:
        return h2Styles;
    }
  }}
`;

export const headingStyles = css`
  /* common styles */
  /* variants and variations */
  ${colorsStyles}
  ${fontSizeStyles}
`;

export default headingStyles;
