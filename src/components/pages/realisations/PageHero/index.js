import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  h1 {
    text-transform: uppercase;
    font-size: 38px;
    line-height: 45px;
    margin-top: 100px;
    @media ${(props) => props.theme.minWidth.md} {
      font-size: 70px;
      line-height: 75px;
      margin-top: 260px;
    }
  }
`;

const PageHero = () => {
  return (
    <StyledContainer>
      <h1>
        Nos <br />
        réalisations
      </h1>
    </StyledContainer>
  );
};

export default PageHero;
