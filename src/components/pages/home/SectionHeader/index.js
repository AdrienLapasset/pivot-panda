import * as React from "react";
import styled from "styled-components";
import Grid from "components/global/Grid";
// import Button from "components/global/Button";
import Title from "components/global/Title";

const StyledContainer = styled(Grid)``;

const StyledTitle = styled(Title)`
  grid-column: 1 / span 4;
  @media ${(props) => props.theme.minWidth.md} {
    grid-column: 1 / span 3;
  }
`;

const SectionHeader = ({ title, button, children }) => {
  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </StyledContainer>
  );
};

export default SectionHeader;
