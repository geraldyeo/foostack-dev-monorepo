import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themed } from '@foostack-dev/core';
import { Box } from '../layouts/box';

export const Button = styled(Box)(
  {
    appearance: 'none',
    display: 'inline-block',
    lineHeight: 'inherit',
    textAlign: 'center',
    textDecoration: 'none',
  },
  themed('styledVariants.Button'),
);

Button.propTypes = {
  ...Box.propTypes,
  variation: PropTypes.oneOf(['default', 'primary', 'success', 'warning']),
};

Button.defaultProps = {
  as: 'button',
  bg: '#999999',
  border: 0,
  borderRadius: 2,
  color: 'white',
  fontFamily: 'firaSans',
  fontSize: 'inherit',
  fontWeight: 'bold',
  m: 0,
  px: 3,
  py: 2,
  variation: 'default',
};

Button.displayName = 'Restyled.Button';

export default Button;
