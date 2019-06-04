import idx from 'idx';
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { Heading, Text } from '@foostack-dev/restyled';

import Layout from '../layouts/default';
import SEO from '../components/seo';

const BlogArticleTemplate = ({ data: { contentfulBlogPost: blog, unsplashPhoto: unsplash } }) => {
  const getImgUrl = useCallback(() => idx(unsplash, _ => _.urls.regular), [unsplash]);
  const getUsername = useCallback(() => idx(unsplash, _ => _.user.username), [unsplash]);
  const getFirstName = useCallback(() => idx(unsplash, _ => _.user.first_name), [unsplash]);
  const getLastName = useCallback(() => idx(unsplash, _ => _.user.last_name), [unsplash]);

  return (
    <Layout>
      <SEO title="Blog" />
      <Heading>{blog.title}</Heading>

      <div>
        <img src={getImgUrl()} alt="Hero" />
        <Text>
          Photo by{' '}
          <a
            href={`https://unsplash.com/@${getUsername()}?utm_source=foostackdev-blog&utm_medium=referral`}
          >
            {`${getFirstName()} ${getLastName()}`}
          </a>{' '}
          on{' '}
          <a href="https://unsplash.com/?utm_source=foostackdev-blog&utm_medium=referral">
            Unsplash
          </a>
        </Text>
      </div>

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

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
