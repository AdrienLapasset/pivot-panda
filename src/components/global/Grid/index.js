import * as React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: ${(props) => props.theme.columnGap.mobile};
  /* align-items: center; */
  @media ${(props) => props.theme.minWidth.md} {
    grid-template-columns: repeat(7, 1fr);
    grid-column-gap: ${(props) => props.theme.columnGap.desktop};
  }
`;

const Grid = ({ children, className }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default Grid;
