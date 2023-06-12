const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const Project = path.resolve("./src/templates/Project/index.js");

  const projectQuery = await graphql(`
    query {
      allSanityProject {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (projectQuery.errors) {
    reporter.panicOnBuild(
      `There was an error loading Sanity projects`,
      projectQuery.errors
    );
    return;
  }

  const projects = projectQuery.data.allSanityProject.edges;

  if (projects.length > 0) {
    projects.forEach((project) => {
      const path = `projet/${project.node.slug.current}`;
      createPage({
        path,
        component: Project,
        context: {
          slug: project.node.slug.current,
        },
      });
    });
  }
};
