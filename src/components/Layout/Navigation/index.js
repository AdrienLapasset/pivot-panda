import React from "react";
import styled from "styled-components";
import PPlogo from "assets/logos/logo-pivot-panda-paysage.svg";
import { Link } from "gatsby";

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  display: flex;
  padding: 15px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: ${(props) => props.theme.columnGap.mobile};
  align-items: center;
  @media ${(props) => props.theme.minWidth.md} {
    padding: 25px 0;
    grid-template-columns: repeat(7, 1fr);
    grid-column-gap: ${(props) => props.theme.columnGap.desktop};
  }
  img {
    height: 26px;
    @media ${(props) => props.theme.minWidth.md} {
      height: 30px;
    }
  }
  a {
    font-size: 10px;
    font-weight: 300;
    text-transform: uppercase;
    text-align: left;
    @media ${(props) => props.theme.minWidth.md} {
      text-align: right;
      font-size: 12px;
    }
  }
`;

const Navigation = () => {
  return (
    <StyledNav>
      <img src={PPlogo} alt="Logo Pivot Panda" />
      <Link to="/realisations" activeClassName="active">
        Réalisations
      </Link>
      <Link to="/savoir-faire" activeClassName="active">
        Savoir-faire{" "}
      </Link>
      <Link to="/contact" activeClassName="active">
        contact
      </Link>
    </StyledNav>
  );
};

export default Navigation;
