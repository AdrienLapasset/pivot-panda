import * as React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  color: ${({ white }) => white && "white"};
  text-transform: uppercase;
  font-size: 28px;
  line-height: 35px;
  @media ${(props) => props.theme.minWidth.md} {
    font-size: 48px;
    line-height: 50px;
  }
`;

const Title = ({ children, className, white }) => {
  return (
    <StyledTitle
      white
      className={className}
      dangerouslySetInnerHTML={{ __html: children }}
    ></StyledTitle>
  );
};

export default Title;
