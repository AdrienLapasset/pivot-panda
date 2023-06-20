import * as React from "react";
import styled from "styled-components";

const StyledText = styled.p`
  font-size: ${({ type }) => (type === "label" ? "12px" : "14px")};
  /* line-height: 21px; */
  opacity: ${({ type }) => (type === "label" ? ".5" : "1")};
  text-transform: ${({ type }) => (type === "label" ? "uppercase" : "normal")};
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
