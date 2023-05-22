import React, { useState } from "react";
import styled from "styled-components";
import Grid from "components/global/Grid";
import ArrowDropdown from "../../../../assets/icons/ArrowDropdown";
import RadioButton from "./RadioButton";

//créer un tableau avec les catégorie
const categories = [
  "Tout voir",
  "Bars restaurants",
  "Bureaux",
  "Coworking",
  "Hôtels",
  "Logements",
];

const StyledContainer = styled.div`
  height: 45px;
  border-top: 1px solid ${(props) => props.theme.colors.black};
  border-bottom: 1px solid ${(props) => props.theme.colors.black};
  margin: 0 -15px;
  @media ${(props) => props.theme.minWidth.md} {
    height: 75px;
    margin: 0 -25px;
  }
`;

const StyledDropdown = styled.div`
  display: flex;
  align-items: center;
  grid-column: 1 / 5;
  p {
    padding: 15px;
    line-height: 15px;
    text-transform: uppercase;
  }
  @media ${(props) => props.theme.minWidth.md} {
    display: none;
  }
`;

const StyledRadioGroup = styled(Grid)`
  display: none;
  @media ${(props) => props.theme.minWidth.md} {
    display: grid;
    margin: 0 25px;
    align-items: center;
    height: 100%;
  }
`;

const CategoryFilters = () => {
  const [selectedValue, setSelectedValue] = useState("tout-voir");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <StyledContainer>
      <Grid>
        <StyledDropdown>
          <p>Tous les projets</p>
          <ArrowDropdown />
        </StyledDropdown>
      </Grid>
      <StyledRadioGroup>
        {categories.map((category) => (
          <RadioButton
            category={category}
            onChange={handleChange}
            selectedValue={selectedValue}
          />
        ))}
      </StyledRadioGroup>
    </StyledContainer>
  );
};

export default CategoryFilters;
