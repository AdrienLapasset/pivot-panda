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
`;
const StyledGrid = styled(Grid)`
  margin: 100px 0;
  & > div {
    &:first-of-type {
      grid-column: 1 / span 2;
      align-self: flex-start;
    }
    &:last-of-type {
      grid-column: 4 / span 3;
      display: grid;
    }
  }
`;
const NotreProcessSection = () => {
  // const step2Ref = useRef(null);
  // const headersHeight = 400;
  // const [currentStep, setCurrentStep] = useState(1);

  // useEffect(() => {
  //   const handleStep = () => {
  //     const step2Top = step2Ref.current.getBoundingClientRect().top;
  //     const step2Bottom = step2Ref.current.getBoundingClientRect().bottom;
  //     if (step2Top >= headersHeight) {
  //       setCurrentStep(1);
  //     }
  //     if (step2Top < headersHeight) {
  //       setCurrentStep(2);
  //     }
  //     if (step2Bottom <= headersHeight) {
  //       setCurrentStep(3);
  //     }
  //   };
  //   window.addEventListener("scroll", handleStep);
  //   return () => {
  //     window.removeEventListener("scroll", handleStep);
  //   };
  // }, [step2Ref]);

  return (
    <StyledContainer>
      <PageContainer>
        <StyledGrid>
          <div>
            <Title as="h2">Notre process</Title>
            <ProcessWheel />
          </div>
          <div>content</div>
        </StyledGrid>
      </PageContainer>
    </StyledContainer>
  );
};

export default NotreProcessSection;
