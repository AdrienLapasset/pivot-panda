/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Pivot Panda`,
    siteUrl: `https://www.yourdomain.tld`,
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
        //enables real-time preview, transfer token into environment variable
        token:
          "skaSSnr4RVqeNFO9BAX8USaAjqgIOe8KYrZt0M0Jmx0Illj58HISvySctU5biBLnlboWGGzT0BMhXVdgIaXj9N1HZTcZqzPXROmvOvmxOd21jo0WKhd7tiP55jELnJcX4ZiKuc1kuipFJxhVHXoUqWm89IFbAUoEvNhJBySoIWqmLMnLzV6L",
        watchMode: true, //real-time content preview
        overlayDrafts: true, //real-time content editing
      },
    },
  ],
};
