import * as React from "react";
import Layout from "components/Layout";
import PageHero from "../components/pages/realisations/PageHero";
import CategoryFilters from "../components/pages/realisations/CategoryFilters";

const Realisations = () => {
  return (
    <Layout>
      <PageHero />
      <CategoryFilters />
    </Layout>
  );
};

export default Realisations;
