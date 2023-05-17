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
const StyledRow = styled(Grid)`
  margin-top: 30px;
  @media ${(props) => props.theme.minWidth.md} {
    margin-top: 70px;
  }
  & > * {
    align-self: start;
  }
  p {
    line-height: 10px;
    grid-column: 1/5;
    @media ${(props) => props.theme.minWidth.md} {
      grid-column: 3/6;
    }
  }
  aside {
    text-transform: uppercase;
    opacity: 0.5;
    display: none;
    font-size: 11px;
    @media ${(props) => props.theme.minWidth.md} {
      display: block;
    }
    &:first-of-type {
      grid-column: 6;
    }
    &:last-of-type {
      grid-column: 7;
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
      <StyledRow>
        <p>Nous donnons vie à votre projet, étape par étape.</p>
        <aside>
          Paris <br /> Marseille
        </aside>
        <aside>depuis 2019</aside>
      </StyledRow>
    </StyledContainer>
  );
};

export default comingSoon;
