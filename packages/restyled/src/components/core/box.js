import styled from 'styled-components';
import {
  alignItems,
  alignSelf,
  color,
  flex,
  flexDirection,
  flexWrap,
  fontSize,
  justifyContent,
  order,
  space,
  width,
} from 'styled-system';

export const Box = styled.div`
  box-sizing: border-box;
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${flex}
  ${order}
  ${alignSelf}
`;

Box.displayName = 'Restyled.Box';

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...flex.propTypes,
  ...order.propTypes,
  ...alignSelf.propTypes,
};

export const Flex = styled(Box)`
  display: flex;
  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
`;

Flex.displayName = 'Restyled.Flex';

Flex.propTypes = {
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes,
};

export default Box;
