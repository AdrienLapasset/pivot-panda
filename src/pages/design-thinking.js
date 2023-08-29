import React, { useState, useRef } from "react";
import styled from "styled-components";
import Layout from "components/Layout";
import Title from "components/global/Title";
import Text from "components/global/Text";
import Button from "components/global/Button";
import Grid from "components/global/Grid";
import { Link } from "gatsby";
import closeBtn from "assets/icons/close-btn.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import personas from "assets/icons/designThinking/personas.svg";
import interviews from "assets/icons/designThinking/interviews.svg";
import shadowing from "assets/icons/designThinking/shadowing.svg";
import usersjourney from "assets/icons/designThinking/usersjourney.svg";
import affinitydiagrams from "assets/icons/designThinking/affinitydiagrams.svg";
import painpoint from "assets/icons/designThinking/painpoint.svg";
import whatistheproblem from "assets/icons/designThinking/whatistheproblem.svg";
import brainstorming from "assets/icons/designThinking/brainstorming.svg";
import studiodesign from "assets/icons/designThinking/studiodesign.svg";
import synthesis from "assets/icons/designThinking/synthesis.svg";
import minimum from "assets/icons/designThinking/minimum.svg";
import work from "assets/icons/designThinking/work.svg";
import programmation from "assets/icons/designThinking/programmation.svg";
import Seo from "components/Seo";

