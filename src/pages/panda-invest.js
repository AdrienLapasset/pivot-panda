import React from "react";
import styled from "styled-components";
import Layout from "components/Layout";
import Title from "components/global/Title";
import Text from "components/global/Text";
import Button from "components/global/Button";
import Grid from "components/global/Grid";
import { Link } from "gatsby";
import closeBtn from "assets/icons/close-btn.svg";
import Seo from "components/Seo";

const StyledGrid = styled(Grid)`
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  min-height: 100vh;
  display: block;
  @media ${(props) => props.theme.minWidth.md} {
    display: grid;
  }
`;
const StyledContainer = styled.div`
  grid-column: 3/8;
  height: 100%;
  @media ${(props) => props.theme.minWidth.md} {
    border-left: 1px solid white;
  }
  .close-btn {
    position: absolute;
    top: 25px;
    right: 25px;
    margin-left: auto;
  }
  h1 {
    border-bottom: 1px solid white;
    padding: 170px 15px 15px;
    @media ${(props) => props.theme.minWidth.md} {
      padding: 240px 25px 25px;
    }
  }
  & > div {
    padding: 15px;
    @media ${(props) => props.theme.minWidth.md} {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-column-gap: ${({ theme }) => theme.columnGap.mobile};
      padding: 25px;
      grid-column-gap: ${({ theme }) => theme.columnGap.desktop};
    }
    p {
      grid-column: 1 / span 2;
    }
    a {
      &:first-of-type {
        grid-row: 2;
        margin: 20px 0 15px;
        @media ${(props) => props.theme.minWidth.md} {
          margin: 50px 0 25px;
        }
      }
      &:last-of-type {
        grid-row: 3;
      }
    }
  }
`;

const PandaInvest = () => {
  return (
    <>
      <Seo pageTitle="Panda Invest" />

      <Layout>
        <StyledGrid className="pageAnimation">
          <StyledContainer>
            <Link className="close-btn" to="/">
              <img src={closeBtn} alt="fermer la modal" />
            </Link>
            <Title type="pageTitle" white>
              Panda invest
            </Title>
            <div>
              <Text white>
                Structure organisée comme un opérateur, investisseur et maître
                d’ouvrage, Panda Invest est organisé pour développer des projets
                immobiliers singuliers, mettant la programmation,
                l’architecture, l’exploitation au service des utilisateurs.
                <br />
                Panda Invest recherche des montages plus vertueux, optimisés et
                innovants.
                <br />
                Panda Invest prend part à des projets avec des partenaires ou
                des clients en ayant le besoin ou juste l’envie.
                <br />
                Pour en parler, n’hésitez pas à nous contacter.
              </Text>
              <Button
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:contact@pivotpanda.com"
                white
              >
                contact@pivotpanda.com
              </Button>
            </div>
          </StyledContainer>
        </StyledGrid>
      </Layout>
    </>
  );
};

export default PandaInvest;
