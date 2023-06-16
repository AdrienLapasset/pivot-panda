import * as React from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";
import Arrow from "assets/icons/ArrowBtn.js";

const SharedStyled = css`
  font-size: 8px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  height: 25px;
  border: 1px solid ${(props) => props.theme.colors.black};
  border-radius: 100px;
  padding: 0 10px;
  width: fit-content;
  @media ${(props) => props.theme.minWidth.md} {
    font-size: 10px;
  }
`;
const StyledButton = styled.button`
  ${SharedStyled}
`;
const StyledLink = styled(Link)`
  ${SharedStyled}
`;
const StyledA = styled.a`
  ${SharedStyled}
`;
const StyledArrow = styled(Arrow)`
  width: 15px;
  margin-left: 8px;
  @media ${(props) => props.theme.minWidth.md} {
    margin-left: 15px;
  }
`;

const Button = ({ children, className, onClick, to, href }) => {
  if (onClick)
    return (
      <StyledButton className={className} onClick={() => onClick()}>
        {children}
        <StyledArrow />
      </StyledButton>
    );
  if (to)
    return (
      <StyledLink to={to} className={className} href={href}>
        {children}
        <StyledArrow />
      </StyledLink>
    );
  if (href)
    return (
      <StyledA
        className={className}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {children}
        <StyledArrow />
      </StyledA>
    );
};

export default Button;