const StyledGrid = styled(Grid)`
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  min-height: 100vh;
  display: block;
  @media ${(props) => props.theme.minWidth.md} {
    display: grid;
  }
`;
const StyledContainer = styled.div`
  grid-column: 3/8;
  height: 100%;
  padding-bottom: 100px;
  @media ${(props) => props.theme.minWidth.md} {
    border-left: 1px solid white;
  }
  .close-btn {
    position: absolute;
    top: 25px;
    right: 25px;
    margin-left: auto;
  }
  & > div {
    @media ${(props) => props.theme.minWidth.md} {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-column-gap: ${({ theme }) => theme.columnGap.desktop};
    }
    &:nth-of-type(1) {
      padding-top: 40px;
      @media ${(props) => props.theme.minWidth.md} {
        border-bottom: 1px solid white;
        padding: 170px 25px 25px;
      }
      h1 {
        grid-column: 1 / span 3;
        border-bottom: 1px solid white;
        padding: ${({ theme }) => theme.columnGap.mobile};
        @media ${(props) => props.theme.minWidth.md} {
          border-bottom: none;
          padding: 0;
        }
      }
      p {
        padding: 15px 15px 0;
        @media ${(props) => props.theme.minWidth.md} {
          grid-column: 4/6;
          align-self: end;
          padding: 0;
        }
        &:nth-of-type(1) {
          display: block;
          @media ${({ theme }) => theme.minWidth.md} {
            display: none;
          }
        }
        &:nth-of-type(2) {
          display: none;
          @media ${({ theme }) => theme.minWidth.md} {
            display: block;
          }
        }
        &:nth-of-type(3) {
          display: block;
          padding-bottom: 60px;
          @media ${({ theme }) => theme.minWidth.md} {
            display: none;
          }
        }
      }
    }
    &:nth-of-type(2) {
      @media ${(props) => props.theme.minWidth.md} {
        padding-bottom: ${({ theme }) => theme.columnGap.desktop};
      }
      & > div {
        padding: ${({ theme }) => theme.columnGap.mobile};
        @media ${(props) => props.theme.minWidth.md} {
          grid-column: 1 / span 3;
          border-right: 1px solid white;
          border-bottom: 1px solid white;
          padding: ${({ theme }) => theme.columnGap.desktop};
        }
        &:nth-of-type(1) {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid white;
          & > p {
            font-size: 18px;
            text-transform: uppercase;
          }
          .phaseNumbers {
            display: flex;
            div {
              display: flex;
              align-items: center;
              &:not(:last-child) {
                &::after {
                  content: "";
                  display: block;
                  height: 1px;
                  width: 25px;
                  background-color: white;
                }
              }
              span {
                color: white;
                border: 1px solid white;
                border-radius: 100px;
                width: 25px;
                height: 25px;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              &:nth-child(1) {
                span {
                  background-color: ${({ stepIndex }) =>
                    stepIndex === 1 && "white"};
                  color: ${({ theme, stepIndex }) =>
                    stepIndex === 1 && theme.colors.backgroundDark};
                }
              }
              &:nth-child(2) {
                span {
                  background-color: ${({ stepIndex }) =>
                    stepIndex === 2 && "white"};
                  color: ${({ theme, stepIndex }) =>
                    stepIndex === 2 && theme.colors.backgroundDark};
                }
              }
              &:nth-child(3) {
                span {
                  background-color: ${({ stepIndex }) =>
                    stepIndex === 3 && "white"};
                  color: ${({ theme, stepIndex }) =>
                    stepIndex === 3 && theme.colors.backgroundDark};
                }
              }
              &:nth-child(4) {
                span {
                  background-color: ${({ stepIndex }) =>
                    stepIndex === 4 && "white"};
                  color: ${({ theme, stepIndex }) =>
                    stepIndex === 4 && theme.colors.backgroundDark};
                }
              }
            }
          }
        }
        &:nth-of-type(2),
        &:nth-of-type(3) {
          padding: 0;
          margin: ${({ theme }) => theme.columnGap.mobile};
          @media ${(props) => props.theme.minWidth.md} {
            margin: 0;
          }
        }
      }
    }
    &:nth-of-type(3) {
      & > p {
        margin-left: 15px;
        display: none;
        @media ${(props) => props.theme.minWidth.md} {
          grid-column: 1 / span 2;
          margin-left: 25px;
          display: block;
        }
      }
    }
  }
  .navBtnContainer {
    display: flex;
    padding: 60px 0;
    @media ${(props) => props.theme.minWidth.md} {
      padding: 0 0
        ${({ theme }) =>
          theme.columnGap.desktop + " " + theme.columnGap.desktop};
    }
    button {
      margin-right: 15px;
      @media ${(props) => props.theme.minWidth.md} {
        margin-right: 25px;
      }
    }
  }
`;
const StyledSlider = styled(Slider)`
  .slick-initialized .slick-slide,
  .slick-slide {
    @media ${(props) => props.theme.minWidth.md} {
      padding: ${({ theme }) => theme.columnGap.desktop};
      display: grid !important;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: ${(props) => props.theme.columnGap.desktop};
    }
    div {
      grid-column: 1 / span 2;
      h3 {
        margin-bottom: 10px;
        font-size: 20px;
        @media ${(props) => props.theme.minWidth.md} {
          font-size: 24px;
        }
      }
      .labelContainer {
        display: flex;
        .label {
          margin: 15px 15px 0 0;
          @media ${(props) => props.theme.minWidth.md} {
            margin: 40px 25px 0 0;
          }
          img {
            height: 45px;
            margin: 0 auto 5px;
          }
        }
      }
    }
  }
`;

