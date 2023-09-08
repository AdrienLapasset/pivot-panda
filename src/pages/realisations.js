import React, { useState } from "react";
import Layout from "components/Layout";
import PageHero from "components/pages/realisations/PageHero";
import CategoryFilters from "components/pages/realisations/CategoryFilters";
import ProjectsList from "components/pages/realisations/ProjectsList";
import Seo from "components/Seo";

const Realisations = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
  };

  return (
    <>
      <Seo pageTitle="Réalisations" />
      <Layout>
        <div className="pageAnimation">
          <PageHero />
          <CategoryFilters onCategoryChange={handleCategoryChange} />
          <ProjectsList selectedCategory={selectedCategory} />
        </div>
      </Layout>
    </>
  );
};

export default Realisations;
