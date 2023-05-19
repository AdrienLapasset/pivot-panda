import React from "react";
import styled from "styled-components";
import Grid from "components/global/Grid";

const StyledContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  @media ${(props) => props.theme.minWidth.md} {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  h1 {
    text-transform: uppercase;
    font-size: 38px;
    line-height: 45px;
    margin-top: 100px;
    padding-bottom: 15px;
    grid-column: 1/5;
    @media ${(props) => props.theme.minWidth.md} {
      font-size: 70px;
      line-height: 75px;
      margin-top: 260px;
      grid-column: 1/5;
    }
    &::after {
      content: "";
      display: block;
      padding-top: 15px;
      border-bottom: 1px solid ${(props) => props.theme.colors.black};
      margin: 0 -15px;
      @media ${(props) => props.theme.minWidth.md} {
        display: none;
      }
    }
  }
  p {
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 15px;
    grid-column: 1/5;
    @media ${(props) => props.theme.minWidth.md} {
      font-size: 14px;
      line-height: 25px;
      margin-top: 260px;
      grid-column: 5/7;
    }
  }
`;

const PageHero = () => {
  return (
    <StyledContainer>
      <Grid>
        <h1>
          Nos <br />
          réalisations
        </h1>
        <p>
          Pivot Panda réalise différents types de projet tels que des
          coworkings, bureaux, colivings, projets d'hôtellerie, restaurants,
          bars et logements
        </p>
      </Grid>
    </StyledContainer>
  );
};

export default PageHero;
