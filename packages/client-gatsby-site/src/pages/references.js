import React from 'react';
import { Link } from 'gatsby';

import Layout from '../layouts/default';
import SEO from '../components/seo';

const CommonplaceReferences = () => (
  <Layout>
    <SEO title="Commonplace References" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default CommonplaceReferences;
