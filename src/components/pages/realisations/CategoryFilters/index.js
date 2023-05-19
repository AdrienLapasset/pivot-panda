import React from "react";
import styled from "styled-components";
import Grid from "components/global/Grid";
import ArrowDropdown from "../../../../assets/icons/ArrowDropdown";

const StyledContainer = styled.div`
  height: 45px;
  border-top: 1px solid ${(props) => props.theme.colors.black};
  border-bottom: 1px solid ${(props) => props.theme.colors.black};
  margin: 0 -15px;
  p {
    padding: 15px;
    line-height: 15px;
    text-transform: uppercase;
    grid-column: 1 / 5;
  }
`;

const CategoryFilters = () => {
  return (
    <StyledContainer>
      <Grid>
        <p>
          Tous les projets
          <ArrowDropdown />
        </p>
      </Grid>
    </StyledContainer>
  );
};

export default CategoryFilters;
