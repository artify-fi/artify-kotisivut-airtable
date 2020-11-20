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
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://artifykotisivutairtabledevelop.gtsb.io/',
        sitemap: 'https://artifykotisivutairtabledevelop.gtsb.io/sitemap.xml',
        policy: [{ userAgent: '*', allow: ['/'] }]
      },
    },

    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://artifykotisivutairtabledevelop.gtsb.io/`,
      },
    },

    // {
    //   resolve: 'gatsby-source-apiserver',
    //   options: {
    //     url: 'https://swapi.co/api/people/',
    //     method: 'get',
    //     entityLevel: `results`,
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     typePrefix: 'internal__',
    //     name: `posts`,
    //     params: {
    //       results: 10
    //     },
    //     verboseOutput: true,
    //   }
    // },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-180499768-1'
      }
    },

    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: "Roboto",
            variants: ["300", "400", "500", "600"],
          },
          {
            family: "Merriweather Sans",
            variants: ['400', '500', '600', '700'],
          },
          {
            family: "Open Sans Condensed",
            variants: ['300', '400', '500', '600', '700'],
          },
          {
            family: "Montserrat",
            variants: [`400`, `500`, `600`, `700`],
          },
        ],
      },
    },
  ],
}
