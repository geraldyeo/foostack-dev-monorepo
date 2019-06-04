import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { Heading, Text } from '@foostack-dev/restyled';

import Layout from '../layouts/default';
import SEO from '../components/seo';

const BlogArticleTemplate = ({ data: { contentfulBlogPost: blog, unsplashPhoto: unsplash } }) => (
  <Layout>
    <SEO title="Blog" />
    <Heading>{blog.title}</Heading>

    <div>
      <img src={unsplash.urls.regular} alt="Hero" />
      <Text>
        Photo by{' '}
        <a
          href={`https://unsplash.com/@${
            unsplash.user.username
          }?utm_source=foostackdev-blog&utm_medium=referral`}
        >
          {`${unsplash.user.first_name} ${unsplash.user.last_name}`}
        </a>{' '}
        on{' '}
        <a href="https://unsplash.com/?utm_source=foostackdev-blog&utm_medium=referral">Unsplash</a>
      </Text>
    </div>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

BlogArticleTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlogArticleTemplate;

export const blogArticleQuery = graphql`
  query($id: String!, $unsplashPhotoId: String) {
    contentfulBlogPost(id: { eq: $id }) {
      title
    }
    unsplashPhoto(id: { eq: $unsplashPhotoId }) {
      id
      urls {
        regular
      }
      user {
        username
        first_name
        last_name
      }
    }
  }
`;
