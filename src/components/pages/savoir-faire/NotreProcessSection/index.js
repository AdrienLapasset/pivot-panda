import React, { useState, useEffect, useRef, useCallback } from "react";
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
    &:nth-child(${({ currentStep }) => currentStep}) {
      opacity: 1;
    }
  }
`;
const DescriptionText = styled(Text)`
  white-space: pre-line;
`;

const NotreProcessSection = () => {
  const steps = [
    {
      title: "1. Recherche de biens uniques",
      description:
        "Pré-visite par nos soins \nSelon vos critères et avec notre réseau et savoir-faire \nHôtels particuliers \nImmeubles historiques \n Biens off-markets \nPlateaux haussmanniens \nEnsembles immobiliers",
    },
    {
      title:
        "2. Contractualisation, analyse, étude architecturale et technique du site",
      description:
        "Création du contrat \nProjections de plusieurs scénarios adaptables au bien \nChiffrage détaillé et simulation budgétaire \nÉtude de faisabilité technique et urbanistique",
    },
    {
      title: "3. Montage et accompagnement en phase d’acquisition",
      description:
        "Accompagnement dans le choix du scénario \nConseil quant aux demandes d’autorisations d’urbanisme \nConseil sur le montage financier et bancaire",
    },
    {
      title: "4. Étude, design thinking, analyse des besoins",
      description:
        "Atelier de Design Thinking \nProgrammation fonctionnelle et technique \nMicrozoning \nCapacitaires, Faisabilité \nAutorisations administratives",
    },
    {
      title: "5. Intentions conceptuelles et choix architecturaux",
      description: "Design book : Storytelling \n Moodboard & Macrozoning",
    },
    {
      title: "6. Projet d’aménagement",
      description:
        "Conception des aménagements (ESQ, APS/APD et DCE) \n Carnet de plans : Finitions de sol, Revêtements muraux, Cloisons et faux plafonds, Principe de plomberie et d’électricité, Coupes et élévations, Choix des finitions et équipements",
    },
    {
      title: "7. Préconisation du FF&E",
      description:
        "Prestation FF&E (Furniture, Fixture & Equipments) : Propositions / Préconisations de mobilier, installations et équipements \n Accompagnement sur les arbitrages et finitions \nLancement en commande, Gestion de la logistique et du montage",
    },
    {
      title: "8. Consultation des entreprises",
      description:
        "Analyse des devis \n Sélection d’artisans et entreprises des différents lots : \n- Démolition, curage\n- Cloisonnement structurel, amovible et vitré\n- Revêtement de sol, moquette, parquet\n- Revêtements muraux, peinture\n- Plafond, faux plafond\n- Plomberie, CVC\n- Électricité courant fort / faible / salles informatiques\n- Contrôle d’accès et surveillance\n- Menuiserie intérieures et extérieures, serrurerie\n- Agencement et décoration, signalétique\n- Paysagisme et aménagements extérieurs",
    },
    {
      title: "9. Contrôler le planning le budget",
      description:
        "Plannification des études et des travaux \n Gestion du planning et du budget",
    },
    {
      title: "10. Supervision et éxécution des travaux",
      description:
        "Mise au point et synthèse des plans d’éxécution \nImplantation des ouvrages sur site \n Supervision des bureaux d’études spécialisé(e)s \n Pilotage et coordination de chantier",
    },
    {
      title: "11. Réception - Livraison",
      description: "Réception et suivi des levées de réserves",
    },
  ];

  const stepRefs = useRef([]);
  const stepContainer = useRef(null);
  const headersHeight = 400;
  const [currentStep, setCurrentStep] = useState(1);

  const handleRef = (el, index) => {
    stepRefs.current[index] = el;
  };

  const handleStep = useCallback(() => {
    for (let i = 0; i < steps.length; i++) {
      if (stepRefs.current[i]) {
        const rect = stepRefs.current[i].getBoundingClientRect();
        const isMobile = window.innerWidth < 1024;
        if (isMobile) {
          if (rect.right <= window.innerWidth && rect.left >= 0) {
            setCurrentStep(i + 1);
            break;
          }
        } else {
          if (rect.top <= headersHeight && rect.bottom >= headersHeight) {
            setCurrentStep(i + 1);
            break;
          }
        }
      }
    }
  }, [stepRefs, steps.length]);

  useEffect(() => {
    const currentStepContainer = stepContainer.current;

    window.addEventListener("scroll", handleStep);
    currentStepContainer.addEventListener("scroll", handleStep);
    return () => {
      window.removeEventListener("scroll", handleStep);
      currentStepContainer.removeEventListener("scroll", handleStep);
    };
  }, [handleStep]);

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
            {steps.map((step, index) => (
              <div ref={(el) => handleRef(el, index)} key={index}>
                <Text as="h3" type="projectTitle">
                  {step.title}
                </Text>
                <DescriptionText>{step.description}</DescriptionText>
              </div>
            ))}
          </StyledStepDescriptionContainer>
        </StyledGrid>
      </PageContainer>
    </StyledContainer>
  );
};

export default NotreProcessSection;
