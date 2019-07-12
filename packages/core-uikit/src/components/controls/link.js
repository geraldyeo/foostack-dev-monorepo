import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themed } from '@foostack-dev/core-utils';
import { Text } from '../typography/text';

export const Link = styled(Text)({}, themed('styledVariants.Link'));

Link.propTypes = {
  ...Text.propTypes,
  variation: PropTypes.oneOf(['default', 'primary', 'body']),
};

Link.defaultProps = {
  as: 'a',
  variation: 'default',
};

Link.displayName = 'CUIKit.Link';

export default Link;
