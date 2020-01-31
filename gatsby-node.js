/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const allSpeakers = ['robert-zhu'];
const allWorkshops = ['why-graphql']
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


}
