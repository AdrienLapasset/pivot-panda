import * as React from "react";
import styled from "styled-components";
import Layout from "components/Layout";
import HeroSection from "components/pages/home/HeroSection";
import SectionHeader from "components/pages/home/SectionHeader";
import NumbersSection from "components/pages/home/NumbersSection";
import ProjectsSection from "components/pages/home/ProjectsSection";
import NewsSection from "components/pages/home/NewsSection";
import { Link } from "gatsby";
import Seo from "components/Seo";

const StyledSectionHeader = styled(SectionHeader)`
  margin-top: 15px;
  @media ${(props) => props.theme.minWidth.md} {
    margin-top: 35px;
  }
  p {
    @media ${(props) => props.theme.minWidth.md} {
      font-size: 18px;
    }
  }
  a.pandaInvest {
    display: inline-block;
    text-decoration: underline;
    @media ${(props) => props.theme.minWidth.md} {
      font-size: 18px;
    }
  }
`;

const IndexPage = () => {
  return (
    <>
      <Seo />
      <Layout>
        <div className="pageAnimation">
          <HeroSection />
          <StyledSectionHeader
            title="Dénicheurs et concepteurs de votre futur espace"
            buttonText="Savoir-faire"
            buttonTo="savoir-faire"
          >
            Pivot Panda développe pour ses clients des projets de la recherche
            de foncier en passant par la conception et jusqu’à la réalisation
            des travaux avec comme prisme permanent : répondre aux bons usages !{" "}
            <br />
            Pivot Panda s’appuie aussi sur&nbsp;
            <Link className="pandaInvest" to="/panda-invest">
              Panda Invest
            </Link>
            &nbsp;pour prendre part à des projets soit à valeur ajoutée, soit
            patrimonial en tertiaire et activité ou hôtellerie.
          </StyledSectionHeader>
          <NumbersSection />
          <ProjectsSection />
          <NewsSection />
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
