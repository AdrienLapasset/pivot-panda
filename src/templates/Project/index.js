import React from "react";
import { graphql } from "gatsby";
import Layout from "components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Grid from "components/global/Grid";
import PageContainer from "components/global/PageContainer";
import Text from "components/global/Text";
import ImageTextSection from "components/pages/project/ImageTextSection";
import BeforeAfterSlider from "components/pages/project/BeforeAfterSlider";
import ProjectCarousel from "components/pages/project/ProjectCarousel";
import OtherProjectsSection from "components/pages/project/otherProjectsSection";

const StyledHeader = styled(Grid)`
  grid-template-rows: calc(50vh - 23px) 15px calc(50vh - 78px) 60px 60px 60px 1fr;
  row-gap: 15px;
  @media ${(props) => props.theme.minWidth.md} {
    grid-template-rows: calc(100vh - 65px) 75px 75px 75px 1fr;
    row-gap: 25px;
  }
`;

const StyledHeroImage = styled(GatsbyImage)`
  grid-row: 1 / 2;
  grid-column: span 4;
  height: 100%;
  width: 100%;
  @media ${(props) => props.theme.minWidth.md} {
    grid-column: span 7;
  }
`;

const StyledHeroVideo = styled.video`
  grid-row: 1 / 2;
  grid-column: span 4;
  height: 100%;
  width: 100%;
  object-fit: cover;
  @media ${(props) => props.theme.minWidth.md} {
    grid-column: span 7;
  }
`;

const StyledVerticalLine = styled.div`
  width: 1px;
  background-color: ${(props) => props.theme.colors.black};
  height: calc(100% + 30px);
  grid-row: 2 / 4;
  grid-column: 1 / 2;
  justify-self: end;
  @media ${(props) => props.theme.minWidth.md} {
    grid-row: 2 / 6;
    grid-column: 3 / 4;
    position: relative;
    top: -13px;
    height: calc(100% + 25px);
  }
`;

const StyledCategory = styled(Text)`
  grid-row: 2 / 3;
  grid-column: 2 / 4;
  @media ${(props) => props.theme.minWidth.md} {
    grid-column: 4 / 5;
    align-self: start;
    padding-top: 20px;
  }
`;

const StyledCity = styled(Text)`
  grid-row: 2 / 3;
  grid-column: 4 / 5;
  @media ${(props) => props.theme.minWidth.md} {
    grid-column: 5 / 6;
    align-self: start;
    padding-top: 20px;
  }
`;

const StyledTitle = styled(PageContainer)`
  grid-row: 3 / 4;
  grid-column: 2 / 5;
  padding-left: 0;
  text-transform: uppercase;
  font-size: 38px;
  line-height: 45px;
  align-self: end;
  @media ${(props) => props.theme.minWidth.md} {
    grid-row: 4 / 5;
    grid-column: 4 / 8;
    font-size: 70px;
    line-height: 75px;
    border-bottom: solid ${(props) => props.theme.colors.black} 1px;
    margin-left: -25px;
    padding-left: 25px;
    padding-bottom: 15px;
  }
`;

const StyledGridContainer = styled.div`
  grid-row: 4 / 7;
  grid-column: span 4;
  display: grid;
  grid-template-rows: 60px 60px 60px;
  border-top: solid ${(props) => props.theme.colors.black} 1px;
  row-gap: 15px;
  @media ${(props) => props.theme.minWidth.md} {
    border: solid ${(props) => props.theme.colors.black} 1px;
    grid-row: 2 / 5;
    grid-column: 1 / 3;
    grid-template-rows: 1fr 1fr 1fr;
    row-gap: 0;
    margin-left: 25px;
    height: 275px;
  }
`;

const StyledMission = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(4, 1fr);
  border-top: solid ${(props) => props.theme.colors.black} 1px;
  margin-bottom: -15px;
  @media ${(props) => props.theme.minWidth.md} {
    grid-template-columns: repeat(2, 1fr);
    padding-left: 0;
    margin-bottom: 0;
  }
