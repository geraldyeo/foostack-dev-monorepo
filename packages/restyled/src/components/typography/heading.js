import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themed } from '@foostack-dev/core';
import { Text } from './text';

export const Heading = styled(Text)`
  ${themed('styledVariants.Heading')}
`;

Heading.propTypes = {
  ...Text.propTypes,
  variation: PropTypes.oneOf(['default']),
};

Heading.defaultProps = {
  as: 'h2',
  m: 0,
  fontFamily: 'montserrat',
  fontSize: 4,
  fontWeight: 'black',
  variation: 'default',
};

Heading.displayName = 'Restyled.Heading';

export default Heading;
