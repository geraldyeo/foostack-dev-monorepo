import React from 'react';
import { Link } from 'gatsby';

import Layout from '../layouts/default';
import SEO from '../components/seo';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the commonplace page</h1>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
