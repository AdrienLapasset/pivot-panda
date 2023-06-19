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
  svg {
    width: 15px;
    margin-left: 8px;
    @media ${(props) => props.theme.minWidth.md} {
      margin-left: 15px;
    }
  }
`;
const StyledButton = styled.button`
  ${SharedStyled}
  svg {
    width: ${({ prev, next }) => (prev || next) && 20}px;
    margin-left: ${({ prev, next }) => (prev || next) && 0};
    transform: rotate(${({ prev }) => prev && 180}deg);
  }
`;
const StyledLink = styled(Link)`
  ${SharedStyled}
`;
const StyledA = styled.a`
  ${SharedStyled}
`;

const Button = ({ children, className, onClick, to, href, prev, next }) => {
  if (onClick)
    return (
      <StyledButton
        className={className}
        onClick={() => onClick()}
        prev={prev}
        next={next}
      >
        {children}
        <Arrow />
      </StyledButton>
    );
  if (to)
    return (
      <StyledLink to={to} className={className} href={href}>
        {children}
        <Arrow />
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
        <Arrow />
      </StyledA>
    );
};

export default Button;
