import * as React from "react";
import styled from "styled-components";

const StyledText = styled.p`
  font-size: 14px;
  /* line-height: 21px; */
  opacity: 1;
  text-transform: normal;
  @media ${(props) => props.theme.minWidth.md} {
    /* line-height: 25px; */
  }
`;
const Label = styled.aside`
  font-size: 12px;
  /* line-height: 21px; */
  opacity: 0.5;
  text-transform: uppercase;
  @media ${(props) => props.theme.minWidth.md} {
    /* line-height: 25px; */
  }
`;
const ProjectTitle = styled.h3`
  font-size: 16px;
  @media ${(props) => props.theme.minWidth.md} {
    font-size: 24px;
  }
`;
const ProjectInfo = styled.h3`
  font-size: 12px;
`;

const Title = ({ children, className, as, type }) => {
  if (type === "label") {
    return (
      <Label as={as} className={className}>
        {children}
      </Label>
    );
  }
  if (type === "projectTitle") {
    return (
      <ProjectTitle as={as} className={className}>
        {children}
      </ProjectTitle>
    );
  }
  if (type === "projectInfo") {
    return (
      <ProjectInfo as={as} className={className}>
        {children}
      </ProjectInfo>
    );
  } else {
    return (
      <StyledText as={as} type={type} className={className}>
        {children}
      </StyledText>
    );
  }
};

export default Title;
