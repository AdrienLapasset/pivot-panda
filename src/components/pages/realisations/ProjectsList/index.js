import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Grid from "components/global/Grid";

const StyledProjectsList = styled.div`
  @media ${(props) => props.theme.minWidth.md} {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-column-gap: ${(props) => props.theme.columnGap.desktop};
    margin: 0 -10px;
  }
`;

const StyledProjectContainer = styled.div`
  padding: 15px 15px;
  margin: 0 -15px;
  border-bottom: 1px solid ${(props) => props.theme.colors.black};
  border-right: 1px solid ${(props) => props.theme.colors.black};
  @media ${(props) => props.theme.minWidth.md} {
    padding: 25px;
    grid-column: ${(props) => props.gridColumn};
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
    font-size: 24px;
    line-height: 31px;
    margin-bottom: 15px;
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

const StyledProjectCategory = styled.div`
  @media ${(props) => props.theme.minWidth.md} {
    font-size: 12px;
    opacity: 0.5;
    line-height: 15px;
    text-transform: uppercase;
  }
`;

const StyledDesktopTags = styled.div`
  display: none;
  @media ${(props) => props.theme.minWidth.md} {
    display: block;
    font-size: 12px;
    opacity: 0.5;
    line-height: 15px;
    text-transform: uppercase;
  }
`;

const StyledGatsbyImage = styled(GatsbyImage)`
  margin-top: 15px;
  aspect-ratio: 1.3;
  @media ${(props) => props.theme.minWidth.md} {
    width: 100%;
    height: 26vw;
    margin-top: 0;
    margin-bottom: 25px;
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
    <StyledProjectsList>
      {filteredProjects.map((project, i) => {
        const image = getImage(project.image.asset);
        let gridColumn;
        if (i % 6 === 0 || i % 6 === 5) {
          gridColumn = "span 3";
        } else {
          gridColumn = "span 2";
        }

        return (
          <StyledProjectContainer key={i} gridColumn={gridColumn}>
            <Grid>
              <StyledProjectName>
                <StyledTextLabel>Projet</StyledTextLabel>
                {project.name}
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
    </StyledProjectsList>
  );
};

export default ProjectsList;
