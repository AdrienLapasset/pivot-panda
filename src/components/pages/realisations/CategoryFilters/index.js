import React, { useState } from "react";
import styled from "styled-components";
import Grid from "components/global/Grid";
import ArrowDropdown from "../../../../assets/icons/ArrowDropdown";
import RadioButton from "../../../global/RadioButton";

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

const StyledRadioButton = styled(RadioButton)``;

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
        <StyledRadioButton
          label="Tout voir"
          id="tout-voir"
          value="tout-voir"
          checked={selectedValue === "tout-voir"}
          onChange={handleChange}
        />
        <StyledRadioButton
          label="Bars Restaurants"
          id="bars-restaurants"
          value="bars-restaurants"
          checked={selectedValue === "bars-restaurants"}
          onChange={handleChange}
        />
        <StyledRadioButton
          label="Bureaux"
          id="bureaux"
          value="bureaux"
          checked={selectedValue === "bureaux"}
          onChange={handleChange}
        />
        <RadioButton
          label="Coworking"
          id="coworking"
          value="coworking"
          checked={selectedValue === "coworking"}
          onChange={handleChange}
        />
        <StyledRadioButton
          label="Hôtels"
          id="hotels"
          value="hotels"
          checked={selectedValue === "hotels"}
          onChange={handleChange}
        />
        <StyledRadioButton
          label="Logements"
          id="logements"
          value="logements"
          checked={selectedValue === "logements"}
          onChange={handleChange}
        />
      </StyledRadioGroup>
    </StyledContainer>
  );
};

export default CategoryFilters;
