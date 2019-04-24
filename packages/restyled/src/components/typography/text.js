import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themed } from '@foostack-dev/core';
import { fontFamily, fontWeight, textAlign, lineHeight, letterSpacing } from 'styled-system';
import { Box } from '../core/box';

export const Text = styled(Box)`
  ${fontFamily}
  ${fontWeight}
  ${textAlign}
  ${lineHeight}
  ${letterSpacing}
  ${themed('styledVariants.Text')}
`;

Text.propTypes = {
  ...fontFamily.propTypes,
  ...fontWeight.propTypes,
  ...textAlign.propTypes,
  ...lineHeight.propTypes,
  ...letterSpacing.propTypes,
  variation: PropTypes.oneOf(['default', 'primary', 'body']),
};

Text.defaultProps = {
  fontFamily: 'merriweather',
  variation: 'default',
};

Text.displayName = 'Restyled.Text';

export default Text;
