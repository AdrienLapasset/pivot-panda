import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Grid from "components/global/Grid";
import SectionHeader from "components/pages/home/SectionHeader";
import Text from "components/global/Text";

const StyledContainer = styled.div``;
const StyledSectionHeader = styled(SectionHeader)`
  margin: 80px 0 30px;
  @media ${(props) => props.theme.minWidth.md} {
    margin: 180px 0 50px;
  }
`;
const StyledNewsContainer = styled.div``;
const StyledNews = styled(Grid)`
  display: block;
  padding: ${(props) => props.theme.columnGap.mobile};
  @media ${(props) => props.theme.minWidth.md} {
    display: grid;
    padding: ${(props) => props.theme.columnGap.desktop};
  }
  border-bottom: 1px solid ${({ theme }) => theme.colors.transparentBlack};
  transition: border-bottom ${({ theme }) => theme.transitionTime};
  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  }
  .gatsby-image-wrapper {
    grid-column: 1 / span 2;
    aspect-ratio: ${({ theme }) => theme.aspectRatio.mobile};
    max-width: 100%;
    @media ${(props) => props.theme.minWidth.md} {
      aspect-ratio: 1.9;
    }
  }
  & > div {
    grid-column: 3 / span 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    h3 {
      margin: 25px 0;
      @media ${(props) => props.theme.minWidth.md} {
        margin: 0;
      }
    }
    aside {
      display: none;
      @media ${(props) => props.theme.minWidth.md} {
        display: block;
      }
    }
  }
  & > p {
    grid-column: 5 / span 2;
    height: 100%;
  }
  & > aside {
    display: block;
    margin-top: 25px;
    @media ${(props) => props.theme.minWidth.md} {
      display: none;
    }
  }
`;

const NewsSection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allSanityNews(limit: 4, sort: { date: DESC }) {
          nodes {
            title
            content
            linkedinUrl
            date(formatString: "DD MMMM YYYY", locale: "fr")
            thumbImg {
              asset {
                gatsbyImageData
              }
            }
          }
        }
      }
    `
  );
  const news = data.allSanityNews.nodes;

  return (
    <StyledContainer>
      <StyledSectionHeader
        title="les actualités<br>de Pivot Panda"
        buttonText="Tous les posts"
        buttonHref="https://www.linkedin.com/company/pivot-panda"
      >
        Suivez nos projets en cours et nos évènements.
      </StyledSectionHeader>
      <StyledNewsContainer>
        {news.map(({ title, thumbImg, date, content, linkedinUrl }) => {
          const getGatsbyImage = getImage(thumbImg.asset);
          return (
            <a key={title} href={linkedinUrl} target="_blank" rel="noreferrer">
              <StyledNews>
                <GatsbyImage image={getGatsbyImage} alt={title} />
                <div>
                  <Text as="h3" type="projectTitle">
                    {title}
                  </Text>
                  <Text as="aside" type="label">
                    {date}
                  </Text>
                </div>
                <Text>{content}</Text>
                <Text as="aside" type="label">
                  {date}
                </Text>
              </StyledNews>
            </a>
          );
        })}
      </StyledNewsContainer>
    </StyledContainer>
  );
};

export default NewsSection;
