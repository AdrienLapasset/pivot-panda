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
      <h1>coming soon</h1>
    </StyledContainer>
  );
};

export default comingSoon;
