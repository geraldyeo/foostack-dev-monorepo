/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const { get } = require('lodash');
const path = require(`path`);

async function getAllBlogPost(createPage, graphql) {
  const query = `
    {
      allContentfulBlogPost(limit: 10) {
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
  const allBlogPostsResult = await graphql(query);
  const allBlogPostEdges = get(allBlogPostsResult, 'data.allContentfulBlogPost.edges', []);
  allBlogPostEdges.forEach(edge => {
    const {
      node: { id, slug, unsplashPhotoId },
    } = edge;
    // programatically create blog articles with slug
    createPage({
      path: `/articles/${slug}`,
      component: blogArticleTemplate,
      // The context is passed as props to the component as well
      // as into the component's GraphQL query.
      context: {
        id,
        unsplashPhotoId,
      },
    });
  });
}

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  await getAllBlogPost(createPage, graphql);
};
