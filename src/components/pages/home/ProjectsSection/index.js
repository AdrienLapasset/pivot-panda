import React, { useState, useRef } from "react";
import styled from "styled-components";
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Button from "components/global/Button";
// import Grid from "components/global/Grid";
import Text from "components/global/Text";
import SectionHeader from "components/pages/home/SectionHeader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSectionHeader = styled(SectionHeader)`
  margin: 80px 0 30px;
  @media ${(props) => props.theme.minWidth.md} {
    margin: 180px 0 50px;
  }
`;
const StyledCarouselContainer = styled.div`
  border-top: ${({ theme }) => theme.border};
  border-bottom: ${({ theme }) => theme.border};
  padding: 15px;
  .btn-container {
    display: flex;
    button {
      margin-right: 15px;
    }
  }
`;
const StyledSlider = styled(Slider)`
  margin: 15px 0;
  .gatsby-image-wrapper {
    aspect-ratio: 1.25;
  }
`;

const ProjectsSection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allSanityProject {
          nodes {
            category
            city
            name
            image {
              asset {
                gatsbyImageData
              }
            }
            slug {
              current
            }
          }
        }
      }
    `
  );

  const projects = data.allSanityProject.nodes;
  const initProjectName = projects[0].name;
  const [currentProjectName, setCurrentProjectName] = useState(initProjectName);
  const sliderRef = useRef();

  const handleProjectChange = (oldIndex, newIndex) => {
    const projectName = projects[newIndex].name;
    setCurrentProjectName(projectName);
  };

  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    focusOnSelect: true,
    beforeChange: (oldIndex, newIndex) => {
      handleProjectChange(oldIndex, newIndex);
    },
  };
  return (
    <>
      <StyledSectionHeader
        title="Sélection de projets"
        buttonText="Tous nos projets"
        buttonTo="/realisation"
      >
        Basé à Marseille et Paris, nous réalisons des projets d’espaces de
        travail, de lieux de vie tels que des hôtels, des commerces, du
        co-living, co-working ou des logements meublés, centrés sur les usages
        et adaptés aux besoins du client.
      </StyledSectionHeader>
      <StyledCarouselContainer>
        <Text type="label">Projet</Text>
        <Text type="projectTitle">{currentProjectName}</Text>
        <StyledSlider {...sliderSettings} ref={sliderRef}>
          {projects.map(({ name, image }) => {
            const getGatsbyImage = getImage(image.asset);
            return <GatsbyImage key={name} image={getGatsbyImage} alt={name} />;
          })}
        </StyledSlider>
        <div className="btn-container">
          <Button prev onClick={() => sliderRef.current.slickPrev()}></Button>
          <Button next onClick={() => sliderRef.current.slickNext()}></Button>
        </div>
      </StyledCarouselContainer>
    </>
  );
};

export default ProjectsSection;
