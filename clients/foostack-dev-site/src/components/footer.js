// import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
// import { Heading } from '@foostack-dev/restyled';

const Footer = ({ siteTitle }) => <header>Footer</header>;

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

Footer.defaultProps = {
  siteTitle: ``,
};

export default Footer;
