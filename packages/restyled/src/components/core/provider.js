import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import baseTheme from '../../design-system/themes/base/ds';

export const Provider = ({ children, defaultTheme, theme, ...props }) => (
  <ThemeProvider>{React.Children.only(React.cloneElement(children, props))}</ThemeProvider>
);

Provider.displayName = 'Restyled.Provider';

Provider.defaultProps = {
  defaultTheme: baseTheme,
  theme: {},
};

Provider.propTypes = {
  children: PropTypes.element.isRequired,
  defaultTheme: PropTypes.object,
  theme: PropTypes.object,
};

export default Provider;