`;

const StyledSurface = styled(PageContainer)`
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  padding-right: 0;
  @media ${(props) => props.theme.minWidth.md} {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    padding-left: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const StyledYear = styled(PageContainer)`
  grid-row: 1 / 2;
  grid-column: 3 / 5;
  border-left: solid ${(props) => props.theme.colors.black} 1px;
  @media ${(props) => props.theme.minWidth.md} {
    grid-column: 2 / 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const StyledClient = styled(PageContainer)`
  border-top: solid ${(props) => props.theme.colors.black} 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledDescription = styled(PageContainer)`
  grid-row: 7 / 8;
  grid-column: span 4;
  padding-top: 30px;
  padding-bottom: 45px;
  white-space: pre-line;
  border-top: solid ${(props) => props.theme.colors.black} 1px;
  @media ${(props) => props.theme.minWidth.md} {
    grid-row: 5 / 6;
    grid-column: 4 / 6;
    margin-left: -25px;
    padding-top: 0;
    padding-bottom: 160px;
    border-top: none;
  }
`;

const StyledText = styled(Text)`
  padding-top: 15px;
  white-space: pre-line;
  @media ${(props) => props.theme.minWidth.md} {
    padding-top: 0;
  }
`;

export const query = graphql`
  query ProjectBySlug($slug: String!) {
    sanityProject(slug: { current: { eq: $slug } }) {
      category
      city
      name
      surface
      mission
      year
      client
      description
      image {
        asset {
          gatsbyImageData
        }
      }
      slug {
        current
      }
      video {
        asset {
          url
        }
      }
      ImageTextSections {
        image {
          asset {
            gatsbyImageData
          }
        }
        text
        orientation
      }
      beforeAfterImages {
        imageAfter {
          asset {
            gatsbyImageData
          }
        }
        imageBefore {
          asset {
            gatsbyImageData
          }
        }
        text
      }
      isFeaturedProject
      projectCarousel {
        image {
          asset {
            gatsbyImageData(height: 600)
          }
        }
      }
    }
  }
`;

const Project = ({ data }) => {
  const {
    name,
    category,
    city,
    description,
    mission,
    surface,
    client,
    image,
    year,
    video,
    ImageTextSections,
    beforeAfterImages,
    projectCarousel,
    isFeaturedProject,
  } = data.sanityProject;
  const heroImage = getImage(image.asset);
  const projectYear = new Date(year).getFullYear();
  const heroVideo = video && video.asset.url;
  return (
    <Layout>
      <StyledHeader>
        {heroVideo ? (
          <StyledHeroVideo autoPlay muted loop>
            <source src={heroVideo} type="video/mp4" />
          </StyledHeroVideo>
        ) : (
          <StyledHeroImage image={heroImage} alt={name} />
        )}
        <StyledVerticalLine />
        <StyledCategory type="label">{category}</StyledCategory>
        <StyledCity type="label">{city}</StyledCity>
        <StyledTitle>{name}</StyledTitle>
        <StyledGridContainer>
          <StyledMission>
            <StyledText type="label">Mission Pivot Panda</StyledText>
            <p>{mission}</p>
          </StyledMission>
          <StyledContainer>
            <StyledSurface>
              <StyledText type="label">Surface</StyledText>
              <p>{surface} m²</p>
            </StyledSurface>
            <StyledYear>
              <StyledText type="label">Année</StyledText>
              <p>{projectYear}</p>
            </StyledYear>
          </StyledContainer>
          <StyledClient>
            <StyledText type="label">Client</StyledText>
            <p>{client}</p>
          </StyledClient>
        </StyledGridContainer>
        <StyledDescription>
          <StyledText>{description}</StyledText>
        </StyledDescription>
      </StyledHeader>
      {ImageTextSections.map(({ image, text, orientation }) => (
        <ImageTextSection
          key={text}
          image={image}
          text={text}
          orientation={orientation}
        />
      ))}
      {beforeAfterImages.map(({ imageBefore, imageAfter, text }) => (
        <BeforeAfterSlider
          key={text}
          imageBefore={imageBefore}
          imageAfter={imageAfter}
          text={text}
        />
      ))}
      <ProjectCarousel images={projectCarousel} />
      <OtherProjectsSection isFeaturedProject={isFeaturedProject} />
    </Layout>
  );
};

export default Project;
