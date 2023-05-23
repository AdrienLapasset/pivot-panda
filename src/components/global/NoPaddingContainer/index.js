import * as React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 0 -30px;
  @media ${(props) => props.theme.minWidth.md} {
    margin: 0 -50px;
  }
`;

const NoPaddingContainer = ({ children, className }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default NoPaddingContainer;
