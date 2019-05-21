import styled from 'styled-components';
import { alignItems, flexDirection, flexWrap, justifyContent } from 'styled-system';
import { Box } from './box';

export const Flex = styled(Box)`
  display: flex;
  ${alignItems}
  ${flexDirection}
  ${flexWrap}
  ${justifyContent}
`;

Flex.displayName = 'Restyled.Flex';

Flex.propTypes = {
  ...Box.propTypes,
  ...alignItems.propTypes,
  ...flexDirection.propTypes,
  ...flexWrap.propTypes,
  ...justifyContent.propTypes,
};

export default Flex;
