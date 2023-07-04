import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Title from "components/global/Title";
import Text from "components/global/Text";
import PageContainer from "components/global/PageContainer";
import { StaticImage } from "gatsby-plugin-image";

const StyledContainer = styled.section`
  h2 {
    margin: 70px 0 15px;
  }
  border-bottom: ${({ theme }) => theme.border};
`;
const StyledMobileheader = styled.div`
  border-top: ${({ theme }) => theme.border};
  border-bottom: ${({ theme }) => theme.border};
  padding: 15px 0;
  position: sticky;
  top: 61px;
  background-color: white;
  z-index: 1;
  margin-bottom: 60px;
  text-transform: uppercase;
  font-size: 16px;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  aside {
    font-size: 14px;
    border: ${({ theme }) => theme.border};
    border-radius: 100px;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: ${({ theme }) => theme.colors.black};
  }
`;
const StyledBody = styled.div`
  p {
    margin: 15px 0 30px;
  }
  .gatsby-image-wrapper {
    aspect-ratio: 0.75;
    margin-bottom: 150px;
  }
  & > div > div {
    &:last-of-type {
      .gatsby-image-wrapper {
        margin-bottom: 15px;
      }
    }
  }
`;

const NosMetiersSection = () => {
  const step2Ref = useRef(null);
  const headersHeight = 400;
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const handleStep = () => {
      const step2Top = step2Ref.current.getBoundingClientRect().top;
      const step2Bottom = step2Ref.current.getBoundingClientRect().bottom;
      if (step2Top >= headersHeight) {
        setCurrentStep(1);
      }
      if (step2Top < headersHeight) {
        setCurrentStep(2);
      }
      if (step2Bottom <= headersHeight) {
        setCurrentStep(3);
      }
    };
    window.addEventListener("scroll", handleStep);
    return () => {
      window.removeEventListener("scroll", handleStep);
    };
  }, [step2Ref]);

  return (
    <StyledContainer>
      <PageContainer>
        <Title as="h2">nos métiers</Title>
      </PageContainer>
      <StyledMobileheader>
        <PageContainer>
          {currentStep === 1
            ? "Stratégie immobilière"
            : currentStep === 2
            ? "conception"
            : currentStep === 3
            ? "réalisation des travaux"
            : ""}
          <aside>{currentStep}</aside>
        </PageContainer>
      </StyledMobileheader>
      <StyledBody>
        <PageContainer>
          <div>
            <Text as="h3" type="projectTitle">
              Le panda dénicheur
            </Text>
            <Text>
              Nous vous guidons de manière singulière en commençant par la
              recherche du bien immobilier qui vous correspond, pour ensuite
              définir et mettre en œuvre votre projet immobilier.
            </Text>
            <StaticImage
              src="../../../../assets/imgs/page-savoir-faire-hero-img.jpg"
              alt="Pivot Panda - Savoir-faire"
            />
          </div>
          <div ref={step2Ref}>
            <Text as="h3" type="projectTitle">
              Le panda dénicheur
            </Text>
            <Text>
              Nous vous guidons de manière singulière en commençant par la
              recherche du bien immobilier qui vous correspond, pour ensuite
              définir et mettre en œuvre votre projet immobilier.
            </Text>
            <StaticImage
              src="../../../../assets/imgs/page-savoir-faire-hero-img.jpg"
              alt="Pivot Panda - Savoir-faire"
            />
          </div>
          <div>
            <Text as="h3" type="projectTitle">
              Le panda dénicheur
            </Text>
            <Text>
              Nous vous guidons de manière singulière en commençant par la
              recherche du bien immobilier qui vous correspond, pour ensuite
              définir et mettre en œuvre votre projet immobilier.
            </Text>
            <StaticImage
              src="../../../../assets/imgs/page-savoir-faire-hero-img.jpg"
              alt="Pivot Panda - Savoir-faire"
            />
          </div>
        </PageContainer>
      </StyledBody>
    </StyledContainer>
  );
};

export default NosMetiersSection;
