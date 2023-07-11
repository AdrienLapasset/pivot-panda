import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Grid from "components/global/Grid";
import Title from "components/global/Title";
import Text from "components/global/Text";
import PageContainer from "components/global/PageContainer";
import ProcessWheel from "./ProcessWheel";

const StyledContainer = styled.section`
  border-bottom: ${({ theme }) => theme.border};
  margin: 75px 0;
  @media ${({ theme }) => theme.minWidth.md} {
    margin: 100px 0;
  }
`;
const StyledGrid = styled(Grid)`
  padding-bottom: 100px;
  display: block;
  @media ${({ theme }) => theme.minWidth.md} {
    display: grid;
  }
  & > div {
    &:first-of-type {
      @media ${({ theme }) => theme.minWidth.md} {
        grid-column: 1 / span 2;
        align-self: flex-start;
        position: sticky;
        top: 100px;
      }
      h2 {
        margin-bottom: 50px;
        @media ${({ theme }) => theme.minWidth.md} {
          margin-bottom: 100px;
        }
      }
    }
    &:last-of-type {
      @media ${({ theme }) => theme.minWidth.md} {
        grid-column: 4 / span 2;
        display: grid;
      }
    }
  }
`;
const StyledStepDescriptionContainer = styled.div`
  margin-top: 50px;
  display: flex;
  overflow-x: scroll;
  @media ${({ theme }) => theme.minWidth.md} {
    padding-left: 25px;
    margin-top: 100px;
    display: block;
    overflow-x: unset;
  }
  & > div {
    opacity: 0.5;
    flex: 0 0 270px;
    margin-right: 50px;
    @media ${({ theme }) => theme.minWidth.md} {
      margin-right: 0;
      padding-bottom: 100px;
    }
    &:not(:last-child) {
      @media ${({ theme }) => theme.minWidth.md} {
        border-bottom: ${({ theme }) => theme.border};
        margin-bottom: 25px;
      }
    }
    &:last-child {
      padding-bottom: 200px;
    }
    h3 {
      font-size: 18px;
      margin-bottom: 5px;
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
    &:nth-child(5) {
      opacity: ${({ currentStep }) => currentStep === 5 && "1"};
    }
    &:nth-child(6) {
      opacity: ${({ currentStep }) => currentStep === 6 && "1"};
    }
    &:nth-child(7) {
      opacity: ${({ currentStep }) => currentStep === 7 && "1"};
    }
    &:nth-child(8) {
      opacity: ${({ currentStep }) => currentStep === 8 && "1"};
    }
    &:nth-child(9) {
      opacity: ${({ currentStep }) => currentStep === 9 && "1"};
    }
    &:nth-child(10) {
      opacity: ${({ currentStep }) => currentStep === 10 && "1"};
    }
    &:nth-child(11) {
      opacity: ${({ currentStep }) => currentStep === 11 && "1"};
    }
  }
`;
const NotreProcessSection = () => {
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);
  const step4Ref = useRef(null);
  const step5Ref = useRef(null);
  const step6Ref = useRef(null);
  const step7Ref = useRef(null);
  const step8Ref = useRef(null);
  const step9Ref = useRef(null);
  const step10Ref = useRef(null);
  const step11Ref = useRef(null);
  const stepContainer = useRef(null);
  const headersHeight = 250;
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const handleStep = () => {
      const step1Top = step1Ref.current.getBoundingClientRect().top;
      const step2Top = step2Ref.current.getBoundingClientRect().top;
      const step3Top = step3Ref.current.getBoundingClientRect().top;
      const step4Top = step4Ref.current.getBoundingClientRect().top;
      const step5Top = step5Ref.current.getBoundingClientRect().top;
      const step6Top = step6Ref.current.getBoundingClientRect().top;
      const step7Top = step7Ref.current.getBoundingClientRect().top;
      const step8Top = step8Ref.current.getBoundingClientRect().top;
      const step9Top = step9Ref.current.getBoundingClientRect().top;
      const step10Top = step10Ref.current.getBoundingClientRect().top;
      const step2Right = step2Ref.current.getBoundingClientRect().right;
      const step3Right = step3Ref.current.getBoundingClientRect().right;
      const step4Right = step4Ref.current.getBoundingClientRect().right;
      const step5Right = step5Ref.current.getBoundingClientRect().right;
      const step6Right = step6Ref.current.getBoundingClientRect().right;
      const step7Right = step7Ref.current.getBoundingClientRect().right;
      const step8Right = step8Ref.current.getBoundingClientRect().right;
      const step9Right = step9Ref.current.getBoundingClientRect().right;
      const step10Right = step10Ref.current.getBoundingClientRect().right;
      const step11Right = step11Ref.current.getBoundingClientRect().right;

      if (window.innerWidth < 1024) {
        if (step2Right > window.innerWidth) {
          setCurrentStep(1);
        }
        if (step2Right <= window.innerWidth) {
          setCurrentStep(2);
        }
        if (step3Right <= window.innerWidth) {
          setCurrentStep(3);
        }
        if (step4Right <= window.innerWidth) {
          setCurrentStep(4);
        }
        if (step5Right <= window.innerWidth) {
          setCurrentStep(5);
        }
        if (step6Right <= window.innerWidth) {
          setCurrentStep(6);
        }
        if (step7Right <= window.innerWidth) {
          setCurrentStep(7);
        }
        if (step8Right <= window.innerWidth) {
          setCurrentStep(8);
        }
        if (step9Right <= window.innerWidth) {
          setCurrentStep(9);
        }
        if (step10Right <= window.innerWidth) {
          setCurrentStep(10);
        }
        if (step11Right <= window.innerWidth) {
          setCurrentStep(11);
        }
      } else {
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
        if (step4Top <= headersHeight) {
          setCurrentStep(5);
        }
        if (step5Top <= headersHeight) {
          setCurrentStep(6);
        }
        if (step6Top <= headersHeight) {
          setCurrentStep(7);
        }
        if (step7Top <= headersHeight) {
          setCurrentStep(8);
        }
        if (step8Top <= headersHeight) {
          setCurrentStep(9);
        }
        if (step9Top <= headersHeight) {
          setCurrentStep(10);
        }
        if (step10Top <= headersHeight) {
          setCurrentStep(11);
        }
      }
    };
    window.addEventListener("scroll", handleStep);
    stepContainer.current.addEventListener("scroll", handleStep);
    return () => {
      window.removeEventListener("scroll", handleStep);
      // stepContainer.current.removeEventListener("scroll", handleStep);
    };
  }, [
    step1Ref,
    step2Ref,
    step3Ref,
    step4Ref,
    step5Ref,
    step6Ref,
    step7Ref,
    step8Ref,
    step9Ref,
    step10Ref,
    step11Ref,
  ]);

  return (
    <StyledContainer>
      <PageContainer>
        <StyledGrid>
          <div>
            <Title as="h2">Notre process</Title>
            <ProcessWheel currentStep={currentStep} />
          </div>
          <StyledStepDescriptionContainer
            currentStep={currentStep}
            ref={stepContainer}
          >
            <div ref={step1Ref}>
              <Text as="h3" type="projectTitle">
                1. Recherche de biens uniques
              </Text>
              <Text>
                Pré-visite par nos soins <br /> Selon vos critères et avec notre
                réseau et savoir faire <br /> Hotels particuliers <br />
                Immeubles historiques <br /> Biens offmarkets <br /> Plateaux
                haussmanniens <br /> Ensembles immobiliers
              </Text>
            </div>
            <div ref={step2Ref}>
              <Text as="h3" type="projectTitle">
                2. Analyse et étude architecturale et technique du site
              </Text>
              <Text>
                Projections de plusieurs scénarios adaptables au bien <br />
                Chiffrage détaillé et simulation budgétaire <br /> Étude de
                faisabilité technique et urbanistique
              </Text>
            </div>
            <div ref={step3Ref}>
              <Text as="h3" type="projectTitle">
                3. Montage et accompagnement en phase d’acquisition
              </Text>
              <Text>
                Accompagnement dans le choix du scénario <br /> Conseil quant
                aux demandes d’autorisations d’urbanisme <br /> Conseil sur le
                montage financier et bancaire
              </Text>
            </div>
            <div ref={step4Ref}>
              <Text as="h3" type="projectTitle">
                4. Étude, design thinking, analyse des besoins
              </Text>
              <Text>
                Atelier de Design Thinking <br />
                Programmation fonctionnelle et technique <br />
                Microzoning <br /> Capacitaires, Faisabilité <br />
                Autorisations administratives
              </Text>
            </div>
            <div ref={step5Ref}>
              <Text as="h3" type="projectTitle">
                5. Intentions conceptuelles et choix architecturaux
              </Text>
              <Text>
                Design book : Storytelling <br /> Moodboard & Macrozoning
              </Text>
            </div>
            <div ref={step6Ref}>
              <Text as="h3" type="projectTitle">
                6. Projet d’aménagement
              </Text>
              <Text>
                Conception des aménagements (ESQ, APS/APD et DCE) <br /> Carnet
                de plans : Finitions de sol, Revêtements muraux, Cloisons et
                faux plafonds, Principe de plomberie et d’électricité, Coupes et
                élévations, Choix des finitions et équipements
              </Text>
            </div>
            <div ref={step7Ref}>
              <Text as="h3" type="projectTitle">
                7. Préconisation du FF&E
              </Text>
              <Text>
                Prestation FF&E (Furniture, Fixture & Equipments) : Propositions
                / Préconisations de mobilier, installations et équipements{" "}
                <br /> Accompagnement sur les arbitrages et finitions <br />{" "}
                Lancement en commande, Gestion de la logistique et du montage
              </Text>
            </div>
            <div ref={step8Ref}>
              <Text as="h3" type="projectTitle">
                8. Consultation des entreprises
              </Text>
              <Text>
                Analyse des devis <br /> Sélection d’artisans et entreprises des
                différents lots : Démolition, curage Cloisonnement structurel,
                amovible et vitré Revêtement de sol, moquette, parquet
                Revêtements muraux, peinture Plafond, faux plafond, Plomberie,
                CVC Électricité courant fort / faible / salles informatiques
                Contrôle d’accès et surveillance Menuiserie intérieures et
                extérieures, Serrurerie Agencement et décoration, Signalétique
                Paysagisme et aménagements extérieurs
              </Text>
            </div>
            <div ref={step9Ref}>
              <Text as="h3" type="projectTitle">
                9. Contrôler le planning le budget
              </Text>
              <Text>
                Plannification des études et des travaux <br /> Gestion du
                planning et du budget
              </Text>
            </div>
            <div ref={step10Ref}>
              <Text as="h3" type="projectTitle">
                10. Supervision et éxécution des travaux
              </Text>
              <Text>
                Mise au point et synthèse des plans d’éxécution <br />{" "}
                Implantation des ouvrages sur site <br /> Supervision des
                bureaux d’études spécualisées <br /> Pilotage et coordination de
                chantier
              </Text>
            </div>
            <div ref={step11Ref}>
              <Text as="h3" type="projectTitle">
                11. Réception - Livraison
              </Text>
              <Text>Réception et suivi des levées de réserves</Text>
            </div>
          </StyledStepDescriptionContainer>
        </StyledGrid>
      </PageContainer>
    </StyledContainer>
  );
};

export default NotreProcessSection;
