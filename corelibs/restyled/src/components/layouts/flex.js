import styled from 'styled-components';
import flexbox from '@styled-system/flexbox';
import propTypes from '@styled-system/prop-types';
import { Box } from './box';

export const Flex = styled(Box)({ display: 'flex' }, flexbox);

Flex.displayName = 'Restyled.Flex';

Flex.propTypes = {
  ...Box.propTypes,
  ...propTypes.flexbox,
};

export default Flex;
