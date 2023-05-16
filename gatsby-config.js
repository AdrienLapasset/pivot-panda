/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Pivot Panda`,
    siteUrl: `https://www.pivotpanda.com`,
    description: `Nous travaillons actuellement sur notre nouveau site. Pendant ce temps, nous vous prions de bien vouloir patienter.`,
    image: `/assets/logo.svg`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-root-import",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "pp1ujuyb",
        dataset: "production",
      },
    },
  ],
};
