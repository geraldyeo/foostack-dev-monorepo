import React from 'react';
import { Link } from 'gatsby';
import { Button, Heading, Text } from '@foostack-dev/restyled';

import Layout from '../layouts/default';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Heading as="h3">Hi people</Heading>
    <Text>Welcome to your new Gatsby site.</Text>
    <Text>Now go build something great.</Text>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Button variation="primary">Button!!11!</Button>
  </Layout>
);

export default IndexPage;
