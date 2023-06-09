import React from "react";
import styled from "styled-components";
import Grid from "components/global/Grid";
import PageContainer from "components/global/PageContainer";

const StyledContainer = styled.div`
  h1 {
    text-transform: uppercase;
    font-size: 38px;
    line-height: 45px;
    padding-top: 100px;
    padding-bottom: 15px;
    grid-column: 1/5;
    @media ${(props) => props.theme.minWidth.md} {
      font-size: 70px;
      line-height: 75px;
      padding-top: 260px;
      grid-column: 1/5;
      border-right: 1px solid ${(props) => props.theme.colors.black};
    }
  }
  p {
    font-size: 14px;
    line-height: 21px;
    padding-bottom: 15px;
    grid-column: 1/5;
    @media ${(props) => props.theme.minWidth.md} {
      font-size: 14px;
      line-height: 25px;
      padding-top: 260px;
      padding-bottom: 0;
      grid-column: 5/7;
    }
  }
`;

const PageHero = () => {
  return (
    <StyledContainer>
      <PageContainer>
        <Grid>
          <h1>Réalisations</h1>
          <p>
            Pivot Panda réalise différents types de projet tels que des
            coworkings, bureaux, colivings, projets d'hôtellerie, restaurants,
            bars et logements
          </p>
        </Grid>
      </PageContainer>
    </StyledContainer>
  );
};

export default PageHero;
