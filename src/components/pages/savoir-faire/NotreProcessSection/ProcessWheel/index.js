import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Title from "components/global/Title";
import Text from "components/global/Text";

const StyledContainer = styled.div`
  svg {
    width: 100%;
    .baseCircle {
      stroke: ${({ theme }) => theme.colors.black};
    }
    .stepContainer {
      g {
        circle {
          stroke: ${({ theme }) => theme.colors.black};
          fill: white;
        }
        text {
          transform: translate(-4px, 5px);
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
      }
    }
  }
`;

const ProcessWheel = ({ currentStep }) => {
  return (
    <StyledContainer currentStep={currentStep}>
      <svg viewBox="0 0 380 375" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          className="baseCircle"
          cx="189.822"
          cy="191.263"
          r="178.408"
          stroke-width="2"
          opacity="0.2"
        />
        <g class="stepContainer">
          <g>
            <circle cx="190.488" cy="12.9932" r="12" />
            <text x="190.488" y="12.9932">
              1
            </text>
          </g>
          <g>
            <circle cx="286.5" cy="41.5" r="12" />
            <text x="286.5" y="41.5">
              2
            </text>
          </g>
          <g>
            <circle cx="352.381" cy="118.082" r="12" />
            <text x="352.381" y="118.082">
              3
            </text>
          </g>
          <g>
            <circle cx="366.582" cy="217.49" r="12" />
            <text x="366.582" y="217.49">
              4
            </text>
          </g>
          <g>
            <circle cx="324.819" cy="308.431" r="12" />
            <text x="324.819" y="308.431">
              5
            </text>
          </g>
          <g>
            <circle cx="240.665" cy="362.342" r="12" />
            <text x="240.665" y="362.342">
              6
            </text>
          </g>
          <g>
            <circle cx="140.364" cy="362.342" r="12" />
            <text x="140.364" y="362.342">
              7
            </text>
          </g>
          <g>
            <circle cx="55.2101" cy="308.431" r="12" />
            <text x="55.2101" y="308.431">
              8
            </text>
          </g>
          <g>
            <circle cx="12.5" cy="217.49" r="12" />
            <text x="12.5" y="217.49">
              9
            </text>
          </g>
          <g>
            <circle cx="27.6475" cy="118.082" r="12" />
            <text x="27.6475" y="118.082">
              10
            </text>
          </g>
          <g>
            <circle cx="93.9199" cy="40.4487" r="12" />
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
