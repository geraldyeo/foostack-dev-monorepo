import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themed } from '@foostack-dev/core';
import { Text } from './text';

export const Heading = styled(Text)(themed('styledVariants.Heading'));

Heading.propTypes = {
  ...Text.propTypes,
  variation: PropTypes.oneOf(['default', 'primary']),
};

Heading.defaultProps = {
  ...Text.defaultProps,
  as: 'h2',
  m: 0,
  fontFamily: 'firaSans',
  fontSize: 4,
  fontWeight: 'bold',
  variation: 'default',
};

Heading.displayName = 'Restyled.Heading';

export default Heading;