const DesignThinking = () => {
  const sliderRef = useRef();
  const [stepIndex, setStepIndex] = useState(1);

  const handleStepChange = (oldIndex, newIndex) => {
    setStepIndex(newIndex + 1);
  };

  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    focusOnSelect: true,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => {
      handleStepChange(oldIndex, newIndex);
    },
  };

  return (
    <>
      <Seo pageTitle="Design thinking" />
      <Layout>
        <StyledGrid className="pageAnimation">
          <StyledContainer stepIndex={stepIndex}>
            <Link className="close-btn" to="/savoir-faire">
              <img src={closeBtn} alt="fermer la modal" />
            </Link>
            <div>
              <Text white>Co-concevoir votre projet.</Text>
              <Title type="pageTitle" white>
                design thinking
              </Title>
              <Text white>Co-concevoir votre projet.</Text>
              <Text white>
                La méthode de Design Thinking nous permettra de travailler en
                co-création durant les différentes phases du projet. Des
                consultants spécialisées interviendront en fonction du besoin et
                des étapes du projet pour adapter l’architecture, le design,
                l’ergonomie, l’acoustique et la technique selon vos besoins.
              </Text>
            </div>
            <div className="phaseContainer">
              <div>
                <Text white>Phase</Text>
                <aside className="phaseNumbers">
                  <div>
                    <span>1</span>
                  </div>
                  <div>
                    <span>2</span>
                  </div>
                  <div>
                    <span>3</span>
                  </div>
                  <div>
                    <span>4</span>
                  </div>
                </aside>
              </div>
              <div>
                <StyledSlider {...sliderSettings} ref={sliderRef}>
                  <div>
                    <Text type="projectTitle" white as="h3">
                      Découvrir
                    </Text>
                    <Text white>
                      Vivre l’expérience au travers des yeux de ses utilisateurs
                      : observation, entretien, immersion.
                    </Text>
                    <div className="labelContainer">
                      <div className="label">
                        <img src={personas} alt="" />
                        <Text type="label" white>
                          Personas
                        </Text>
                      </div>
                      <div className="label">
                        <img src={shadowing} alt="" />
                        <Text type="label" white>
                          SHADOWING
                        </Text>
                      </div>
                      <div className="label">
                        <img src={interviews} alt="" />
                        <Text type="label" white>
                          INTERVIEWS
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Text type="projectTitle" white as="h3">
                      Définir
                    </Text>
                    <Text white>
                      Identifier les points bloquants. Formuler des besoins et
                      des problématiques et s’y tenir. Parcours utilisateur,
                      points bloquants.
                    </Text>
                    <div className="labelContainer">
                      <div className="label">
                        <img src={affinitydiagrams} alt="" />
                        <Text type="label" white>
                          affinity diagrams
                        </Text>
                      </div>
                      <div className="label">
                        <img src={usersjourney} alt="" />
                        <Text type="label" white>
                          user’s journey
                        </Text>
                      </div>
                      <div className="label">
                        <img src={painpoint} alt="" />
                        <Text type="label" white>
                          pain point
                        </Text>
                      </div>
                      <div className="label">
                        <img src={whatistheproblem} alt="" />
                        <Text type="label" white>
                          what is the problem
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Text type="projectTitle" white as="h3">
                      Développer
                    </Text>
                    <Text white>
                      Idéer une solution et la tester à travers un produit.{" "}
                      <br />
                      Design studio, proposition de valeur, KPIS.
                    </Text>
                    <div className="labelContainer">
                      <div className="label">
                        <img src={brainstorming} alt="" />
                        <Text type="label" white>
                          brainstorming
                        </Text>
                      </div>
                      <div className="label">
                        <img src={studiodesign} alt="" />
                        <Text type="label" white>
                          studio design
                        </Text>
                      </div>
                      <div className="label">
                        <img src={synthesis} alt="" />
                        <Text type="label" white>
                          synthesis
                        </Text>
                      </div>
                      <div className="label">
                        <img src={minimum} alt="" />
                        <Text type="label" white>
                          minimum viable product
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Text type="projectTitle" white as="h3">
                      Délivrer
                    </Text>
                    <Text white>
                      Identifier les points bloquants. Formuler des besoins et
                      des problématiques et s’y tenir. Parcours utilisateur,
                      points bloquants.
                    </Text>
                    <div className="labelContainer">
                      <div className="label">
                        <img src={work} alt="" />
                        <Text type="label" white>
                          WORK EXPERIENCE LAB
                        </Text>
                      </div>
                      <div className="label">
                        <img src={programmation} alt="" />
                        <Text type="label" white>
                          PROGRAMMATION
                        </Text>
                      </div>
                    </div>
                  </div>
                </StyledSlider>
                <div className="navBtnContainer">
                  <Button
                    white
                    prev
                    onClick={() => sliderRef.current.slickPrev()}
                  ></Button>
                  <Button
                    white
                    next
                    onClick={() => sliderRef.current.slickNext()}
                  ></Button>
                </div>
              </div>
            </div>
            <div>
              <Text white>
                La méthode de Design Thinking nous permettra de travailler en
                co-création durant les différentes phases du projet. Des
                consultants spécialisés interviendront en fonction du besoin et
                des étapes du projet pour adapter l’architecture, le design,
                l’ergonomie, l’acoustique et la technique selon vos besoins.
              </Text>
            </div>
          </StyledContainer>
        </StyledGrid>
      </Layout>
    </>
  );
};

export default DesignThinking;
