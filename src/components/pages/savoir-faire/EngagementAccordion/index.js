import React, { useState, useRef } from "react";
import styled from "styled-components";
import Button from "components/global/Button";
import Text from "components/global/Text";

const StyledContainer = styled.div`
  align-self: start;
  margin-top: 50px;
  border: ${({ theme }) => theme.border};
  h3,
  p {
    font-size: 15px;
    @media ${(props) => props.theme.minWidth.xl} {
      font-size: 16px;
    }
  }
  & > div {
    &:not(:first-child) {
      button {
        border-top: ${({ theme }) => theme.border};
      }
    }
  }
  button {
    width: 100%;
    font-size: 16px;
    text-transform: uppercase;
    padding: 25px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    @media ${(props) => props.theme.minWidth.md} {
      padding: 25px;
      font-size: 20px;
    }
    &:hover {
      & > h3 {
        color: ${(props) => props.theme.colors.grey};
      }
    }
    & > div {
      position: relative;
      top: -1px;
    }
  }
`;
const StyledContent = styled.div`
  padding: 0 15px;
  opacity: ${(props) => (props.isSectionOpen ? "1" : "0")};
  transition: all 0.3s ${(props) => props.theme.cubicBezier.base};
  height: ${(props) =>
    props.isSectionOpen ? props.contentHeight + 20 + "px" : "0"};
  overflow-y: hidden;
  @media ${({ theme }) => theme.minWidth.md} {
    padding: 0 25px;
  }
  @media ${({ theme }) => theme.minWidth.lg} {
    display: grid;
    grid-column-gap: ${(props) => props.theme.columnGap.desktop};
    grid-template-columns: repeat(3, 1fr);
  }
  p {
    grid-column: 1 / span 2;
  }
`;
const StyledButton = styled(Button)`
  transition: transform 0.3s ${(props) => props.theme.cubicBezier.base};
  transform: rotate(${({ isSectionOpen }) => (isSectionOpen ? -90 : 90)}deg);
`;

const Accordion = () => {
  const [isSection1Open, setSection1Open] = useState(false);
  const [isSection2Open, setSection2Open] = useState(false);
  const [isSection3Open, setSection3Open] = useState(false);
  const [content1Height, setContent1Height] = useState(0);
  const [content2Height, setContent2Height] = useState(0);
  const [content3Height, setContent3Height] = useState(0);
  const content1Ref = useRef(null);
  const content2Ref = useRef(null);
  const content3Ref = useRef(null);

  const toggleSection1 = () => {
    setContent1Height(content1Ref.current.scrollHeight);
    setSection1Open(!isSection1Open);
  };
  const toggleSection2 = () => {
    setContent2Height(content2Ref.current.scrollHeight);
    setSection2Open(!isSection2Open);
  };
  const toggleSection3 = () => {
    setContent3Height(content3Ref.current.scrollHeight);
    setSection3Open(!isSection3Open);
  };

  return (
    <StyledContainer>
      <div>
        <button onClick={toggleSection1}>
          Eco-conception
          <StyledButton isSectionOpen={isSection1Open} />
        </button>
        <StyledContent
          isSectionOpen={isSection1Open}
          contentHeight={content1Height}
          ref={content1Ref}
        >
          <Text>
            Nos réalisations sont des projets de rénovation et de réhabilitation
            d’immeubles anciens plutôt que des constructions neuves. Nous
            encourageons le réemploi de matériaux. Nous sélectionnons uniquement
            des matériaux biosourcés et géosourcés.
          </Text>
        </StyledContent>
      </div>
      <div>
        <button onClick={toggleSection2}>
          Economie locale
          <StyledButton isSectionOpen={isSection2Open} />
        </button>
        <StyledContent
          isSectionOpen={isSection2Open}
          contentHeight={content2Height}
          ref={content2Ref}
        >
          <Text>
            Nous priorisons les entreprises, fournisseurs et prestataires
            locaux. Nous mettons en avant l'artisanat dans nos projets et le
            savoir-faire de partenaires qui nous entourent
          </Text>
        </StyledContent>
      </div>
      <div>
        <button onClick={toggleSection3}>
          Vie d’entreprise
          <StyledButton isSectionOpen={isSection3Open} />
        </button>
        <StyledContent
          isSectionOpen={isSection3Open}
          contentHeight={content3Height}
          ref={content3Ref}
        >
          <Text>
            Nous portons notre attention sur le bien-être au travail des
            collaborateurs. Nous développons les compétences des collaborateurs
            par le biais de formations. Nous nous attachons à un objectif zéro
            papier par la dématérialisation de nos données et la mise en place
            de signature électronique pour toutes nos démarches administratives.
          </Text>
        </StyledContent>
      </div>
    </StyledContainer>
  );
};

export default Accordion;
