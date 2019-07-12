import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themed } from '@foostack-dev/core-utils';
import { Text } from './text';

export const Quote = styled(Text)({}, themed('styledVariants.Quote'));

Quote.propTypes = {
  ...Text.propTypes,
  variation: PropTypes.oneOf(['default', 'primary']),
};

Quote.defaultProps = {
  ...Text.defaultProps,
  as: 'blockquote',
  borderLeft: '4px solid',
  fontSize: 4,
  fontWeight: 'bold',
  pl: 2,
  variation: 'default',
};

Quote.displayName = 'CUIKit.Quote';

export default Quote;
