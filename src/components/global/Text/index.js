import * as React from "react";
import styled from "styled-components";

const StyledText = styled.p`
  font-size: 14px;
  line-height: 21px;
  @media ${(props) => props.theme.minWidth.md} {
    line-height: 25px;
  }
`;

const Title = ({ children, className, as }) => {
  return (
    <StyledText as={as} className={className}>
      {children}
    </StyledText>
  );
};

export default Title;
