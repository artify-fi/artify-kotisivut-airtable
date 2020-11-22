require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
// const queries = require("./src/constants/algolia")
module.exports = {
  siteMetadata: {
    title: `Hakukonenoptimoidut verkkosivut ja mobiilisovellukset`,
    description: `Laadukkaat ja luotettavat responsiiviset kotisivut ja mobiilisovellukset 
    jotka näyttävät hyvältä niin pöytäkoneilla kuin mobiililaitteillakin.`,
    titleTemplate: `%s | Hakukonenoptimointi ja kotisivut`,
    siteUrl: `https://www.artify.fi/`,
    twitterUsername: `@ArtBachmann`,
    image: `logo.jpg`,
  },

  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },

    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
          `/offline-plugin-app-shell-fallback`,
        ],
        createLinkInHead: true,
      }
    },
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://www.artify.fi/`,
      },
    },

    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.artify.fi/',
        sitemap: 'https://www.artify.fi/sitemap.xml',
        policy: [{ userAgent: '*', allow: ['/'] }]
      },
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-180499768-1'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#c9cfd4`,
        display: `standalone`,
        lang: `fi`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Open Sans Condensed`,
          `source \:300,400,500,400i,600` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  ],
}
