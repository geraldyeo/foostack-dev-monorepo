import React from 'react';
import { Link } from 'gatsby';

import Layout from '../layouts/default';
import SEO from '../components/seo';

const SecondPage = () => (
  <Layout>
    <SEO title="Today I learned" />
    <h1>Hi from the TIL page</h1>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
