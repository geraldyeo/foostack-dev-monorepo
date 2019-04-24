import { createGlobalStyle } from 'styled-components';
import fontRendering from '../../design-system/common/font-rendering';
import fontGoogle from '../../design-system/common/font-google';
import sanitize from '../../design-system/common/sanitize';

export const GlobalStyles = createGlobalStyle`
  ${fontGoogle}
  ${sanitize}
  ${fontRendering}
`;

export default GlobalStyles;
