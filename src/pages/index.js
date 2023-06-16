import * as React from "react";
import styled from "styled-components";
import Layout from "components/Layout";
import HeroSection from "components/pages/home/HeroSection";
import SectionHeader from "components/pages/home/SectionHeader";
import NumbersSection from "components/pages/home/NumbersSection";
import ProjectsSection from "components/pages/home/ProjectsSection";

const StyledSectionHeader = styled(SectionHeader)`
  margin-top: 15px;
  @media ${(props) => props.theme.minWidth.md} {
    margin-top: 35px;
  }
`;

const IndexPage = () => {
  return (
    <Layout>
      <HeroSection />
      <StyledSectionHeader
        title="Dénicheurs et concepteurs de votre futur espace"
        buttonText="nos métiers"
        buttonTo="savoir-faire"
      >
        En tant que contractant général, Pivot Panda réalise différents types de
        missions, de la conception de projet à la réalisation des travaux, avec
        Panda Invest en tant qu’opérateur immobilier.
      </StyledSectionHeader>
      <NumbersSection />
      <ProjectsSection />
    </Layout>
  );
};

export default IndexPage;
