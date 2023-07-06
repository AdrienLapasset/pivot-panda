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
  position: sticky;
  top: 60px;
  z-index: 1;
  background-color: white;
  @media ${(props) => props.theme.minWidth.md} {
    height: 75px;
    top: unset;
    position: relative;
  }
`;

const StyledPageContainer = styled(PageContainer)`
  height: 100%;
`;

const MobileDropdown = styled.select`
  font-size: 12px;
  padding: 15px 0;
  text-transform: uppercase;
  border: none;
  background-color: transparent;
  grid-column: 1 / 5;
  width: 150px;
  @media ${(props) => props.theme.minWidth.md} {
    display: none;
  }
`;

const StyledRadioGroup = styled(Grid)`
  display: none;
  @media ${(props) => props.theme.minWidth.md} {
    line-height: 15px;
    display: grid;
    align-items: center;
    height: 100%;
  }
  & > div {
    @media ${(props) => props.theme.minWidth.md} {
      &:nth-child(1) {
        grid-column: 1 / 3;
      }
      &:nth-child(2) {
        grid-column: 3 / 5;
      }
      &:nth-child(3) {
        grid-column: 5 / 7;
      }
      &:nth-child(4) {
        grid-column: 1 / 3;
      }
      &:nth-child(5) {
        grid-column: 3 / 5;
      }
    }
    @media ${(props) => props.theme.minWidth.lg} {
      grid-column: unset !important;
    }
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
