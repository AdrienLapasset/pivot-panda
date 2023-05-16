import * as React from "react";
import styled from "styled-components";
import PPlogo from "assets/logo.svg";
import { StaticImage } from "gatsby-plugin-image";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 15px;
  text-align: center;
  @media ${(props) => props.theme.minWidth.lg} {
    padding: 25px;
  }
  .logo {
    height: 170px;
  }
  h1 {
    color: ${(props) => props.theme.colors.black};
    text-transform: uppercase;
    font-size: 28px;
    font-weight: 700;
    margin: 40px 0;
    @media ${(props) => props.theme.minWidth.lg} {
      font-size: 33px;
    }
  }
  p {
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 10px;
    @media ${(props) => props.theme.minWidth.lg} {
      margin-bottom: 25px;
    }
  }
  a {
    display: inline;
    text-decoration: underline;
  }
  .gatsby-image-wrapper {
    margin-top: -30px;
    z-index: -1;
    @media ${(props) => props.theme.minWidth.sm} {
      margin-top: -80px;
    }
  }
`;

const comingSoon = () => {
  return (
    <StyledContainer>
      <img className="logo" src={PPlogo} alt="Logo" />
      <h1>Le site de pivot panda se refait une beauté !</h1>
      <p>
        Nous travaillons actuellement sur notre nouveau site. Pendant ce temps,
        nous vous prions de bien vouloir patienter.{" "}
      </p>
      <p>
        Vous pouvez nous contacter à l'adresse suivante :{" "}
        <a href="mailto:contact@pivotpanda.com">contact@pivotpanda.com</a>
      </p>
      <StaticImage
        src="../assets/coming-soon-panda.png"
        alt="Panda"
        height={500}
      />
    </StyledContainer>
  );
};

export default comingSoon;
