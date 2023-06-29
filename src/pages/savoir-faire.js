import React from "react";
import styled from "styled-components";
import Layout from "components/Layout";
import Grid from "components/global/Grid";
import Title from "components/global/Title";
import PageContainer from "components/global/PageContainer";
import { StaticImage } from "gatsby-plugin-image";

const StyledContainer = styled.div`
  .gatsby-image-wrapper {
    width: 100%;
    aspect-ratio: ${({ theme }) => theme.aspectRatio.mobile};
    @media ${({ theme }) => theme.minWidth.md} {
      aspect-ratio: ${({ theme }) => theme.aspectRatio.desktop};
    }
  }
`;
const StyledHeroSection = styled(Grid)`
  & > div {
    grid-column: 1 / 5;
    border-left: ${({ theme }) => theme.border};
    padding-left: ${({ theme }) => theme.columnGap.mobile};
    @media ${({ theme }) => theme.minWidth.md} {
      grid-column: 3 / 8;
      padding-left: ${({ theme }) => theme.columnGap.desktop};
    }
    h1 {
      padding: 150px 0 ${({ theme }) => theme.columnGap.mobile};
      @media ${({ theme }) => theme.minWidth.md} {
        padding: 200px 0 100px;
      }
    }
  }
`;

const SavoirFaire = () => {
  return (
    <Layout>
      <StyledContainer>
        <PageContainer>
          <StyledHeroSection>
            <div>
              <Title type="pageTitle">Savoir-faire</Title>
            </div>
          </StyledHeroSection>
        </PageContainer>
        <StaticImage
          src="../assets/imgs/page-savoir-faire-hero-img.jpg"
          alt="Pivot Panda - Savoir-faire"
        />
      </StyledContainer>
    </Layout>
  );
};

export default SavoirFaire;
