import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "components/Layout";
import Button from "components/global/Button";
import Text from "components/global/Text";

const StyledContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media ${({ theme }) => theme.minWidth.md} {
    height: calc(100vh - 300px);
  }
  p {
    margin-bottom: 25px;
  }
`;

const Page404 = () => {
  return (
    <Layout>
      <StyledContainer>
        <StaticImage
          src="../assets/imgs/coming-soon-panda.png"
          alt="Panda"
          height={500}
        />
        <Text>Cette page n'existe pas...</Text>
        <Button to="/">Retour à la page d'accueil</Button>
      </StyledContainer>
    </Layout>
  );
};

export default Page404;
