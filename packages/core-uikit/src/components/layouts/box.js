import styled from 'styled-components';
import border from '@styled-system/border';
import color from '@styled-system/color';
import layout from '@styled-system/layout';
import shadow from '@styled-system/shadow';
import space from '@styled-system/space';
import typography from '@styled-system/typography';
import propTypes from '@styled-system/prop-types';

export const Box = styled.div(
  { boxSizing: 'border-box' },
  border,
  color,
  layout,
  shadow,
  space,
  typography,
);

Box.displayName = 'CUIKit.Box';

Box.propTypes = {
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.shadow,
  ...propTypes.space,
  ...propTypes.typography,
};

export default Box;
