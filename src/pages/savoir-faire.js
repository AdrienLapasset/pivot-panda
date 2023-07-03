import React from "react";
import styled from "styled-components";
import Layout from "components/Layout";
import Grid from "components/global/Grid";
import Title from "components/global/Title";
import Text from "components/global/Text";
import PageContainer from "components/global/PageContainer";
import NosMetiersSectionMobile from "components/pages/savoir-faire/NosMetiersSectionMobile";
import NosMetiersSectionDesktop from "components/pages/savoir-faire/NosMetiersSectionDesktop";
import NotreProcessSection from "components/pages/savoir-faire/NotreProcessSection";
import { StaticImage } from "gatsby-plugin-image";

const StyledContainer = styled.div`
  .gatsby-image-wrapper {
    width: 100%;
    aspect-ratio: ${({ theme }) => theme.aspectRatio.mobile};
    @media ${({ theme }) => theme.minWidth.md} {
      aspect-ratio: ${({ theme }) => theme.aspectRatio.desktop};
    }
  }
  .nosMetiersSection {
    & > section {
      &:first-of-type {
        @media ${({ theme }) => theme.minWidth.md} {
          display: none;
        }
      }
      &:last-of-type {
        display: none;
        @media ${({ theme }) => theme.minWidth.md} {
          display: block;
        }
      }
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
const StyledApproche = styled(Grid)`
  border-bottom: ${({ theme }) => theme.border};
  & > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: ${(props) => props.theme.columnGap.mobile};
    grid-column: 1 / 5;
    @media ${({ theme }) => theme.minWidth.md} {
      border-left: ${({ theme }) => theme.border};
      grid-column-gap: ${(props) => props.theme.columnGap.desktop};
      grid-column: 4 / 8;
    }
    h2 {
      grid-column: 1 / 5;
      padding: ${({ theme }) => theme.columnGap.mobile} 0 75px
        ${({ theme }) => theme.columnGap.mobile};
      @media ${({ theme }) => theme.minWidth.md} {
        padding: ${({ theme }) => theme.columnGap.desktop} 0 175px
          ${({ theme }) => theme.columnGap.desktop};
      }
    }
    p {
      margin-bottom: ${({ theme }) => theme.columnGap.mobile};
      padding-left: ${({ theme }) => theme.columnGap.mobile};
      grid-column: 1 / 5;
      @media ${({ theme }) => theme.minWidth.md} {
        grid-column: 1 / 3;
        margin-bottom: ${({ theme }) => theme.columnGap.desktop};
        padding-left: ${({ theme }) => theme.columnGap.desktop};
      }
      &:last-of-type {
        margin-bottom: 120px;
      }
    }
  }
`;
const StyledLequipeSection = styled.section`
  border-bottom: ${({ theme }) => theme.border};
  padding-bottom: 15px;
  @media ${({ theme }) => theme.minWidth.md} {
    padding-bottom: 25px;
  }
  .grid {
    margin-bottom: 25px;
    display: block;
    @media ${({ theme }) => theme.minWidth.md} {
      display: grid;
      margin-bottom: 50px;
    }
    h2 {
      margin-bottom: 40px;
    }
    p {
      grid-column: 4 / span 2;
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
        <StyledApproche>
          <div>
            <Title as="h2">
              Une approche
              <br />
              simple et agile
            </Title>
            <Text>
              Pivot Panda n’est pas une entreprise de travaux, un fournisseur de
              mobilier, un consultant d’accompagnement en organisation.
            </Text>
            <Text>
              Notre vocation est de concevoir un environnement adapte à notre
              client, et pour cela nous nous appuyons sur une démarche issue du
              Design Thinking simple et agile, qui mobilise des outils de
              co-conception et qui font de vos collaborateurs des acteurs dans
              la conception de votre futur Work Place pour ensuite les mettre en
              œuvre.
            </Text>
          </div>
        </StyledApproche>
        <div className="nosMetiersSection">
          <NosMetiersSectionMobile />
          <NosMetiersSectionDesktop />
        </div>
        <NotreProcessSection />
        <StyledLequipeSection>
          <PageContainer>
            <Grid className="grid">
              <Title as="h2">L'équipe</Title>
              <Text>
                Pivot Panda, est organisé autour de 4 associés et 5
                collaborateurs.
              </Text>
            </Grid>
            <StaticImage
              src="../assets/imgs/l-equipe.jpg"
              alt="Pivot Panda - Savoir-faire"
            />
          </PageContainer>
        </StyledLequipeSection>
      </StyledContainer>
    </Layout>
  );
};

export default SavoirFaire;
