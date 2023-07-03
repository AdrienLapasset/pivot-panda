import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  svg {
    width: 100%;
    overflow: visible;
    height: 40vh;
    @media ${({ theme }) => theme.minWidth.md} {
      height: auto;
    }
    .baseCircle {
      stroke: ${({ theme }) => theme.colors.black};
    }
    .progressCircle {
      transition: stroke-dashoffset
        ${({ theme }) => theme.transitionTime + " " + theme.cubicBezier.base};
      stroke: ${({ theme }) => theme.colors.black};
      stroke-dasharray: 1100px;
      stroke-dashoffset: ${({ dashoffset }) => dashoffset}px;
      transform: rotate(-90deg);
      transform-origin: center 191px;
    }
    .stepContainer {
      g {
        circle {
          transition: all
            ${({ theme }) =>
              theme.transitionTime + " " + theme.cubicBezier.base}
            0.1s;
          stroke: ${({ theme }) => theme.colors.black};
          fill: white;
        }
        text {
          transform: translate(-6px, 7px);
          font-weight: 700;
          font-size: 20px;
        }
        &:nth-child(1) {
          circle {
            fill: ${({ theme, currentStep }) =>
              currentStep === 1 && theme.colors.black};
          }
          text {
            fill: ${({ currentStep }) => currentStep === 1 && "white"};
          }
        }
        &:nth-child(2) {
          circle {
            fill: ${({ theme, currentStep }) =>
              currentStep === 2 && theme.colors.black};
          }
          text {
            fill: ${({ currentStep }) => currentStep === 2 && "white"};
          }
        }
        &:nth-child(3) {
          circle {
            fill: ${({ theme, currentStep }) =>
              currentStep === 3 && theme.colors.black};
          }
          text {
            fill: ${({ currentStep }) => currentStep === 3 && "white"};
          }
        }
        &:nth-child(4) {
          circle {
            fill: ${({ theme, currentStep }) =>
              currentStep === 4 && theme.colors.black};
          }
          text {
            fill: ${({ currentStep }) => currentStep === 4 && "white"};
          }
        }
        &:nth-child(5) {
          circle {
            fill: ${({ theme, currentStep }) =>
              currentStep === 5 && theme.colors.black};
          }
          text {
            fill: ${({ currentStep }) => currentStep === 5 && "white"};
          }
        }
        &:nth-child(6) {
          circle {
            fill: ${({ theme, currentStep }) =>
              currentStep === 6 && theme.colors.black};
          }
          text {
            fill: ${({ currentStep }) => currentStep === 6 && "white"};
          }
        }
        &:nth-child(7) {
          circle {
            fill: ${({ theme, currentStep }) =>
              currentStep === 7 && theme.colors.black};
          }
          text {
            fill: ${({ currentStep }) => currentStep === 7 && "white"};
          }
        }
        &:nth-child(8) {
          circle {
            fill: ${({ theme, currentStep }) =>
              currentStep === 8 && theme.colors.black};
          }
          text {
            fill: ${({ currentStep }) => currentStep === 8 && "white"};
          }
        }
        &:nth-child(9) {
          circle {
            fill: ${({ theme, currentStep }) =>
              currentStep === 9 && theme.colors.black};
          }
          text {
            fill: ${({ currentStep }) => currentStep === 9 && "white"};
          }
        }
        &:nth-child(10) {
          circle {
            fill: ${({ theme, currentStep }) =>
              currentStep === 10 && theme.colors.black};
          }
          text {
            fill: ${({ currentStep }) => currentStep === 10 && "white"};
          }
        }
        &:nth-child(11) {
          circle {
            fill: ${({ theme, currentStep }) =>
              currentStep === 11 && theme.colors.black};
          }
          text {
            fill: ${({ currentStep }) => currentStep === 11 && "white"};
          }
        }
      }
    }
  }
