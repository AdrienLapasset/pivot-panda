import React from "react";
import styled from "styled-components";
import PPlogo from "assets/logos/logo-pivot-panda-paysage.svg";
import { Link } from "gatsby";

const StyledNav = styled.nav``;

const Navigation = () => {
  return (
    <StyledNav>
      <img src={PPlogo} alt="Logo Pivot Panda" />
      <Link to="/a-propos-de-nous" activeClassName="active">
        Expertises
      </Link>
      <Link to="/expertises" activeClassName="active">
        e-Services
      </Link>
      <Link to="/projets" activeClassName="active">
        Formations
      </Link>
      <Link to="/actus" activeClassName="active">
        Actualités
      </Link>
      <Link to="/actus" activeClassName="active">
        L’équipe
      </Link>
      <Link to="/actus" activeClassName="active">
        Contact
      </Link>
      <Link to="/actus" activeClassName="active">
        Paiement
      </Link>
    </StyledNav>
  );
};

export default Navigation;
