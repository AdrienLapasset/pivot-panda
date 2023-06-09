import * as React from "react";
import styled from "styled-components";
import Grid from "components/global/Grid";
import Text from "components/global/Text";

const StyledContainer = styled.section`
  margin: 60px 0;
  border-top: ${(props) => props.theme.border};
  border-bottom: ${(props) => props.theme.border};
  @media ${(props) => props.theme.minWidth.md} {
    margin-top: 175px;
  }
`;
const StyledGrid = styled(Grid)`
  grid-template-rows: 2;
  grid-column-gap: 0;
  @media ${(props) => props.theme.minWidth.md} {
    padding: 0 ${({ theme }) => theme.columnGap.desktop};
    grid-template-rows: 1;
    grid-column-gap: ${(props) => props.theme.columnGap.desktop};
  }
`;
const StyledNumberContainer = styled.div`
  padding: ${({ theme }) => theme.columnGap.mobile} 0;
  @media ${(props) => props.theme.minWidth.md} {
    height: 100%;
  }
  p {
    margin-bottom: 5px;
  }
  &:nth-child(1) {
    border-bottom: ${(props) => props.theme.border};
    grid-column: 1 / span 2;
    padding: ${(props) => props.theme.columnGap.mobile};
    @media ${(props) => props.theme.minWidth.md} {
      border-right: ${(props) => props.theme.border};
      grid-column: 1 / span 1;
      border-bottom: none;
      margin: 0;
      padding: ${({ theme }) => theme.columnGap.desktop} 0;
    }
  }
  &:nth-child(2) {
    border-bottom: ${(props) => props.theme.border};
    grid-column: 3 / span 2;
    border-left: ${(props) => props.theme.border};
    padding: ${(props) => props.theme.columnGap.mobile};
    @media ${(props) => props.theme.minWidth.md} {
      padding: 0;
      grid-column: 2 / span 1;
      border-bottom: none;
      border-right: ${(props) => props.theme.border};
      border-left: none;
      padding: ${({ theme }) => theme.columnGap.desktop} 0;
    }
  }
  &:nth-child(3) {
    grid-column: 1 / span 2;
    grid-row: 2;
    padding: ${(props) => props.theme.columnGap.mobile};
    @media ${(props) => props.theme.minWidth.md} {
      border-right: ${(props) => props.theme.border};
      grid-column: 3 / span 2;
      grid-row: 1;
      padding: 0;
      padding: ${({ theme }) => theme.columnGap.desktop} 0;
    }
  }
  &:nth-child(4) {
    padding: ${(props) => props.theme.columnGap.mobile};
    grid-column: 3 / span 2;
    grid-row: 2;
    border-left: ${(props) => props.theme.border};
    @media ${(props) => props.theme.minWidth.md} {
      padding: 0;
      grid-column: 5 / span 3;
      grid-row: 1;
      border-left: none;
      padding: ${({ theme }) => theme.columnGap.desktop} 0;
    }
  }
`;

const NumbersSection = () => {
  return (
    <StyledContainer>
      <StyledGrid>
        <StyledNumberContainer>
          <p>+10</p>
          <Text type="label">projets en cours</Text>
        </StyledNumberContainer>
        <StyledNumberContainer>
          <p>+10 000m2</p>
          <Text type="label">réalisés ou en cours</Text>
        </StyledNumberContainer>
        <StyledNumberContainer>
          <p>5 000m2</p>
          <Text type="label">achetés ou en cours d’acquisition</Text>
        </StyledNumberContainer>
        <StyledNumberContainer>
          <p>120</p>
          <Text type="label">chambres d’hôtel en cours de développement</Text>
        </StyledNumberContainer>
      </StyledGrid>
    </StyledContainer>
  );
};

export default NumbersSection;
