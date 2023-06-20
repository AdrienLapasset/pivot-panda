import * as React from "react";
import styled, { css } from "styled-components";

const baseStyle = css`
  color: ${({ white }) => white && "white"};
  text-transform: uppercase;
  font-size: 28px;
  line-height: 35px;
  @media ${(props) => props.theme.minWidth.md} {
    font-size: 48px;
    line-height: 50px;
  }
`;

const PageTitle = styled.h1`
  ${baseStyle}
  font-size: 70px;
  line-height: 75px;
  @media ${(props) => props.theme.minWidth.md} {
    font-size: 70px;
    line-height: 75px;
  }
`;
const StyledTitle = styled.h1`
  ${baseStyle}
`;

const Title = ({ children, className, white, type }) => {
  if (type === "pageTitle")
    return (
      <PageTitle
        white={white}
        className={className}
        dangerouslySetInnerHTML={{ __html: children }}
      ></PageTitle>
    );
  else
    return (
      <StyledTitle
        white={white}
        className={className}
        dangerouslySetInnerHTML={{ __html: children }}
      ></StyledTitle>
    );
};

export default Title;
