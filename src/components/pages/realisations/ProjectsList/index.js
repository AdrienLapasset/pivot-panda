import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Grid from "components/global/Grid";
import PageContainer from "components/global/PageContainer";
import Text from "components/global/Text";

const StyledProjectsList = styled.div`
  @media ${(props) => props.theme.minWidth.md} {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-column-gap: ${(props) => props.theme.columnGap.desktop};
    margin: 0 -10px;
  }
`;

const StyledProjectContainer = styled.div`
  padding: 15px;
  margin: 0 -15px;
  border-bottom: 1px solid ${(props) => props.theme.colors.black};
  border-right: 1px solid ${(props) => props.theme.colors.black};
  @media ${(props) => props.theme.minWidth.md} {
    padding: 25px;
    padding-left: ${(props) => props.paddingLeft};
    grid-column: ${(props) => props.gridColumn};
    display: flex;
    flex-direction: column-reverse;
  }
`;

const StyledText = styled(Text)`
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

const StyledMobileText = styled.div`
  @media ${(props) => props.theme.minWidth.md} {
    display: none;
  }
`;

const StyledDesktopText = styled(Text)`
  display: none;
  @media ${(props) => props.theme.minWidth.md} {
    display: block;
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
    <PageContainer>
      <StyledProjectsList>
        {filteredProjects.map((project, i) => {
          const image = getImage(project.image.asset);
          let gridColumn;
          let paddingLeft;
          if (i % 6 === 0 || i % 6 === 5) {
            gridColumn = "span 3";
          } else {
            gridColumn = "span 2";
          }

          if (i % 3 !== 0) {
            paddingLeft = "30px";
          }

          return (
            <StyledProjectContainer
              key={i}
              gridColumn={gridColumn}
              paddingLeft={paddingLeft}
            >
              <Grid>
                <StyledProjectName>
                  <StyledText type="label">Projet</StyledText>
                  {project.name}
                </StyledProjectName>
                <StyledProjectInfo>
                  <StyledText type="label">Catégorie</StyledText>
                  <StyledMobileText type="label">
                    {project.category}
                  </StyledMobileText>
                  <StyledDesktopText type="label">
                    {project.category}
                  </StyledDesktopText>
                  <StyledDesktopText type="label">
                    {project.city}
                  </StyledDesktopText>
                  <StyledDesktopText type="label">
                    {project.surface} m²
                  </StyledDesktopText>
                </StyledProjectInfo>
              </Grid>
              <StyledGatsbyImage image={image} alt={project.name} />
            </StyledProjectContainer>
          );
        })}
      </StyledProjectsList>
    </PageContainer>
  );
};

export default ProjectsList;
