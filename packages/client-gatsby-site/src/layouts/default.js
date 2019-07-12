import React from 'react';
import PropTypes from 'prop-types';
import { GlobalStyles, Provider, Box } from '@foostack-dev/core-uikit';
import Header from '../components/header';
import useBuildTime from '../hooks/build-time';
import useSiteTitle from '../hooks/site-title';

const DefaultLayout = ({ children }) => {
  const time = useBuildTime();
  const siteTitle = useSiteTitle();

  return (
    <>
      <GlobalStyles />
      <Provider>
        <div>
          <Header siteTitle={siteTitle} />
          <Box>{children}</Box>
          <footer>
            <p>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </p>
            <p>Last built on {time}</p>
          </footer>
        </div>
      </Provider>
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
