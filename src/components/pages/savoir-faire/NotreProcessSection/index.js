import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Layout from "components/Layout";
import Grid from "components/global/Grid";
import Title from "components/global/Title";
import Text from "components/global/Text";
import PageContainer from "components/global/PageContainer";
import ProcessWheel from "./ProcessWheel";
import { StaticImage } from "gatsby-plugin-image";

const StyledContainer = styled.section`
  border-bottom: ${({ theme }) => theme.border};
  margin: 100px 0;
`;
const StyledGrid = styled(Grid)`
  & > div {
    &:first-of-type {
      grid-column: 1 / span 2;
      align-self: flex-start;
      position: sticky;
      top: 100px;
    }
    &:last-of-type {
      grid-column: 4 / span 2;
      display: grid;
    }
  }
`;
const StyledStepDescriptionContainer = styled.div`
  margin: 100px 0 250px;
  & > div {
    opacity: 0.5;
    &:not(:last-child) {
      margin-bottom: 25px;
      padding-bottom: 125px;
      border-bottom: ${({ theme }) => theme.border};
    }
    h3 {
      font-size: 18px;
    }
    &:nth-child(1) {
      opacity: ${({ currentStep }) => currentStep === 1 && "1"};
    }
    &:nth-child(2) {
      opacity: ${({ currentStep }) => currentStep === 2 && "1"};
    }
    &:nth-child(3) {
      opacity: ${({ currentStep }) => currentStep === 3 && "1"};
    }
    &:nth-child(4) {
      opacity: ${({ currentStep }) => currentStep === 4 && "1"};
    }
  }
`;
const NotreProcessSection = () => {
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);
  const step4Ref = useRef(null);
  const headersHeight = 250;
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const handleStep = () => {
      const step1Top = step1Ref.current.getBoundingClientRect().top;
      const step2Top = step2Ref.current.getBoundingClientRect().top;
      const step3Top = step3Ref.current.getBoundingClientRect().top;
      const step4Top = step4Ref.current.getBoundingClientRect().top;
      if (step1Top > headersHeight) {
        setCurrentStep(1);
      }
      if (step1Top <= headersHeight) {
        setCurrentStep(2);
      }
      if (step2Top <= headersHeight) {
        setCurrentStep(3);
      }
      if (step3Top <= headersHeight) {
        setCurrentStep(4);
      }
    };
    window.addEventListener("scroll", handleStep);
    return () => {
      window.removeEventListener("scroll", handleStep);
    };
  }, [step1Ref, step2Ref, step3Ref, step4Ref]);

  return (
    <StyledContainer>
      <PageContainer>
        <StyledGrid>
          <div>
            <Title as="h2">Notre process</Title>
            <ProcessWheel />
          </div>
          <StyledStepDescriptionContainer currentStep={currentStep}>
            <div ref={step1Ref}>
              <Text as="h3" type="projectTitle">
                1. Montage et accompagnement
              </Text>
              <Text>
                Projections de plusieurs scénarios adaptables au bien Chiffrage
                détaillé et simulation budgétaire Étude de faisabilité technique
                et urbanistique
              </Text>
            </div>
            <div ref={step2Ref}>
              <Text as="h3" type="projectTitle">
                2. Recherche de biens uniques
              </Text>
              <Text>
                Pré-visite par nos soins Selon vos critères et avec notre réseau
                et savoir faire. Hotels particuliers Immeubles historiques Biens
                offmarkets Plateaux haussmanniens Ensembles immobiliers
              </Text>
            </div>
            <div ref={step3Ref}>
              <Text as="h3" type="projectTitle">
                3. Etude architecturale et technique
              </Text>
              <Text>
                Pré-visite par nos soins Selon vos critères et avec notre réseau
                et savoir faire. Hotels particuliers Immeubles historiques Biens
                offmarkets Plateaux haussmanniens Ensembles immobiliers
              </Text>
            </div>
            <div ref={step4Ref}>
              <Text as="h3" type="projectTitle">
                4. Montage et accompagnement
              </Text>
              <Text>
                Projections de plusieurs scénarios adaptables au bien Chiffrage
                détaillé et simulation budgétaire Étude de faisabilité technique
                et urbanistique
              </Text>
            </div>
          </StyledStepDescriptionContainer>
        </StyledGrid>
      </PageContainer>
    </StyledContainer>
  );
};

export default NotreProcessSection;
