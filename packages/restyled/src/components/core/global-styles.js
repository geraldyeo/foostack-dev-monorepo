import { createGlobalStyle } from 'styled-components';
import fontRendering from '../../design-system/common/font-rendering';
import fontRoboto from '../../design-system/common/font-roboto';
import sanitize from '../../design-system/common/sanitize';

export const GlobalStyles = createGlobalStyle`
  ${fontRoboto}
  ${sanitize}
  ${fontRendering}
`;

export default GlobalStyles;
