import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themed } from '@foostack-dev/core';
import { Box } from '../layouts/box';

export const Text = styled(Box)({}, themed('styledVariants.Text'));

Text.propTypes = {
  ...Box.propTypes,
  variation: PropTypes.oneOf(['default', 'primary', 'body']),
};

Text.defaultProps = {
  fontFamily: 'merriweather',
  variation: 'default',
};

Text.displayName = 'Restyled.Text';

export default Text;
