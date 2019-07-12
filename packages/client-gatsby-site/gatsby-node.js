/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const { get } = require('lodash');
const path = require(`path`);

// As the graphql function doesn't throw its errors you manually have to check for result.errors
// and throw an error. Otherwise errors would get swallowed.
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors;
    }
    return result;
  });

const getPaging = (pages, index = 0) => {
  if (!pages) {
    return [];
  }
  const prev = index === 0 ? null : pages[index - 1].node;
  const next = index === pages.length - 1 ? null : pages[index + 1].node;
  return [prev, next];
};

async function getAllBlogPost(createPage, graphql) {
  const query = `
    {
      allContentfulBlogPost {
        edges {
          node {
            id
            slug
            unsplashPhotoId
          }
        }
      }
    }
  `;
  const blogArticleTemplate = path.resolve('src/templates/blog-article.js');
  const result = await wrapper(graphql(query));
  const allBlogPosts = get(result, 'data.allContentfulBlogPost.edges', []);
  allBlogPosts.forEach((edge, index) => {
    const {
      node: { id, slug, unsplashPhotoId },
    } = edge;
    const [prev, next] = getPaging(allBlogPosts, index);

    // programatically create blog articles with slug
    createPage({
      path: `/articles/${slug}`,
      component: blogArticleTemplate,
      // The context is passed as props to the component as well
      // as into the component's GraphQL query.
      context: {
        id,
        next,
        prev,
        unsplashPhotoId,
      },
    });
  });
}

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  await getAllBlogPost(createPage, graphql);
};
