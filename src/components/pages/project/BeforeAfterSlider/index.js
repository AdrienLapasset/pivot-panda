import React from "react";
import styled from "styled-components";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle,
} from "react-compare-slider";
import PageContainer from "components/global/PageContainer";
import Grid from "components/global/Grid";
import Text from "components/global/Text";

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

const StyledReactCompareSlider = styled(ReactCompareSlider)`
  grid-column: span 4;
  margin-bottom: 30px;
  @media ${(props) => props.theme.minWidth.md} {
    grid-column: span 7;
    margin-bottom: 50px;
  }
`;

const StyledText = styled(Text)`
  padding-top: 15px;
  white-space: pre-line;
  @media ${(props) => props.theme.minWidth.md} {
    padding-top: 0;
  }
`;

const StyledBlockText = styled(StyledText)`
  grid-column: span 4;
  @media ${(props) => props.theme.minWidth.md} {
    grid-column: 4 / 6;
  }
`;

const BeforeAfterSlider = ({ imageBefore, imageAfter, text }) => {
  const beforeSrc = imageBefore.asset.gatsbyImageData.images.fallback.src;
  const afterSrc = imageAfter.asset.gatsbyImageData.images.fallback.src;
  return (
    <StyledBlockContainer>
      <StyledContentBlock>
        <StyledReactCompareSlider
          handle={
            <ReactCompareSliderHandle
              buttonStyle={{
                backdropFilter: undefined,
                WebkitBackdropFilter: undefined,
                backgroundColor: "white",
                color: "black",
                boxShadow: undefined,
                border: 0,
              }}
            />
          }
          itemOne={
            <ReactCompareSliderImage src={beforeSrc} alt="Image avant" />
          }
          itemTwo={<ReactCompareSliderImage src={afterSrc} alt="Image après" />}
        />
        <StyledBlockText>{text}</StyledBlockText>
      </StyledContentBlock>
    </StyledBlockContainer>
  );
};

export default BeforeAfterSlider;
