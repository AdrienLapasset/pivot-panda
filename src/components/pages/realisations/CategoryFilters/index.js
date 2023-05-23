import React, { useState } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Grid from "components/global/Grid";
import RadioButton from "./RadioButton";

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
  const data = useStaticQuery(graphql`
    query {
      allSanityProject {
        distinct(field: { category: SELECT })
      }
    }
  `);

  const categories = data.allSanityProject.distinct;
  const allCategories = ["Tout les projets", ...categories];

  const [selectedValue, setSelectedValue] = useState("Tout les projets");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <StyledContainer>
      <Grid>
        <MobileDropdown>
          {allCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </MobileDropdown>
      </Grid>
      <StyledRadioGroup>
        {allCategories.map((category) => (
          <RadioButton
            key={category}
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
