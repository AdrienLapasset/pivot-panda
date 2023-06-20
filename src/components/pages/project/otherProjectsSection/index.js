import React from "react";
import styled from "styled-components";
import SectionHeader from "components/pages/home/SectionHeader";
import ProjectsList from "../../realisations/ProjectsList";

const StyledSection = styled.div`
  margin-bottom: 175px;
`;

const StyledDesktopList = styled.div`
  display: none;
  @media ${(props) => props.theme.minWidth.md} {
    display: block;
  }
`;

const StyledContainer = styled.div`
  border-top: solid ${(props) => props.theme.colors.black} 1px;
  border-bottom: solid ${(props) => props.theme.colors.black} 1px;
`;

const StyledSectionHeader = styled(SectionHeader)`
  margin: 30px 0;
  padding: 0;
  @media ${(props) => props.theme.minWidth.md} {
    margin: 50px 0px;
  }
  & > div {
    margin-top: 0;
  }
`;

const OtherProjectsSection = ({ isFeaturedProject }) => {
  return (
    <StyledSection>
      <StyledContainer>
        <StyledSectionHeader
          title="Autres projets"
          buttonText="Voir nos projets"
          buttonTo="/realisations"
        />
      </StyledContainer>
      <StyledDesktopList>
        <ProjectsList featuredOnly={true} />
      </StyledDesktopList>
    </StyledSection>
  );
};

export default OtherProjectsSection;
