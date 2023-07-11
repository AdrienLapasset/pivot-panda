import * as React from "react";
import styled from "styled-components";
import Layout from "components/Layout";
import HeroSection from "components/pages/home/HeroSection";
import SectionHeader from "components/pages/home/SectionHeader";
import NumbersSection from "components/pages/home/NumbersSection";
import ProjectsSection from "components/pages/home/ProjectsSection";
import NewsSection from "components/pages/home/NewsSection";
import { Link } from "gatsby";

const StyledSectionHeader = styled(SectionHeader)`
  margin-top: 15px;
  @media ${(props) => props.theme.minWidth.md} {
    margin-top: 35px;
  }
  .intro {
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
    <Layout>
      <div className="pageAnimation">
        <HeroSection />
        <StyledSectionHeader
          title="Dénicheurs et concepteurs de votre futur espace"
          buttonText="Savoir-faire"
          buttonTo="savoir-faire"
        >
          <div className="intro">
            En tant que contractant général, Pivot Panda réalise différents
            types de missions, de la conception de projet à la réalisation des
            travaux, avec&nbsp;
            <Link className="pandaInvest" to="/panda-invest">
              Panda Invest
            </Link>
            &nbsp;en tant qu’opérateur immobilier.
          </div>
        </StyledSectionHeader>
        <NumbersSection />
        <ProjectsSection />
        <NewsSection />
      </div>
    </Layout>
  );
};

export default IndexPage;
