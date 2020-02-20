/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const allSpeakers = ['robert-zhu', 'manish-jain', 'vishakha-singh', 'radoslav-stankov', 'gago-frigerio', 'shipra-gupta', 'ivan-goncharov', 'sarjeel-yusuf', 'lachlan-young', 'sam-julien', 'kiran-kumar-abburi', 'vijayan-srinivasan', 'bala-dutt', 'arun-lingala', 'yogesh-desai', 'abinash-mohapatra', 'rajat-khare', 'sean-grove', 'vilva-athiban', 'sauradyuti-coondu', 'rajat-khare-arun-lingala', 'vijayan-srinivasan-bala-dutt', 'ankit-muchhala', 'anon-ray', 'amey-banarse', 'shahidh-muhammed', 'tanmai-gopal', 'karthic-rao'];
const allWorkshops = ['why-graphql', 'building-apps-with-react-apollo-client', 'build-high-performance-graphql-serverless-apps-with-the-3factor-app-architecture', 'building-scalable-graphal-apps-with-react-and-dgraph']
const allPanel = ['graphql-adoption', 'graphql-on-databases']
const path = require('path');

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  /*
  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/speakers/)) {
    page.matchPath = "/speakers/*"

    // Update the page.
    createPage(page)
  }
  if (page.path.match(/^\/workshops/)) {
    page.matchPath = "/workshops/*"

    // Update the page.
    createPage(page)
  }
  */
  allSpeakers.forEach((speaker, index) => {
    createPage({
      path: '/speakers/' + speaker,
      component: path.resolve(`./src/components/DetailsTopBanner.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: speaker,
      },
    })
  });

  allWorkshops.forEach((workshop, index) => {
    createPage({
      path: '/workshops/' + workshop,
      component: path.resolve(`./src/components/WorkshopTopBanner.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: workshop,
      },
    })
  });

  allPanel.forEach((panel, index) => {
    createPage({
      path: '/panel/' + panel,
      component: path.resolve(`./src/components/PanelTopBanner.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: panel,
      },
    })
  });
}
