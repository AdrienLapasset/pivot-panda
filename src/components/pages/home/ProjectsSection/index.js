import * as React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// import Grid from "components/global/Grid";
// import Text from "components/global/Text";
import SectionHeader from "components/pages/home/SectionHeader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import theme from "styles/theme";

const StyledSectionHeader = styled(SectionHeader)`
  margin: 80px 0 30px;
  @media ${(props) => props.theme.minWidth.md} {
    margin: 180px 0 50px;
  }
`;

const sliderSettings = {
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  focusOnSelect: true,
};

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

  return (
    <>
      <StyledSectionHeader
        title="Sélection de projets"
        button="Tous nos projets"
      >
        Basé à Marseille et Paris, nous réalisons des projets d’espaces de
        travail, de lieux de vie tels que des hôtels, des commerces, du
        co-living, co-working ou des logements meublés, centrés sur les usages
        et adaptés aux besoins du client.
      </StyledSectionHeader>
      <Slider {...sliderSettings}>
        {projects.map(({ name, image, category, city }) => {
          const getGatsbyImage = getImage(image.asset);
          return <GatsbyImage image={getGatsbyImage} alt={name} />;
        })}
      </Slider>
    </>
  );
};

export default ProjectsSection;
