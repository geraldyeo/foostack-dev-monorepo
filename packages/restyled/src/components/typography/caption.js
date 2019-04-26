import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themed } from '@foostack-dev/core';
import { Text } from './text';

export const Caption = styled(Text)`
  ${themed('styledVariants.Caption')}
`;

Caption.propTypes = {
  ...Text.propTypes,
  variation: PropTypes.oneOf(['default', 'primary']),
};

Caption.defaultProps = {
  as: 'small',
  fontSize: 0,
  variation: 'default',
};

Caption.displayName = 'Restyled.Caption';

export default Caption;
