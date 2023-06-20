import React, { useState, useRef } from "react";
import styled from "styled-components";
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Button from "components/global/Button";
import Grid from "components/global/Grid";
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
const StyledCarouselContainer = styled(Grid)`
  border-top: ${({ theme }) => theme.border};
  border-bottom: ${({ theme }) => theme.border};
  padding: ${({ theme }) => theme.columnGap.mobile};
  display: block;
  @media ${(props) => props.theme.minWidth.md} {
    display: grid;
    padding: 0;
  }
  .info-container {
    @media ${(props) => props.theme.minWidth.md} {
      grid-column: 1 / span 2;
      padding: ${({ theme }) => theme.columnGap.desktop};
      align-self: start;
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    & > div:not(.project-nav) {
      display: none;
      @media ${(props) => props.theme.minWidth.md} {
        display: block;
        margin-top: ${({ theme }) => theme.columnGap.desktop};
      }
    }
  }
  .slider-container {
    margin: ${({ theme }) => theme.columnGap.mobile} 0;
    @media ${(props) => props.theme.minWidth.md} {
      margin: 0;
      grid-column: 3 / span 5;
      border-left: ${({ theme }) => theme.border};
      padding: ${({ theme }) => theme.columnGap.desktop};
    }
    .gatsby-image-wrapper {
      width: 100%;
      aspect-ratio: 1.25;
      @media ${(props) => props.theme.minWidth.md} {
        aspect-ratio: 1.65;
      }
    }
  }
  .btn-container-mobile {
    display: flex;
    @media ${(props) => props.theme.minWidth.md} {
      display: none;
    }
    button {
      margin-right: 15px;
    }
  }
  .project-nav {
    display: none;
    @media ${(props) => props.theme.minWidth.md} {
      margin-top: auto;
      display: block;
    }
    .btn-container-desktop {
      margin-top: 10px;
      display: flex;
      button {
        margin-right: 15px;
      }
    }
  }
`;

const ProjectsSection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allSanityProject(filter: { isFeaturedProject: { eq: true } }) {
          nodes {
            category
            city
            name
            mission
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
  const initProject = projects[0];
  const [currentProject, setCurrentProject] = useState(initProject);
  const [projectIndex, setProjectIndex] = useState(1);
  const sliderRef = useRef();

  const handleProjectChange = (oldIndex, newIndex) => {
    setProjectIndex(newIndex + 1);
    const project = projects[newIndex];
    setCurrentProject(project);
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
        <div className="info-container">
          <Text type="label">Projet</Text>
          <Text type="projectTitle">{currentProject.name}</Text>
          <div>
            <Text type="label">Catégorie</Text>
            <Text type="projectInfo">{currentProject.category}</Text>
          </div>
          <div>
            <Text type="label">Lieu</Text>
            <Text type="projectInfo">{currentProject.city}</Text>
          </div>
          <div>
            <Text type="label">Mission</Text>
            <Text type="projectInfo">{currentProject.mission}</Text>
          </div>
          <div className="project-nav">
            <Text type="label">
              0{projectIndex}/0{projects.length}
            </Text>
            <div className="btn-container-desktop">
              <Button
                prev
                onClick={() => sliderRef.current.slickPrev()}
              ></Button>
              <Button
                next
                onClick={() => sliderRef.current.slickNext()}
              ></Button>
            </div>
          </div>
        </div>
        <div className="slider-container">
          <Slider {...sliderSettings} ref={sliderRef}>
            {projects.map(({ name, image, slug }) => {
              const getGatsbyImage = getImage(image.asset);
              return (
                <Link key={name} to={"/projet/" + slug.current}>
                  <GatsbyImage key={name} image={getGatsbyImage} alt={name} />
                </Link>
              );
            })}
          </Slider>
        </div>
        <div className="btn-container-mobile">
          <Button prev onClick={() => sliderRef.current.slickPrev()}></Button>
          <Button next onClick={() => sliderRef.current.slickNext()}></Button>
        </div>
      </StyledCarouselContainer>
    </>
  );
};

export default ProjectsSection;
