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
      mission
      year
      address
      description
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

const StyledHero = styled(Grid)`
  height: calc(100vh - 57px);
  grid-template-rows: 1fr 30px 1fr;
`;

const StyledGatsbyImage = styled(GatsbyImage)`
  grid-column: 1 / 5;
  grid-row: span 1;
  height: 100%;
  width: 100%;
  border-bottom: solid ${(props) => props.theme.colors.black} 1px;
`;

const VerticalLine = styled.div`
  width: 1px;
  background-color: ${(props) => props.theme.colors.black};
  height: 100%;
  grid-column: 1 / 2;
  grid-row: 2 / 4;
  justify-self: end;
`;

const StyledCategory = styled(Text)`
  grid-column: 2 / 4;
  padding-top: 15px;
`;

const StyledCity = styled(Text)`
  grid-column: 4 / 5;
  padding-top: 15px;
`;

const ProjectTitle = styled.div`
  text-transform: uppercase;
  font-size: 38px;
  line-height: 45px;
  grid-column: 2 / 5;
  align-self: end;
  padding-bottom: 15px;
`;

const HorizontalLine = styled.div`
  height: 1px;
  width: calc(100vw);
  background-color: ${(props) => props.theme.colors.black};
`;

const StyledContainer = styled(PageContainer)`
  padding-bottom: 15px;
`;

const StyledText = styled(Text)`
  padding-top: 15px;
`;

const StyledDescription = styled(Text)`
  padding-top: 30px;
  padding-bottom: 30px;
  white-space: pre-line;
`;

const SmallVerticalLine = styled.div`
  width: 1px;
  height: 100%;
  background-color: ${(props) => props.theme.colors.black};
  justify-self: end;
`;

const Project = ({ data }) => {
  const project = data.sanityProject;
  const image = getImage(project.image.asset);
  const projectYear = new Date(project.year).getFullYear();

  return (
    <Layout>
      <StyledHero>
        <StyledGatsbyImage image={image} alt={project.name} />
        <VerticalLine />
        <StyledCategory type="label">{project.category}</StyledCategory>
        <StyledCity type="label">{project.city}</StyledCity>
        <ProjectTitle>{project.name}</ProjectTitle>
      </StyledHero>
      <HorizontalLine />
      <StyledContainer>
        <StyledText type="label">Mission Pivot Panda</StyledText>
        <p>{project.mission}</p>
      </StyledContainer>
      <HorizontalLine />
      <Grid>
        <StyledContainer>
          <StyledText type="label">Surface</StyledText>
          <p>{project.surface} m²</p>
        </StyledContainer>
        <SmallVerticalLine />
        <StyledContainer>
          <StyledText type="label">Année</StyledText>
          <p>{projectYear}</p>
        </StyledContainer>
      </Grid>
      <HorizontalLine />
      <StyledContainer>
        <StyledText type="label">Adresse</StyledText>
        <p>{project.address}</p>
      </StyledContainer>
      <HorizontalLine />
      <StyledContainer>
        <StyledDescription>{project.description}</StyledDescription>
      </StyledContainer>
      <HorizontalLine />
    </Layout>
  );
};

export default Project;
