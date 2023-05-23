import * as React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 0 -${(props) => props.theme.columnGap.mobile};
  @media ${(props) => props.theme.minWidth.md} {
    margin: 0 -${(props) => props.theme.columnGap.desktop};
  }
`;

const NoPaddingContainer = ({ children, className }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default NoPaddingContainer;
