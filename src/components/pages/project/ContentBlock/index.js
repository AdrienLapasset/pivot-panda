import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Grid from "components/global/Grid";
import PageContainer from "components/global/PageContainer";
import Text from "components/global/Text";

const StyledText = styled(Text)`
  padding-top: 15px;
  white-space: pre-line;
  @media ${(props) => props.theme.minWidth.md} {
    padding-top: 0;
  }
`;

const StyledBlockContainer = styled(PageContainer)`
  border-top: solid ${(props) => props.theme.colors.black} 1px;
`;

const StyledContentBlock = styled(Grid)`
  padding-top: 15px;
  padding-bottom: 60px;
  @media ${(props) => props.theme.minWidth.md} {
    padding-top: 25px;
  }
`;

const StyledBlockImage = styled(GatsbyImage)`
  max-height: calc(100vh - 60px);
  grid-column: span 4;
  margin-bottom: 30px;
  @media ${(props) => props.theme.minWidth.md} {
    max-height: calc(100vh - 80px);
    grid-column: ${({ isLandscape }) => (isLandscape ? "span 7" : "span 4")};
    margin-bottom: 50px;
  }
`;

const StyledBlockText = styled(StyledText)`
  grid-column: span 4;
  @media ${(props) => props.theme.minWidth.md} {
    grid-column: 4 / 6;
  }
`;

const ContentBlock = ({ image, text, orientation }) => {
  if (image) {
    const blockImage = getImage(image.asset);
    const isLandscape = orientation === "landscape";
    if (text) {
      return (
        <StyledBlockContainer key={text}>
          <StyledContentBlock>
            <StyledBlockImage
              image={blockImage}
              isLandscape={isLandscape}
              alt={`Block image ${text}`}
            />
            <StyledBlockText>{text}</StyledBlockText>
          </StyledContentBlock>
        </StyledBlockContainer>
      );
    } else {
      return (
        <StyledBlockContainer key={text}>
          <StyledContentBlock>
            <StyledBlockImage image={blockImage} alt={`Block image ${text}`} />
          </StyledContentBlock>
        </StyledBlockContainer>
      );
    }
  } else {
    return (
      <StyledBlockContainer key={text}>
        <StyledContentBlock>
          <StyledBlockText>{text}</StyledBlockText>
        </StyledContentBlock>
      </StyledBlockContainer>
    );
  }
};

export default ContentBlock;
