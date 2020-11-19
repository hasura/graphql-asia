const path = require(`path`)
var productionPlugins = []
if (process.env.GATSBY_STAGE && process.env.GATSBY_STAGE === 'production') {
  productionPlugins.push({
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: 'UA-129727991-1',
      // Puts tracking script in the head instead of the body
      head: true,
      // Setting this parameter is optional
      anonymize: true,
      // Setting this parameter is also optional
      respectDNT: true,
      // Avoids sending pageview hits from custom paths
      // exclude: [],
      // Enables Google Optimize using your container Id
      // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
      // Any additional create only fields (optional)
      // sampleRate: 5,
      // siteSpeedSampleRate: 10,
      // cookieDomain: "example.com",
    },
  })
  productionPlugins.push({
    resolve: `gatsby-plugin-facebook-pixel`,
    options: {
      pixelId: '432447416966399',
    },
  })
}
module.exports = {
  siteMetadata: {
    title: 'GraphQL Asia 2019',
    author: 'Tobias Meixner',
    description: "GraphQL Asia - Asia's first GraphQL conference",
  },
  pathPrefix: '/2019',
  plugins: [
    ...productionPlugins,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-fullstory`,
      options: {
        fs_org: 'JY8BM',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'GraphQL Asia',
        short_name: 'GraphQL Asia',
        start_url: '/',
        background_color: '#E535AB',
        theme_color: '#E535AB',
        display: 'minimal-ui',
        icon: 'src/assets/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    // 'gatsby-plugin-offline'
  ],
}
