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
      contentBlocks {
        image {
          asset {
            gatsbyImageData
          }
        }
        text
      }
    }
  }
`;

const StyledHeader = styled(Grid)`
  grid-template-rows: calc(50vh - 23px) 15px calc(50vh - 78px) 60px 60px 60px 1fr;
  row-gap: 15px;
`;

const HeroImage = styled(GatsbyImage)`
  grid-row: 1 / 2;
  grid-column: span 4;
  height: 100%;
  width: 100%;
  border-bottom: solid ${(props) => props.theme.colors.black} 1px;
`;

const VerticalLine = styled.div`
  width: 1px;
  background-color: ${(props) => props.theme.colors.black};
  height: calc(100% + 30px);
  grid-row: 2 / 4;
  grid-column: 1 / 2;
  justify-self: end;
`;

const StyledCategory = styled(Text)`
  grid-row: 2 / 3;
  grid-column: 2 / 4;
`;

const StyledCity = styled(Text)`
  grid-row: 2 / 3;
  grid-column: 4 / 5;
`;

const StyledTitle = styled.div`
  grid-row: 3 / 4;
  grid-column: 2 / 5;
  text-transform: uppercase;
  font-size: 38px;
  line-height: 45px;
  align-self: end;
  @media ${(props) => props.theme.minWidth.md} {
    font-size: 70px;
    line-height: 75px;
  }
`;

// const HorizontalLine = styled.div`
//   height: 1px;
//   width: calc(100vw);
//   background-color: ${(props) => props.theme.colors.black};
// `;

const StyledMission = styled(PageContainer)`
  grid-row: 4 / 5;
  grid-column: span 4;
  border-top: solid ${(props) => props.theme.colors.black} 1px;
`;

const StyledContainer = styled.div`
  grid-row: 5 / 6;
  grid-column: span 4;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(4, 1fr);
  border-top: solid ${(props) => props.theme.colors.black} 1px;
`;

const StyledSurface = styled(PageContainer)`
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  padding-right: 0;
`;

const SmallVerticalLine = styled.div`
  width: 1px;
  height: calc(100% + 14px);
  background-color: ${(props) => props.theme.colors.black};
  grid-row: 1 / 2;
  grid-column: 3 / 3;
`;

const StyledYear = styled(PageContainer)`
  grid-row: 1 / 2;
  grid-column: 3 / 5;
`;

const StyledAddress = styled(PageContainer)`
  grid-row: 6 / 7;
  grid-column: span 4;
  border-top: solid ${(props) => props.theme.colors.black} 1px;
`;

const StyledDescription = styled(PageContainer)`
  grid-row: 7 / 8;
  grid-column: span 4;
  border-top: solid ${(props) => props.theme.colors.black} 1px;
  padding-top: 30px;
  padding-bottom: 30px;
  white-space: pre-line;
`;

const StyledText = styled(Text)`
  padding-top: 15px;
  white-space: pre-line;
`;

const StyledGatsbyImage = styled(GatsbyImage)`
  margin: 15px 0;
`;

// const ParagraphSeparator = styled(HorizontalLine)`
//   margin-top: 60px;
// `;

const Project = ({ data }) => {
  const project = data.sanityProject;
  const image = getImage(project.image.asset);
  const projectYear = new Date(project.year).getFullYear();

  return (
    <Layout>
      <StyledHeader>
        <HeroImage image={image} alt={project.name} />
        <VerticalLine />
        <StyledCategory type="label">{project.category}</StyledCategory>
        <StyledCity type="label">{project.city}</StyledCity>
        <StyledTitle>{project.name}</StyledTitle>
        {/* <HorizontalLine /> */}
        <StyledMission>
          <StyledText type="label">Mission Pivot Panda</StyledText>
          <p>{project.mission}</p>
        </StyledMission>
        <StyledContainer>
          <StyledSurface>
            <StyledText type="label">Surface</StyledText>
            <p>{project.surface} m²</p>
          </StyledSurface>
          <SmallVerticalLine />
          <StyledYear>
            <StyledText type="label">Année</StyledText>
            <p>{projectYear}</p>
          </StyledYear>
        </StyledContainer>
        {/* <HorizontalLine /> */}
        <StyledAddress>
          <StyledText type="label">Adresse</StyledText>
          <p>{project.address}</p>
        </StyledAddress>
        {/* <HorizontalLine /> */}
        <StyledDescription>
          <StyledText>{project.description}</StyledText>
        </StyledDescription>
        {/* <HorizontalLine /> */}
      </StyledHeader>
      {project.contentBlocks.map((block, i) => {
        if (block.image) {
          const blockImage = getImage(block.image.asset);
          if (block.text) {
            return (
              <div key={i}>
                <PageContainer>
                  <StyledGatsbyImage
                    image={blockImage}
                    alt={`Block image ${i}`}
                  />
                  <StyledText>{block.text}</StyledText>
                </PageContainer>
                {/* <ParagraphSeparator /> */}
              </div>
            );
          } else {
            return (
              <div key={i}>
                <PageContainer>
                  <StyledGatsbyImage
                    image={blockImage}
                    alt={`Block image ${i}`}
                  />
                </PageContainer>
                {/* <ParagraphSeparator /> */}
              </div>
            );
          }
        } else {
          return (
            <div key={i}>
              <PageContainer>
                <StyledText>{block.text}</StyledText>
              </PageContainer>
              {/* <ParagraphSeparator /> */}
            </div>
          );
        }
      })}
    </Layout>
  );
};

export default Project;
