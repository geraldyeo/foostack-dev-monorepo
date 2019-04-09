import styled from '@emotion/styled';
import { themed } from '@foostackdev/core';
import { borderColor, borderRadius, borders, buttonStyle, fontWeight } from 'styled-system';
import { Box } from '../core/box';

export const Button = styled(Box)(
  {
    appearance: 'none',
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: 'inherit',
    textDecoration: 'none',
  },
  borderColor,
  borderRadius,
  borders,
  buttonStyle,
  fontWeight,
  themed('styledVariants.Button'),
);

Button.propTypes = {
  ...borderColor.propTypes,
  ...borderRadius.propTypes,
  ...borders.propTypes,
  ...buttonStyle.propTypes,
  ...fontWeight.propTypes,
};

Button.defaultProps = {
  as: 'button',
  fontSize: 'inherit',
  fontWeight: 'bold',
  m: 0,
  px: 3,
  py: 2,
  color: 'white',
  bg: 'blue',
  border: 0,
  borderRadius: 2,
  variation: 'default',
};
