import React, { useState } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Grid from "components/global/Grid";
import PageContainer from "components/global/PageContainer";
import RadioButton from "./RadioButton";

const StyledContainer = styled.div`
  height: 45px;
  border-top: 1px solid ${(props) => props.theme.colors.black};
  border-bottom: 1px solid ${(props) => props.theme.colors.black};
  @media ${(props) => props.theme.minWidth.md} {
    height: 75px;
  }
`;

const StyledPageContainer = styled(PageContainer)`
  height: 100%;
`;

const MobileDropdown = styled.select`
  grid-column: 1 / 3;
  font-size: 12px;
  padding: 15px 0;
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
    align-items: center;
    height: 100%;
  }
`;

const CategoryFilters = ({ onCategoryChange }) => {
  const data = useStaticQuery(graphql`
    query {
      allSanityProject {
        distinct(field: { category: SELECT })
      }
    }
  `);

  const categories = data.allSanityProject.distinct;
  const allCategories = ["Tous les projets", ...categories];

  const [selectedCategory, setSelectedCategory] = useState("Tous les projets");

  const handleChange = (event) => {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);
    onCategoryChange(newCategory);
  };

  return (
    <StyledContainer>
      <StyledPageContainer>
        <Grid>
          <MobileDropdown value={selectedCategory} onChange={handleChange}>
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
              selectedCategory={selectedCategory}
            />
          ))}
        </StyledRadioGroup>
      </StyledPageContainer>
    </StyledContainer>
  );
};

export default CategoryFilters;
