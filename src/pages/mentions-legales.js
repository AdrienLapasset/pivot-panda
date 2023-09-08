import React from "react";
import styled from "styled-components";
import Layout from "components/Layout";
import Title from "components/global/Title";
import Text from "components/global/Text";
import PageContainer from "components/global/PageContainer";
import Seo from "components/Seo";

const StyledTitle = styled(Title)`
  margin-top: 45px;
  @media ${(props) => props.theme.minWidth.md} {
    margin-top: 75px;
  }
`;

const StyledSectionTitle = styled(Text)`
  font-size: 28px;
  margin: 75px 0 30px;
  @media ${(props) => props.theme.minWidth.md} {
    font-size: 48px;
    margin-bottom: 65px 0 25px;
  }
`;

const MentionsLegales = () => {
  return (
    <>
      <Seo pageTitle="Mentions légales" />
      <Layout>
        <PageContainer className="pageAnimation">
          <StyledTitle>Mentions légales</StyledTitle>
          <StyledSectionTitle>Éditeur et hébergeur du site</StyledSectionTitle>
          <Text>
            Le site pivotpanda.com est édité par Pivot Panda, SAS, domiciliée à
            55 rue Sylvabelle, 13006, Marseille. <br /> Email :
            contact@pivotpanda.com <br /> Le directeur de la publication du site
            web "pivotpanda.com" est Guillaume Tanguy. <br /> Le site
            pivotpanda.com est hébergé par OVH SAS, dont le siège social est
            situé au 2 rue Kellermann - 59100 Roubaix - France.
          </Text>
          <StyledSectionTitle>Informations légales</StyledSectionTitle>
          <Text>
            Pivot Panda est une SAS, immatriculée au Registre du Commerce et des
            Sociétés de Marseille sous le numéro B 848 856 993. <br /> Numéro de
            TVA intracommunautaire : FR18848856993
          </Text>
          <StyledSectionTitle>Propriété intellectuelle</StyledSectionTitle>
          <Text>
            Tous les contenus présents sur le site pivotpanda.com sont couverts
            par le droit d'auteur. Toute reprise est dès lors conditionnée à
            l'accord de l'auteur en vertu de l'article L.122-4 du Code de la
            Propriété Intellectuelle.
          </Text>
          <StyledSectionTitle>
            Données personnelles et cookies
          </StyledSectionTitle>
          <Text>
            Ce site ne collecte aucune donnée personnelle des visiteurs et
            n'utilise pas de cookies. Aucune information personnelle
            identifiable n'est demandée ni enregistrée lors de la navigation sur
            ce site. Par conséquent, aucune donnée personnelle n'est partagée,
            vendue ou transférée à des tiers. <br /> Cookies : Ce site n'utilise
            pas de cookies. Les cookies sont de petits fichiers texte stockés
            sur votre ordinateur ou votre appareil lorsque vous visitez certains
            sites web. Comme ce site ne collecte pas de données personnelles, il
            n'est pas nécessaire d'utiliser des cookies
          </Text>
          <StyledSectionTitle>Limitation de responsabilité</StyledSectionTitle>
          <Text>
            Pivot Panda ne saurait être tenu pour responsable des erreurs
            rencontrées sur le site, problèmes techniques, interprétation des
            informations publiée et conséquences de leur utilisation. Par
            conséquent, l'utilisateur reconnaît utiliser ces informations sous
            sa responsabilité exclusive.
          </Text>
        </PageContainer>
      </Layout>
    </>
  );
};

export default MentionsLegales;
