import styled from 'styled-components';
import {
  gridAutoColumns,
  gridAutoRows,
  gridGap,
  gridTemplateAreas,
  gridTemplateRows,
  gridTemplateColumns,
  gridArea,
} from 'styled-system';
import { Box } from './box';

export const Grid = styled(Box)`
    display: grid;
    ${gridArea}
    ${gridAutoColumns}
    ${gridAutoRows}
    ${gridGap}
    ${gridTemplateAreas}
    ${gridTemplateColumns}
    ${gridTemplateRows}
`;

Grid.displayName = 'Restyled.Grid';

Grid.propTypes = {
  ...Box.propTypes,
  ...gridArea.propTypes,
  ...gridAutoColumns.propTypes,
  ...gridAutoRows.propTypes,
  ...gridGap.propTypes,
  ...gridTemplateAreas.propTypes,
  ...gridTemplateColumns.propTypes,
  ...gridTemplateRows.propTypes,
};

export default Grid;
