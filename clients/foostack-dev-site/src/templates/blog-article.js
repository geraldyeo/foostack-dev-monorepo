import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { Heading } from '@foostack-dev/restyled';

import Layout from '../layouts/default';
import SEO from '../components/seo';

const BlogArticleTemplate = ({ data: { contentfulBlogPost: blog } }) => (
  <Layout>
    <SEO title="Blog" />
    <Heading>{blog.title}</Heading>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

BlogArticleTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlogArticleTemplate;

export const blogArticleQuery = graphql`
  query($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      title
    }
  }
`;
