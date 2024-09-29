/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Fortesa Reqica`,
    description: `A brief description of my portfolio.`,
    author: `@yourusername`,
    siteUrl: `https://yourwebsite.com/`,
  },
  plugins: [
    `gatsby-plugin-image`,
     `gatsby-plugin-sharp`,
  'gatsby-plugin-anchor-links',

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
