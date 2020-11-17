require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
// const queries = require("./src/constants/algolia")
module.exports = {
  siteMetadata: {
    title: `Nykyaikaiset Progressiiviset Hakukonenoptimoidut Verkkosivut Ja Mobiilisovellukset Pienyrittajalle`,
    description: `Laadukasta ja luotettavaa palvelua hyvällä hinta-laatusuhteella.
    Tyylikkäät responsiiviset kotisivut, jotka näyttävät hyvältä niin pöytäkoneilla kuin mobiililaitteillakin.
    Kattavan palveluvalikoiman, josta saat sivuillesi kaiken asiantuntevasta sivuston suunnittelusta ja rakentamisesta sen tehokkaaseen mainostamiseen. `,
    titleTemplate: `%s | Hakukonenoptimoidut Verkkosivut`,
    siteUrl: `https://artifykotisivutairtabledevelop.gtsb.io/`,
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
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://artifykotisivutairtabledevelop.gtsb.io/',
        sitemap: 'https://artifykotisivutairtabledevelop.gtsb.io/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-180499768-1'
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/admin`, `/tags/links`]
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
  ],
}
