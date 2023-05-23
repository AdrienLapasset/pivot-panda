import * as React from "react";
import styled from "styled-components";

const StyledText = styled.p`
  font-size: ${(props) => (props.type === "label" ? "12px" : "14px")};
  line-height: 21px;
  opacity: ${(props) => (props.type === "label" ? ".5" : "1")};
  text-transform: ${(props) =>
    props.type === "label" ? "uppercase" : "normal"};

  @media ${(props) => props.theme.minWidth.md} {
    line-height: 25px;
  }
`;

const Title = ({ children, className, as, type }) => {
  return (
    <StyledText as={as} type={type} className={className}>
      {children}
    </StyledText>
  );
};

export default Title;
