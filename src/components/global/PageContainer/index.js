import * as React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 0 ${(props) => props.theme.columnGap.mobile};
  @media ${(props) => props.theme.minWidth.sm} {
    padding: 0 ${(props) => props.theme.columnGap.desktop};
  }
`;

const PageContainer = ({ children, className }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default PageContainer;
