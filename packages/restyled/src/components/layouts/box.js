import styled from 'styled-components';
import { alignSelf, color, display, flex, fontSize, order, space, width } from 'styled-system';

export const Box = styled.div`
  box-sizing: border-box;
  ${alignSelf}
  ${color}
  ${display}
  ${flex}
  ${fontSize}
  ${order}
  ${space}
  ${width}
`;

Box.displayName = 'Restyled.Box';

Box.propTypes = {
  ...alignSelf.propTypes,
  ...color.propTypes,
  ...display.propTypes,
  ...flex.propTypes,
  ...fontSize.propTypes,
  ...order.propTypes,
  ...space.propTypes,
  ...width.propTypes,
};

export default Box;
