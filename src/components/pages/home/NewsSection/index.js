import * as React from "react";
import styled from "styled-components";
import Grid from "components/global/Grid";
import Button from "components/global/Button";
import HeroVideo from "assets/videos/placeholder.mp4";
import PageContainer from "components/global/PageContainer";
import SectionHeader from "components/pages/home/SectionHeader";

const StyledContainer = styled.div``;
const StyledSectionHeader = styled(SectionHeader)`
  margin: 80px 0 30px;
  @media ${(props) => props.theme.minWidth.md} {
    margin: 180px 0 50px;
  }
`;

const NewsSection = () => {
  return (
    <StyledContainer>
      <StyledSectionHeader
        title="les actualités de Pivot Panda"
        buttonText="Tous les posts"
        buttonTo="/" //TODO linkedin adress
      >
        Suivez nos projets en cours et nos évènements.
      </StyledSectionHeader>
    </StyledContainer>
  );
};

export default NewsSection;
