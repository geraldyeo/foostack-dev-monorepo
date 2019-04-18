import { css } from 'styled-components';

export const fontRendering = css`
  :root {
    /* Adjust font size 1em = 10px on default browser settings */
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
  body {
    font-size: 1em;
    line-height: 1.4;
  }
`;

export default fontRendering;
