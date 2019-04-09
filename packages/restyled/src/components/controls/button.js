import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themed } from '@foostackdev/core';
import { borderColor, borderRadius, borders, buttonStyle, fontWeight } from 'styled-system';
import { Box } from '../core/box';

export const Button = styled(Box)`
  appearance: none;
  display: inline-block;
  line-height: inherit;
  text-align: center;
  text-decoration: none;
  ${borderColor}
  ${borderRadius}
  ${borders}
  ${buttonStyle}
  ${fontWeight}
  ${themed('styledVariants.Button')}
`;

Button.propTypes = {
  ...borderColor.propTypes,
  ...borderRadius.propTypes,
  ...borders.propTypes,
  ...buttonStyle.propTypes,
  ...fontWeight.propTypes,
  variation: PropTypes.oneOf(['default', 'primary', 'success', 'warning']),
};

Button.defaultProps = {
  as: 'button',
  bg: 'blue',
  border: 0,
  borderRadius: 2,
  color: 'white',
  fontSize: 'inherit',
  fontWeight: 'regular',
  m: 0,
  px: 3,
  py: 2,
  variation: 'default',
};
