require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
// const queries = require("./src/constants/algolia")
module.exports = {
  siteMetadata: {
    title: `Pienyrittäjille modernit ja hakukonenoptimoidut verkkosivut sekä mobiilisovellukset.`,
    description: `Responsiiviset kotisivut ja mobiilisovellukset 
    jotka tukevat uusien asiakkaiden tavoittamista sekä näyttävät hyvältä niin pöytäkoneilla kuin mobiililaitteillakin.`,
    titleTemplate: `%s |Modernit hakukoneoptimoidut kotisivut pienyrittäjille`,
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
    // {
    //   resolve: `gatsby-plugin-hotjar`,
    //   options: {
    //     includeInDevelopment: true, // optional parameter to include script in development
    //     id: 2120624,
    //     sv: 6,
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Artify progressiiviset GatsbyJS kotisivut`,
        short_name: `Artify kotisivut`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#c9cfd4`,
        display: `standalone`,
        lang: `fi`,
        icon: "src/images/icon.png",
      },
    },
    `gatsby-plugin-offline`,
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       `Open Sans Condensed`,
    //       `Merriweather`,
    //     ],
    //     display: 'swap'
    //   }
    // },

    {
      resolve: `gatsby-plugin-google-fonts-with-attributes`,
      options: {
        fonts: [
          `Open Sans Condensed`,
          `Merriweather`,
          // `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
        attributes: {
          rel: "stylesheet preload prefetch",
        },
      },
    },
  ],
}
