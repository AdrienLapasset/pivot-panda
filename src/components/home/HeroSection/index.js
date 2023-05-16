import * as React from "react";
import styled from "styled-components";
import Grid from "components/global/Grid";

const StyledContainer = styled.div`
  h1 {
    text-transform: uppercase;
    font-size: 40px;
    grid-column: 1/5;
    margin-top: 75px;
    line-height: 45px;
    @media ${(props) => props.theme.minWidth.md} {
      margin-top: 163px;
      font-size: 107px;
      line-height: 100px;
      grid-column: 2 / 7;
    }
  }
`;

const comingSoon = () => {
  return (
    <StyledContainer>
      <Grid>
        <h1>
          Créateurs
          <br /> de lieux uniques
        </h1>
      </Grid>
    </StyledContainer>
  );
};

export default comingSoon;
