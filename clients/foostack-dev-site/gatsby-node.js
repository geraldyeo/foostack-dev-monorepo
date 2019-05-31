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
          }
        }
      }
    }
  `;
  const blogArticleTemplate = path.resolve('src/templates/blog-article.js');
  const allBlogPostsResult = await graphql(query);
  const allBlogPostEdges = get(allBlogPostsResult, 'data.allContentfulBlogPost.edges', []);
  allBlogPostEdges.forEach(edge => {
    createPage({
      path: `/articles/${edge.node.id}`,
      component: blogArticleTemplate,
      // The context is passed as props to the component as well
      // as into the component's GraphQL query.
      context: {
        id: edge.node.id,
      },
    });
  });
}

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  await getAllBlogPost(createPage, graphql);
};
