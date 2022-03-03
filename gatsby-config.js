require("dotenv").config()

module.exports = {
  siteMetadata: {
    siteTitle: "CAPED",
    siteTitleDefault: "Caped Clothing",
    siteUrl: "https://shopify-demo.gatsbyjs.com",
    hrefLang: "en",
    siteDescription: "A Gatsby powered E-commmerce clothing site for woman",
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
  ].filter(Boolean),
}
