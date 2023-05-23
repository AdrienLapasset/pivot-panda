import React, { useState } from "react";
import styled from "styled-components";
import Grid from "components/global/Grid";
import RadioButton from "./RadioButton";

//créer ces catégories dans sanity et le récupérer ici
const categories = [
  "Tout les projets",
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

const MobileDropdown = styled.select`
  grid-column: 1 / 3;
  font-size: 12px;
  padding: 15px;
  line-height: 15px;
  text-transform: uppercase;
  border: none;
  background-color: transparent;
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
  const [selectedValue, setSelectedValue] = useState("Tout les projets");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  //add query for categories

  return (
    <StyledContainer>
      <Grid>
        <MobileDropdown>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </MobileDropdown>
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
