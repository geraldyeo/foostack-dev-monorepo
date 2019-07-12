import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { baseTheme } from '../../design-system/themes/base/ds';

export const Provider = ({ children, theme, ...props }) => {
  const defaultTheme = useRef(baseTheme);
  return (
    <ThemeProvider theme={{ ...defaultTheme.current.toJSON(), ...theme }}>
      {React.Children.only(React.cloneElement(children, props))}
    </ThemeProvider>
  );
};

Provider.displayName = 'CUIKit.Provider';

Provider.defaultProps = {
  theme: {},
};

Provider.propTypes = {
  children: PropTypes.element.isRequired,
  defaultTheme: PropTypes.object,
  theme: PropTypes.object,
};

export default Provider;
