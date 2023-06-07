import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
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
  }
`;

const StyledProjectContainer = styled(Link)`
  padding-top: 15px;
  @media ${(props) => props.theme.minWidth.md} {
    display: flex;
    flex-direction: column-reverse;
    position: relative;
    grid-column: ${(props) => props.gridColumnProject};
    padding: 25px 0 0 ${(props) => props.paddingLeft};
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
    grid-column: ${(props) => props.gridColumnProjectTags};
    display: flex;
    justify-content: space-between;
    padding-bottom: 13px;
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

const MobileBottomLine = styled.div`
  height: 1px;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.black};
  margin-top: 15px;
  position: relative;
  left: -15px;
  @media ${(props) => props.theme.minWidth.md} {
    display: none;
  }
`;

const DesktopBottomLine = styled.div`
  display: none;
  @media ${(props) => props.theme.minWidth.md} {
    display: block;
    height: 1px;
    width: calc(100vw);
    margin-left: -25px;
    background-color: ${(props) => props.theme.colors.black};
  }
`;

const VerticalLine = styled.div`
  width: 1px;
  background-color: ${(props) => props.theme.colors.black};
  height: 100%;
  position: absolute;
  right: -25px;
  top: 0;
  bottom: 0;
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
            slug {
              current
            }
          }
        }
      }
    `
  );

  const projects = data.allSanityProject.nodes;
  const filteredProjects =
    selectedCategory && selectedCategory !== "Tous les projets"
      ? projects.filter((project) => project.category === selectedCategory)
      : projects;

  return (
    <PageContainer>
      <StyledProjectsList>
        {filteredProjects.map((project, i) => {
          const image = getImage(project.image.asset);
          let gridColumnProject;
          let gridColumnProjectTags;
          if (i % 6 === 0 || i % 6 === 5) {
            gridColumnProject = "span 3";
            gridColumnProjectTags = "span 5";
          } else {
            gridColumnProject = "span 2";
            gridColumnProjectTags = "span 7";
          }

          let paddingLeft;
          if (i % 3 !== 0) {
            paddingLeft = "25px";
          }

          const isFirstInRow = i % 3 === 0;

          return (
            <StyledProjectContainer
              to={"/projet/" + project.slug.current}
              key={i}
              gridColumnProject={gridColumnProject}
              paddingLeft={paddingLeft}
            >
              {isFirstInRow && <DesktopBottomLine />}
              <Grid>
                <StyledProjectName>
                  <StyledText type="label">Projet</StyledText>
                  {project.name}
                </StyledProjectName>
                <StyledProjectInfo
                  gridColumnProjectTags={gridColumnProjectTags}
                >
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
                <VerticalLine />
              </Grid>
              <StyledGatsbyImage image={image} alt={project.name} />
              <MobileBottomLine />
            </StyledProjectContainer>
          );
        })}
      </StyledProjectsList>
    </PageContainer>
  );
};

export default ProjectsList;
