import React from "react";
import { graphql } from "gatsby";
import Layout from "components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Grid from "components/global/Grid";
import PageContainer from "components/global/PageContainer";
import Text from "components/global/Text";

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

const StyledGatsbyImage = styled(GatsbyImage)`
  width: 100vw;
`;

const VerticalLine = styled.div`
  width: 1px;
  background-color: ${(props) => props.theme.colors.black};
  height: 100%;
  grid-column: 1 / 2;
  grid-row: span 2;
  justify-self: end;
`;

const StyledCategory = styled(Text)`
  grid-column: 2 / 4;
`;

const StyledCity = styled(Text)`
  grid-column: 4 / 5;
`;

const ProjectTitle = styled.div`
  text-transform: uppercase;
  font-size: 38px;
  line-height: 45px;
  grid-column: 2 / 5;
  margin-top: 185px;
  margin-bottom: 5px;
`;

const HorizontalLine = styled.div`
  height: 1px;
  width: calc(100vw);
  background-color: ${(props) => props.theme.colors.black};
`;

const StyledMissionContainer = styled(PageContainer)`
  padding-bottom: 15px;
`;

const StyledMissionType = styled(Text)`
  padding-top: 15px;
`;

const Project = ({ data }) => {
  const project = data.sanityProject;
  const image = getImage(project.image.asset);

  return (
    <Layout>
      <StyledGatsbyImage image={image} alt={project.name} />
      <Grid>
        <VerticalLine />
        <StyledCategory type="label">{project.category}</StyledCategory>
        <StyledCity type="label">{project.city}</StyledCity>
        <ProjectTitle>{project.name}</ProjectTitle>
      </Grid>
      <HorizontalLine />
      <StyledMissionContainer>
        <StyledMissionType type="label">Mission Pivot Panda</StyledMissionType>
        <p>Add dynamic mission type</p>
      </StyledMissionContainer>
      <HorizontalLine />
    </Layout>
  );
};

export default Project;
