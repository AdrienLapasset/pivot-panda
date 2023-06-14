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
  @media ${(props) => props.theme.minWidth.md} {
    grid-template-rows: calc(100vh - 80px) 50px 50px 50px 1fr;
    row-gap: 25px;
  }
`;

const HeroImage = styled(GatsbyImage)`
  grid-row: 1 / 2;
  grid-column: span 4;
  height: 100%;
  width: 100%;
  border-bottom: solid ${(props) => props.theme.colors.black} 1px;
  @media ${(props) => props.theme.minWidth.md} {
    grid-column: span 7;
  }
`;

const VerticalLine = styled.div`
  width: 1px;
  background-color: ${(props) => props.theme.colors.black};
  height: calc(100% + 30px);
  grid-row: 2 / 4;
  grid-column: 1 / 2;
  justify-self: end;
  @media ${(props) => props.theme.minWidth.md} {
    grid-row: 2 / 6;
    grid-column: 3 / 4;
    height: calc(100% + 50px);
  }
`;

const StyledCategory = styled(Text)`
  grid-row: 2 / 3;
  grid-column: 2 / 4;
  @media ${(props) => props.theme.minWidth.md} {
    grid-column: 4 / 5;
    align-self: start;
  }
`;

const StyledCity = styled(Text)`
  grid-row: 2 / 3;
  grid-column: 4 / 5;
  @media ${(props) => props.theme.minWidth.md} {
    grid-column: 5 / 6;
    align-self: start;
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
  @media ${(props) => props.theme.minWidth.md} {
    grid-row: 2 / 3;
    grid-column: 1 / 3;
    margin-left: 25px;
    border-left: solid ${(props) => props.theme.colors.black} 1px;
    border-right: solid ${(props) => props.theme.colors.black} 1px;
  }
`;

const StyledContainer = styled.div`
  grid-row: 5 / 6;
  grid-column: span 4;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(4, 1fr);
  border-top: solid ${(props) => props.theme.colors.black} 1px;
  @media ${(props) => props.theme.minWidth.md} {
    grid-row: 3 / 4;
    grid-column: 1 / 3;
    grid-template-columns: repeat(2, 1fr);
    padding-left: 0;
    margin-left: 25px;
    border-left: solid ${(props) => props.theme.colors.black} 1px;
    border-right: solid ${(props) => props.theme.colors.black} 1px;
  }
`;

const StyledSurface = styled(PageContainer)`
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  padding-right: 0;
  @media ${(props) => props.theme.minWidth.md} {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    padding-left: 0;
    margin-left: 25px;
  }
`;

const SmallVerticalLine = styled.div`
  width: 1px;
  height: calc(100% + 14px);
  background-color: ${(props) => props.theme.colors.black};
  grid-row: 1 / 2;
  grid-column: 2 / 2;
  @media ${(props) => props.theme.minWidth.md} {
    height: calc(100% + 10px);
  }
`;

const StyledYear = styled(PageContainer)`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
`;

const StyledAddress = styled(PageContainer)`
  grid-row: 6 / 7;
  grid-column: span 4;
  border-top: solid ${(props) => props.theme.colors.black} 1px;
  @media ${(props) => props.theme.minWidth.md} {
    grid-row: 4 / 5;
    grid-column: 1 / 3;
    margin-left: 25px;
    border-top: none;
    border: solid ${(props) => props.theme.colors.black} 1px;
  }
`;

const StyledDescription = styled(PageContainer)`
  grid-row: 7 / 8;
  grid-column: span 4;
  border-top: solid ${(props) => props.theme.colors.black} 1px;
  padding-top: 30px;
  padding-bottom: 30px;
  white-space: pre-line;
  @media ${(props) => props.theme.minWidth.md} {
    grid-row: 5 / 6;
    grid-column: 4 / 8;
  }
`;

const StyledText = styled(Text)`
  padding-top: 15px;
  white-space: pre-line;
  @media ${(props) => props.theme.minWidth.md} {
    padding-top: 0;
  }
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
