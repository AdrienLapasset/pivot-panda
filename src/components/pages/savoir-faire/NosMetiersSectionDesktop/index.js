import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Grid from "components/global/Grid";
import Title from "components/global/Title";
import Text from "components/global/Text";
import PageContainer from "components/global/PageContainer";
import { StaticImage } from "gatsby-plugin-image";

const StyledContainer = styled.section`
  border-bottom: ${({ theme }) => theme.border};
`;
const StyledGrid = styled(Grid)`
  margin: 100px 0;
  & > div {
    &:first-of-type {
      position: sticky;
      top: 100px;
      grid-column: 1 / span 2;
      align-self: flex-start;
      h2 {
        margin-bottom: 50px;
      }
      & > div {
        border-bottom: ${({ theme }) => theme.border};
        text-transform: uppercase;
        font-size: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
        aside {
          font-size: 14px;
          border: ${({ theme }) => theme.border};
          border-radius: 100px;
          width: 25px;
          height: 25px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        &:nth-of-type(1) {
          border-top: ${({ theme }) => theme.border};
          aside {
            background-color: ${({ currentStep, theme }) =>
              currentStep === 1 && theme.colors.black};
            color: ${({ currentStep }) => currentStep === 1 && "white"};
          }
        }
        &:nth-of-type(2) {
          aside {
            background-color: ${({ currentStep, theme }) =>
              currentStep === 2 && theme.colors.black};
            color: ${({ currentStep }) => currentStep === 2 && "white"};
          }
        }
        &:nth-of-type(3) {
          aside {
            background-color: ${({ currentStep, theme }) =>
              currentStep === 3 && theme.colors.black};
            color: ${({ currentStep }) => currentStep === 3 && "white"};
          }
        }
      }
    }
    &:last-of-type {
      grid-column: 4 / span 3;
      padding-left: 25px;
      & > div {
        display: grid;
        p {
          margin: 15px 0 30px;
          width: 66%;
        }
        .gatsby-image-wrapper {
          aspect-ratio: 0.75;
          margin-bottom: 150px;
        }
      }
      & > div {
        &:last-of-type {
          .gatsby-image-wrapper {
            margin-bottom: 0;
          }
        }
      }
    }
  }
`;

const NosMetiersSection = () => {
  const step2Ref = useRef(null);
  const headersHeight = 600;
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
        <StyledGrid currentStep={currentStep}>
          <div>
            <Title as="h2">nos métiers</Title>
            <div>
              Stratégie immobilière<aside>1</aside>
            </div>
            <div>
              conception<aside>2</aside>
            </div>
            <div>
              réalisation des travaux<aside>3</aside>
            </div>
          </div>
          <div>
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
                src="../../../../assets/imgs/panda-denicheur.jpg"
                alt="Pivot Panda - Savoir-faire"
              />
            </div>
            <div ref={step2Ref}>
              <Text as="h3" type="projectTitle">
                Le panda designer
              </Text>
              <Text>
                Le relationnel et l’écoute sont la base de notre méthode de
                travail : les besoins et les objectifs de nos clients sont
                analysés avec soin et respectés en tous points, afin de réaliser
                un projet créatif unique qui lui ressemble.
              </Text>
              <StaticImage
                src="../../../../assets/imgs/panda-designer.jpg"
                alt="Pivot Panda - Savoir-faire"
              />
            </div>
            <div>
              <Text as="h3" type="projectTitle">
                Le panda constructeur
              </Text>
              <Text>
                Nous assurons une prestation globale, depuis la conception
                jusqu’à la livraison, et s’engage sur la qualité de l’ouvrage,
                les prix et les délais. Interlocuteurs unique de la maîtrise
                d’ouvrage, nous coordonnons tous les acteurs du projet et est
                donc garant de sa réussite.
              </Text>
              <StaticImage
                src="../../../../assets/imgs/panda-constructeur.jpg"
                alt="Pivot Panda - Savoir-faire"
              />
            </div>
          </div>
        </StyledGrid>
      </PageContainer>
    </StyledContainer>
  );
};

export default NosMetiersSection;
