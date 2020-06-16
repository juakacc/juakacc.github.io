module.exports = {
  siteMetadata: {
    title: `Portfólio do Joaquim`,
    description: `Projeto para divulgação do currículo do Joaquim, espero que gostem.`,
    author: `@juakacc`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Droid Sans", "Droid Serif"],
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `portfolio-joaquim`,
        short_name: `Juakacc`,
        start_url: `/`,
        background_color: `#36cc1f`,
        theme_color: `#36cc1f`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
