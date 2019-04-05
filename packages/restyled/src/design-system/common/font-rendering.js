import { css } from '@emotion/core';

export const fontRendering = css`
  html {
    /* Adjust font size 1em = 10px on default browser settings */
    font-size: 62.5%;
    text-size-adjust: 100%;
    /* Font variant */
    font-variant-ligatures: none;
    /* Smoothing */
    text-rendering: optimizeLegibility;
    font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  body {
    font-size: 1.6rem;
  }
`;

export default fontRendering;
