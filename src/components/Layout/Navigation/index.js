import React from "react";
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
  z-index: 1;
  padding: 15px 0;
  align-items: center;
  @media ${(props) => props.theme.minWidth.md} {
    padding: 25px 0;
  }
  img {
    text-align: left;

    height: 26px;
    @media ${(props) => props.theme.minWidth.md} {
      height: 30px;
    }
  }
  a:not(.logo) {
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
  const { pathname } = useLocation();

  return (
    <StyledNav>
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
