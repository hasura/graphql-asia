/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// You can delete this file if you're not using it

const detailsPage = [
  '/talks/the-state-of-graphql/',
  '/talks/evolution-of-graphql-at-tokopedia-with-increase-in-scale/',
  '/workshops/server-side-authentication-in-graphql/',
  '/workshops/graphql-on-sql-server-with-hasura/',
  '/workshops/introduction-to-hasura/',
  '/talks/building-high-performing-applications-using-graphql-for-heterogeneous-system/',
  '/talks/graphql-error-handling-done-right/',
];

const path = require("path");

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  detailsPage.forEach((talks, index) => {
    createPage({
      path: talks,
      component: path.resolve(`./src/components/DetailsPage/DetailsPage.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: talks,
      },
    });
  });
};

exports.onCreateWebpackConfig = ({ stage, rules, loaders, plugins, actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.woff2$/,
          use: [loaders.url({ limit: 0 })],
        },
      ],
    },
  });
};
