import * as React from "react";
import Layout from "components/Layout";
import PageHero from "../components/pages/realisations/PageHero";
import CategoryFilters from "../components/pages/realisations/CategoryFilters";
import ProjectsList from "../components/pages/realisations/CategoryFilters/ProjectsList";

const Realisations = () => {
  return (
    <Layout>
      <PageHero />
      <CategoryFilters />
      <ProjectsList />
    </Layout>
  );
};

export default Realisations;
