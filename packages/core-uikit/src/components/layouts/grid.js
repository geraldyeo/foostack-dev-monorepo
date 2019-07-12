import styled from 'styled-components';
import grid from '@styled-system/grid';
import propTypes from '@styled-system/prop-types';
import { Box } from './box';

export const Grid = styled(Box)({ display: 'grid' }, grid);

Grid.displayName = 'CUIKit.Grid';

Grid.propTypes = {
  ...Box.propTypes,
  ...propTypes.grid,
};

export default Grid;
