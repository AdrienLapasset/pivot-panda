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
import PersonasIcon from "assets/icons/designThinking/Personas.js";

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
            margin: 50px 25px 0 0;
          }
          svg {
            fill: white;
            stroke: white;
            opacity: 0.5;
          }
          aside {
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
                    Vivre l’expérience au travers des yeux de ses utilisateurs :
                    Observation, entgretien, immersion
                  </Text>
                  <div className="labelContainer">
                    <div className="label">
                      <PersonasIcon />
                      <Text type="label" white>
                        Personas
                      </Text>
                    </div>
                    <Text type="label" white>
                      SHADOWING
                    </Text>
                    <Text type="label" white>
                      INTERVIEWS
                    </Text>
                  </div>
                </div>
                <div>
                  <Text type="projectTitle" white as="h3">
                    Découvrir
                  </Text>
                  <Text white>
                    Vivre l’expérience au travers des yeux de ses utilisateurs :
                    Observation, entgretien, immersion
                  </Text>
                  <div className="labelContainer">
                    <Text type="label" white>
                      Personas
                    </Text>
                    <Text type="label" white>
                      Personas
                    </Text>
                    <Text type="label" white>
                      Personas
                    </Text>
                  </div>
                </div>
                <div>
                  <Text type="projectTitle" white as="h3">
                    Découvrir
                  </Text>
                  <Text white>
                    Vivre l’expérience au travers des yeux de ses utilisateurs :
                    Observation, entgretien, immersion
                  </Text>
                  <div className="labelContainer">
                    <Text type="label" white>
                      Personas
                    </Text>
                    <Text type="label" white>
                      Personas
                    </Text>
                    <Text type="label" white>
                      Personas
                    </Text>
                  </div>
                </div>
                <div>
                  <Text type="projectTitle" white as="h3">
                    Découvrir
                  </Text>
                  <Text white>
                    Vivre l’expérience au travers des yeux de ses utilisateurs :
                    Observation, entgretien, immersion
                  </Text>
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
              consultants spécialisées interviendront en fonction du besoin et
              des étapes du projet pour adapter l’architecture, le design,
              l’ergonomie, l’acoustique et la technique selon vos besoins.
            </Text>
          </div>
        </StyledContainer>
      </StyledGrid>
    </Layout>
  );
};

export default DesignThinking;
