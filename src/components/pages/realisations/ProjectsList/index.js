import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Grid from "components/global/Grid";

const StyledProjectContainer = styled.div`
  padding: 15px 15px;
  margin: 0 -15px;
  border-bottom: 1px solid ${(props) => props.theme.colors.black};
`;

const StyledTextLabel = styled.div`
  font-size: 12px;
  opacity: 0.5;
  line-height: 15px;
  text-transform: uppercase;
`;

const StyledProjectName = styled.div`
  grid-column: 1 / 3;
`;

const StyledProjectCategory = styled.div`
  grid-column: 3 / 5;
`;

const StyledDesktopTags = styled.div`
  display: none;
  @media ${(props) => props.theme.minWidth.md} {
    display: block;
  }
`;

const StyledGatsbyImage = styled(GatsbyImage)`
  margin-top: 15px;
`;

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
                gatsbyImageData(aspectRatio: 1.3)
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
          <StyledProjectContainer key={project.name}>
            <Grid>
              <StyledProjectName>
                <StyledTextLabel>Projet</StyledTextLabel>
                <p>{project.name}</p>
              </StyledProjectName>
              <StyledProjectCategory>
                <StyledTextLabel>Catégorie</StyledTextLabel>
                <p>{project.category}</p>
              </StyledProjectCategory>
              <StyledDesktopTags>
                <p>{project.city}</p>
                <p>{project.surface} m²</p>
              </StyledDesktopTags>
            </Grid>
            <StyledGatsbyImage image={image} alt={project.name} />
          </StyledProjectContainer>
        );
      })}
    </div>
  );
};

export default ProjectsList;