`;

const ProcessWheel = ({ currentStep }) => {
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const circle4 = useRef(null);
  const circle5 = useRef(null);
  const circle6 = useRef(null);
  const circle7 = useRef(null);
  const circle8 = useRef(null);
  const circle9 = useRef(null);
  const circle10 = useRef(null);
  const circle11 = useRef(null);

  const initDashoffset = -1010;
  const [dashoffset, setDashoffset] = useState(initDashoffset);

  useEffect(() => {
    setDashoffset(initDashoffset - currentStep * 100);
    currentStep === 1
      ? (circle1.current.r.baseVal.value = 20)
      : (circle1.current.r.baseVal.value = 12);
    currentStep === 2
      ? (circle2.current.r.baseVal.value = 20)
      : (circle2.current.r.baseVal.value = 12);
    currentStep === 3
      ? (circle3.current.r.baseVal.value = 20)
      : (circle3.current.r.baseVal.value = 12);
    currentStep === 4
      ? (circle4.current.r.baseVal.value = 20)
      : (circle4.current.r.baseVal.value = 12);
    currentStep === 5
      ? (circle5.current.r.baseVal.value = 20)
      : (circle5.current.r.baseVal.value = 12);
    currentStep === 6
      ? (circle6.current.r.baseVal.value = 20)
      : (circle6.current.r.baseVal.value = 12);
    currentStep === 7
      ? (circle7.current.r.baseVal.value = 20)
      : (circle7.current.r.baseVal.value = 12);
    currentStep === 8
      ? (circle8.current.r.baseVal.value = 20)
      : (circle8.current.r.baseVal.value = 12);
    currentStep === 9
      ? (circle9.current.r.baseVal.value = 20)
      : (circle9.current.r.baseVal.value = 12);
    currentStep === 10
      ? (circle10.current.r.baseVal.value = 20)
      : (circle10.current.r.baseVal.value = 12);
    currentStep === 11
      ? (circle11.current.r.baseVal.value = 20)
      : (circle11.current.r.baseVal.value = 12);
  }, [currentStep, initDashoffset]);

  return (
    <StyledContainer currentStep={currentStep} dashoffset={dashoffset}>
      <svg viewBox="0 0 380 375" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          className="baseCircle"
          cx="189.822"
          cy="191.263"
          r="178.408"
          strokeWidth="2"
          opacity="0.2"
        />
        <circle
          className="progressCircle"
          cx="189.822"
          cy="191.263"
          r="178.408"
          strokeWidth="2"
        />
        <g className="stepContainer">
          <g>
            <circle ref={circle1} cx="190.488" cy="12.9932" r="12" />
            <text x="190.488" y="12.9932">
              1
            </text>
          </g>
          <g>
            <circle ref={circle2} cx="286.5" cy="41.5" r="12" />
            <text x="286.5" y="41.5">
              2
            </text>
          </g>
          <g>
            <circle ref={circle3} cx="352.381" cy="118.082" r="12" />
            <text x="352.381" y="118.082">
              3
            </text>
          </g>
          <g>
            <circle ref={circle4} cx="366.582" cy="217.49" r="12" />
            <text x="366.582" y="217.49">
              4
            </text>
          </g>
          <g>
            <circle ref={circle5} cx="324.819" cy="308.431" r="12" />
            <text x="324.819" y="308.431">
              5
            </text>
          </g>
          <g>
            <circle ref={circle6} cx="240.665" cy="362.342" r="12" />
            <text x="240.665" y="362.342">
              6
            </text>
          </g>
          <g>
            <circle ref={circle7} cx="140.364" cy="362.342" r="12" />
            <text x="140.364" y="362.342">
              7
            </text>
          </g>
          <g>
            <circle ref={circle8} cx="55.2101" cy="308.431" r="12" />
            <text x="55.2101" y="308.431">
              8
            </text>
          </g>
          <g>
            <circle ref={circle9} cx="12.5" cy="217.49" r="12" />
            <text x="12.5" y="217.49">
              9
            </text>
          </g>
          <g>
            <circle ref={circle10} cx="27.6475" cy="118.082" r="12" />
            <text x="27.6475" y="118.082">
              10
            </text>
          </g>
          <g>
            <circle ref={circle11} cx="93.9199" cy="40.4487" r="12" />
            <text x="93.9199" y="40.4487">
              11
            </text>
          </g>
        </g>
      </svg>
    </StyledContainer>
  );
};

export default ProcessWheel;
