import * as React from "react";
import styled from "styled-components";
import PPlogo from "assets/logo.svg";

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
  };
  img {
    height: 225px;
    margin-bottom: 40px;
    @media ${(props) => props.theme.minWidth.lg} {
      height: 245px;
      margin-bottom: 90px;
    }
  }
  h1 {
    text-transform: uppercase;
    font-size: 28px;
    font-weight:  700;
    line-height: 35px;
    margin-bottom:  40px;
    @media ${(props) => props.theme.minWidth.lg} {
      font-size: 33px;
    }
  }
  p {
    margin-bottom:20px;
    @media ${(props) => props.theme.minWidth.lg} {
      margin-bottom:25px;
    }
  }
  a {
  display: inline;
  text-decoration:underline;
}
`;

const comingSoon = () => {
  return (
    <StyledContainer>
      <img src={PPlogo} alt="Logo" />
      <h1>Le site de pivot panda se refait une beauté !</h1>
      <p>Nous travaillons actuellement sur notre nouveau site. Pendant ce temps, nous vous prions de bien vouloir patienter. </p>
      <p>Vous pouvez nous contacter à l'adresse suivante : <a href="mailto:contact@pivotpanda.com">contact@pivotpanda.com</a></p>
    </StyledContainer>
  );
};

export default comingSoon;
