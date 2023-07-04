import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import PPlogo from "assets/logos/logo-pivot-panda-paysage.svg";
import Grid from "components/global/Grid";
import { Link } from "gatsby";
import PageContainer from "components/global/PageContainer";
import { useLocation } from "@reach/router";

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 2;
  padding: 15px 0;
  align-items: center;
  border-bottom: ${({ theme }) => theme.border};
  border-color: ${({ theme, isBorder }) =>
    isBorder ? theme.colors.black : "white"};
  transition: border-color 0.3s;
  @media ${(props) => props.theme.minWidth.md} {
    padding: 20px 0;
  }
  img {
    height: 26px;
    @media ${(props) => props.theme.minWidth.md} {
      height: 30px;
      position: relative;
      top: 2px;
    }
  }
  a {
    align-self: center;
    &:not(.logo) {
      font-size: 10px;
      font-weight: 300;
      text-transform: uppercase;
      text-align: left;
      @media ${(props) => props.theme.minWidth.md} {
        text-align: right;
        font-size: 12px;
      }
    }
  }
`;

const Navigation = () => {
  const { pathname } = useLocation();

  const isInitBorder =
    pathname === "/realisations/" || pathname === "/savoir-faire/";

  const [isBorder, setIsBorder] = useState(isInitBorder);

  useEffect(() => {
    const handleIsBorder = () => {
      const scrollY = window.scrollY;
      if (scrollY === 0 && !isInitBorder) {
        setIsBorder(false);
      } else {
        setIsBorder(true);
      }
    };
    window.addEventListener("scroll", handleIsBorder);
    return () => {
      window.removeEventListener("scroll", handleIsBorder);
    };
  }, []);
  return (
    <StyledNav isBorder={isBorder}>
      <PageContainer>
        <Grid>
          <Link className="logo" to="/">
            <img src={PPlogo} alt="Logo Pivot Panda" />
          </Link>
          <Link to="/realisations">Réalisations</Link>
          <Link to="/savoir-faire">Savoir-faire</Link>
          <Link to="/contact" state={{ fromPage: pathname }}>
            contact
          </Link>
        </Grid>
      </PageContainer>
    </StyledNav>
  );
};

export default Navigation;
