import PropTypes from 'prop-types';
import styled from 'styled-components';
import { borders, borderColor } from 'styled-system';
import { themed } from '@foostack-dev/core';
import { Text } from './text';

export const Quote = styled(Text)`
  ${borders}
  ${borderColor}
  ${themed('styledVariants.Quote')}
`;

Quote.propTypes = {
  ...Text.propTypes,
  variation: PropTypes.oneOf(['default']),
};

Quote.defaultProps = {
  as: 'blockquote',
  borderLeft: '4px solid',
  fontFamily: 'merriweather',
  fontSize: 4,
  fontWeight: 'bold',
  pl: 2,
  variation: 'default',
};

Quote.displayName = 'Restyled.Quote';

export default Quote;
