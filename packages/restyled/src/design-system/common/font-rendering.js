import { css } from '@emotion/core';

const rendering = css`
  html {
    /* Adjust font size */
    font-size: 100%;
    text-size-adjust: 100%;
    /* Font variant */
    font-variant-ligatures: none;
    /* Smoothing */
    text-rendering: optimizeLegibility;
    font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
`;

export default rendering;
