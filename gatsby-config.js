require("dotenv").config()

module.exports = {
  siteMetadata: {
    siteTitle: "CAPED",
    siteTitleDefault: "Caped Clothing",
    siteUrl: "https://caped.gatsbyjs.io/",
    hrefLang: "en",
    siteDescription: "A Gatsby powered E-commmerce clothing site for women",
    author: "Sagor Roy",
  },
  flags: {
    FAST_DEV: true,
    FAST_REFRESH: true,
    DETECT_NODE_MUTATIONS: true,
    PARALLEL_SOURCING: true,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "caped",
        password: process.env.GATSBY_SHOPIFY_SHOP_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Favicon`,
        short_name: `Favicon`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ].filter(Boolean),
}
