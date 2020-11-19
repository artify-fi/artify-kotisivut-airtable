require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
// const queries = require("./src/constants/algolia")
module.exports = {
  siteMetadata: {
    title: `Hakukonenoptimoidut verkkosivut ja mobiilisovellukset`,
    description: `Laadukkaat ja luotettavat responsiiviset kotisivut ja mobiilisovellukset 
    jotka näyttävät hyvältä niin pöytäkoneilla kuin mobiililaitteillakin.`,
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
      resolve: 'gatsby-plugin-webfonts',
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["300", "400", "500", "600"],
            },
            {
              family: "Merriweather Sans",
              variants: ['400', '500', '600', '700'],
              text: "Hello",
              formatAgents: {
                woff: `Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko`,
                woff2: `Mozilla/5.0 (Windows NT 10.0; Win64; x64; ServiceUI 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393`,
              },
            },
            {
              family: "Open Sans Condensed",
              variants: ['300', '400', '500', '600', '700'],
              text: "Hello",
              formatAgents: {
                woff: `Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko`,
                woff2: `Mozilla/5.0 (Windows NT 10.0; Win64; x64; ServiceUI 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393`,
              },
            },
            {
              family: "Montserrat",
              variants: [`400`, `500`, `600`, `700`],
              text: "Hello",
              formatAgents: {
                woff: `Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko`,
                woff2: `Mozilla/5.0 (Windows NT 10.0; Win64; x64; ServiceUI 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393`,
              },
            },
          ],
        }
      },
    },
  ],
}
