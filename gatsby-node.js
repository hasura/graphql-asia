/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// You can delete this file if you're not using it

const talkDetailsPage = [
  '/talks/the-state-of-graphql/',
  '/talks/evolution-of-graphql-at-tokopedia-with-increase-in-scale/',
  '/talks/building-high-performing-applications-using-graphql-for-heterogeneous-system/',
  '/talks/graphql-error-handling-done-right/',
  '/talks/monorepo-development-using-hasura-role-and-graphql-code-generator/',
  '/talks/intelligent-caching-with-graphql-gateway-using-cdc/',
  '/talks/connect-your-enterprise-systems-with-graphql-using-apache-kafka-and-hasura/',
  '/talks/graphql-wrong-answers-only/',
  '/talks/reintroducing-schema-stitching-in-2021/',
  '/talks/data-science-with-weaviate-and-graphql/',
  '/talks/scalable-and-resilient-graphql-subscriptions-with-distributed-sql-databases/',
  '/talks/adding-bleeding-edge-tech-to-archaic-government-graphql-for-govtech/',
  '/talks/graphql-and-microservices-the-different-approaches-and-challenges/',
  '/talks/adopting-graphql-in-a-legacy-nodejs-api/',
  '/talks/a-tale-of-inherited-projects-and-why-we-kept-hasura/',
  '/talks/developer-productivity-with-graphql/',
  '/talks/3factor-app-an-accessible-design-pattern-for-serverless/',
];
const workshopDetailsPage = [
  '/workshops/server-side-authentication-in-graphql/',
  '/workshops/graphql-on-sql-server-with-hasura/',
  '/workshops/introduction-to-hasura/',
  '/workshops/graphql-in-the-jamstack/',
  '/workshops/type-safe-graphql-apps-with-typescript/',
  '/workshops/building-distributed-graph/',
]
const path = require("path");

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  talkDetailsPage.forEach((talks, index) => {
    createPage({
      path: talks,
      component: path.resolve(`./src/components/DetailsPage/TalkDetailsPage.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: talks,
      },
    });
  });

  workshopDetailsPage.forEach((workshop, index) => {
    createPage({
      path: workshop,
      component: path.resolve(`./src/components/DetailsPage/WorkshopDetailsPage.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: workshop,
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
