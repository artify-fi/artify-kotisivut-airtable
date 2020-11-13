require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
// const queries = require("./src/constants/algolia")
module.exports = {
  siteMetadata: {
    title: "Nykyaikaiset Progressiiviset Hakukonenoptimoidut Verkkosivut Ja Mobiilisovellukset Pienyrittajalle",
    description: "This is WebDev Portfolio Site",
    author: "@art_bachmann",
    twitterUsername: "@artbachmann",
    image: "/twitter-img.png",
    siteUrl: "https://artify.fi",
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-180499768-1'
      }
    },

    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Proza Libre',
            variants: ['400', '500', '600', '700'],
          },
          {
            family: 'Open Sans',
            variants: ['200', '400', '500', '600', '700'],
          },
          {
            family: `Montserrat`,
            variants: [`400`, `500`, `600`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-180499768-1'
      }
    },
    // {
    //   resolve: `gatsby-source-airtable`,
    //   options: {
    //     apiKey: process.env.GATSBY_AIRTABLE_API,
    //     concurrency: 5,
    //     tables: [
    //       {
    //         baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
    //         tableName: `Projects`,
    //         mapping: { image: `fileNode` },
    //       },
    //       {
    //         baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
    //         tableName: `Customers`,
    //         mapping: { image: `fileNode` },
    //       },
    //     ],
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-algolia`,
    //   options: {
    //     appId: process.env.GATSBY_ALGOLIA_APP_ID,
    //     apiKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
    //     indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
    //     queries: require("./src/constants/algolia"),
    //     chunkSize: 10000,
    //   },
    // },
  ],
}
