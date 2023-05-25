import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Grid from "components/global/Grid";

const StyledProjectContainer = styled.div`
  padding: 15px 15px;
  margin: 0 -15px;
  border-bottom: 1px solid ${(props) => props.theme.colors.black};
  @media ${(props) => props.theme.minWidth.md} {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const StyledTextLabel = styled.div`
  font-size: 12px;
  opacity: 0.5;
  line-height: 15px;
  text-transform: uppercase;
  @media ${(props) => props.theme.minWidth.md} {
    display: none;
  }
`;

const StyledProjectName = styled.div`
  grid-column: 1 / 3;
  @media ${(props) => props.theme.minWidth.md} {
    grid-column: 1 / 8;
  }
`;

const StyledProjectInfo = styled.div`
  grid-column: 3 / 5;
  @media ${(props) => props.theme.minWidth.md} {
    grid-column: 1 / 8;
    display: flex;
    justify-content: space-between;
  }
`;

const StyledProjectCategory = styled.div``;

const StyledDesktopTags = styled.div`
  display: none;
  @media ${(props) => props.theme.minWidth.md} {
    display: block;
  }
`;

const StyledGatsbyImage = styled(GatsbyImage)`
  margin-top: 15px;
  aspect-ratio: 1.3;
  @media ${(props) => props.theme.minWidth.md} {
    aspect-ratio: auto;
    width: 100%;
  }
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
    <Grid>
      {filteredProjects.map((project, i) => {
        const image = getImage(project.image.asset);
        //commencer à afficher la meme ligne
        //créer une variable gridrow qui itère tous les 3 (1,1,1,2,2,2...) et donner un style pour les impair et pour les pair
        //et mettre la gridrow dans un usestate si besoin pour amener la donnnée au styled component

        // const gridColumnStart = i % 3 === 0 ? 1 : i % 3 === 1 ? 4 : 6;
        // const gridColumnEnd = i % 3 === 0 ? "span 3" : "span 2";

        return (
          <StyledProjectContainer
            key={i}
            // gridColumnStart={gridColumnStart}
            // gridColumnEnd={gridColumnEnd}
          >
            <Grid>
              <StyledProjectName>
                <StyledTextLabel>Projet</StyledTextLabel>
                <p>{project.name}</p>
              </StyledProjectName>
              <StyledProjectInfo>
                <StyledTextLabel>Catégorie</StyledTextLabel>
                <StyledProjectCategory>
                  {project.category}
                </StyledProjectCategory>
                <StyledDesktopTags>{project.city}</StyledDesktopTags>
                <StyledDesktopTags>{project.surface} m²</StyledDesktopTags>
              </StyledProjectInfo>
            </Grid>
            <StyledGatsbyImage image={image} alt={project.name} />
          </StyledProjectContainer>
        );
      })}
    </Grid>
  );
};

export default ProjectsList;
