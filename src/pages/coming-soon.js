import * as React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const comingSoon = () => {
  return (
    <StyledContainer>
      <h1>le site de pivot panda se refait une beauté !</h1>
      <p>Nous travaillons actuellement sur notre nouveau site. Pendant ce temps, nous vous prions de bien vouloir patienter.</p>
      <p>N'hésitez pas à nous contacter à l'adresse suivante : contact@pivotpanda.com.</p>
    </StyledContainer>
  );
};

export default comingSoon;
