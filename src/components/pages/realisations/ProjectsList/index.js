import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ProjectsList = ({ selectedCategory }) => {
  const data = useStaticQuery(
    graphql`
      query {
        allSanityProject {
          nodes {
            category
            city
            name
            surface
            image {
              asset {
                gatsbyImageData
              }
            }
          }
        }
      }
    `
  );

  const projects = data.allSanityProject.nodes;
  const filteredProjects = selectedCategory
    ? projects.filter((project) => project.category === selectedCategory)
    : projects;

  return (
    <div>
      {filteredProjects.map((project) => {
        const image = getImage(project.image.asset);
        return (
          <div key={project.name}>
            <h2>{project.name}</h2>
            <p>{project.category}</p>
            <p>{project.city}</p>
            <p>{project.surface} m2</p>
            <GatsbyImage image={image} alt={project.name} />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsList;
