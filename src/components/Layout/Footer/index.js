import React from "react";
import styled from "styled-components";
import PPlogo from "assets/logos/logo-pivot-panda-portrait.svg";
import Grid from "components/global/Grid";
import { Link } from "gatsby";
import PageContainer from "components/global/PageContainer";
import Text from "components/global/Text";

const StyledFooter = styled.footer`
  margin-top: 90px;
  border-top: ${(props) => props.theme.border};
  padding: 15px 0;
  align-items: center;
  @media ${(props) => props.theme.minWidth.md} {
    padding: 0;
    padding-bottom: 0;
  }
  .logo {
    margin: 75px 0;
    @media ${(props) => props.theme.minWidth.md} {
      padding: 25px 25px 0 0;
      margin: 0;
    }
  }
  img {
    text-align: left;
    height: 100px;
    @media ${(props) => props.theme.minWidth.md} {
      height: 200px;
    }
  }
`;

const StyledPageContainer = styled(PageContainer)`
  border-bottom: ${(props) => props.theme.border};
`;

const MobileGrid = styled(Grid)`
  grid-template-rows: 195px 105px 105px 135px;
  @media ${(props) => props.theme.minWidth.md} {
    display: none;
  }
`;

const DesktopGrid = styled(Grid)`
  grid-template-rows: 200px 50px;
  display: none;
  @media ${(props) => props.theme.minWidth.md} {
    display: grid;
    align-items: start;
  }
`;

const StyledLogo = styled.div`
  @media ${(props) => props.theme.minWidth.md} {
    grid-row: span 2;
    grid-column: span 1;
    align-self: center;
    border-right: ${(props) => props.theme.border};
    height: 100%;
  }
`;

const DoubleElementRow = styled(Grid)`
  grid-column: span 4;
  border-top: ${(props) => props.theme.border};
  padding-top: 15px;
  padding-bottom: 30px;
  align-items: start;
`;

const StyledRow = styled.div`
  grid-column: span 4;
  border-top: solid ${(props) => props.theme.colors.black} 1px;
  padding-top: 15px;
  padding-bottom: 30px;
  @media ${(props) => props.theme.minWidth.md} {
    grid-column: span 2;
    padding-top: 0;
    border-top: none;
    border-right: ${(props) => props.theme.border};
    height: 100%;
    padding-top: 25px;
    padding-right: 25px;
  }
`;

const StyledResources = styled.div`
  grid-column: span 4;
  border-top: solid ${(props) => props.theme.colors.black} 1px;
  padding-top: 15px;
  padding-bottom: 30px;
  @media ${(props) => props.theme.minWidth.md} {
    grid-column: span 2;
    padding-top: 0;
    border-top: none;
    height: 100%;
    padding-top: 25px;
    padding-right: 0;
    text-align: right;
  }
`;

const StyledContact = styled.div`
  grid-column: 1 / 4;
  @media ${(props) => props.theme.minWidth.md} {
    grid-column: span 1;
    border-right: ${(props) => props.theme.border};
    height: 100%;
    padding-top: 25px;
    padding-right: 25px;
  }
`;
const StyledNetworks = styled.div`
  grid-column: 4 / 5;
  @media ${(props) => props.theme.minWidth.md} {
    grid-column: span 1;
    border-right: ${(props) => props.theme.border};
    height: 100%;
    padding-top: 25px;
    padding-right: 25px;
  }
`;

const StyledText = styled(Text)`
  padding-bottom: 15px;
`;

const StyledCredits = styled(PageContainer)`
  display: none;
  @media ${(props) => props.theme.minWidth.md} {
    display: flex;
    justify-content: space-between;
    grid-row: 2 / 3;
    grid-column: 2 / 8;
    padding: 15px 25px 0;
    margin: 0 -25px;
    border-top: solid ${(props) => props.theme.colors.black} 1px;
  }
`;

const StyledMobileCredits = styled(PageContainer)`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  grid-column: span 4;
  @media ${(props) => props.theme.minWidth.md} {
    display: none;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledPageContainer>
        {/* Mobile version */}
        <MobileGrid>
          <StyledLogo>
            <Link className="logo" to="/">
              <img src={PPlogo} alt="Logo Pivot Panda" />
            </Link>
          </StyledLogo>
          <DoubleElementRow>
            <StyledContact>
              <StyledText type="label">Nous contacter</StyledText>
              <Link to="/" activeClassName="active">
                contact@pivotpanda.com
              </Link>
            </StyledContact>
            <StyledNetworks>
              <StyledText type="label">Nous suivre</StyledText>
              <a
                href="https://www.linkedin.com/company/pivot-panda/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>

              <a href="/#" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </StyledNetworks>
          </DoubleElementRow>
          <StyledRow>
            <StyledText type="label">Nos locaux</StyledText>
            18 rue Balthazar Dieudé, 13006, Marseille <br />
            38 rue du Chemin Vert, 75011, Paris
          </StyledRow>

          <StyledRow>
            <StyledText type="label">Ressources</StyledText>
            <Link to="/" activeClassName="active">
              Plaquette de présentation
            </Link>
            <Link to="/" activeClassName="active">
              Mentions légales
            </Link>
            <Link to="/" activeClassName="active">
              Politique de confidentialité
            </Link>
          </StyledRow>
        </MobileGrid>

        {/* Desktop version */}
        <DesktopGrid>
          <StyledLogo>
            <Link className="logo" to="/">
              <img src={PPlogo} alt="Logo Pivot Panda" />
            </Link>
          </StyledLogo>
          <StyledContact>
            <StyledText type="label">Nous contacter</StyledText>
            <Link to="/" activeClassName="active">
              contact@pivotpanda.com
            </Link>
          </StyledContact>
          <StyledNetworks>
            <StyledText type="label">Nous suivre</StyledText>
            <a
              href="https://www.linkedin.com/company/pivot-panda/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href="/#" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </StyledNetworks>
          <StyledRow>
            <StyledText type="label">Nos locaux</StyledText>
            18 rue Balthazar Dieudé, 13006, Marseille <br />
            38 rue du Chemin Vert, 75011, Paris
          </StyledRow>
          <StyledResources>
            <StyledText type="label">Ressources</StyledText>
            <Link to="/" activeClassName="active">
              Plaquette de présentation
            </Link>
            <Link to="/" activeClassName="active">
              Mentions légales
            </Link>
            <Link to="/" activeClassName="active">
              Politique de confidentialité
            </Link>
          </StyledResources>
          <StyledCredits>
            <p>© Pivot Panda 2023.</p>
            <p>Site créé par Adrien & Clément Lapasset</p>
          </StyledCredits>
        </DesktopGrid>
      </StyledPageContainer>
      <StyledMobileCredits>
        © Pivot Panda 2023. <br />
        Site créé par Adrien & Clément Lapasset
      </StyledMobileCredits>
    </StyledFooter>
  );
};

export default Footer;
