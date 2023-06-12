import React from "react";
import { graphql } from "gatsby";

export const query = graphql`
  query ProjectBySlug($slug: String!) {
    sanityProject(slug: { current: { eq: $slug } }) {
      category
      city
      name
      surface
      image {
        asset {
          gatsbyImageData
        }
      }
      slug {
        current
      }
    }
  }
`;

const Project = ({ data }) => {
  const project = data.sanityProject;
  return (
    <div>
      <h1>{project.name}</h1>
    </div>
  );
};

export default Project;
