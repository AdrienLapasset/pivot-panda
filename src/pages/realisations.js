import React, { useState } from "react";
import Layout from "components/Layout";
import PageHero from "../components/pages/realisations/PageHero";
import CategoryFilters from "../components/pages/realisations/CategoryFilters";
import ProjectsList from "../components/pages/realisations/ProjectsList";

const Realisations = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
  };

  return (
    <Layout>
      <PageHero />
      <CategoryFilters onCategoryChange={handleCategoryChange} />
      <ProjectsList selectedCategory={selectedCategory} />
    </Layout>
  );
};

export default Realisations;
