import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Arrow from "assets/icons/ArrowBtn.js";

const StyledContainer = styled(Link)`
  font-size: 8px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  height: 25px;
  border: 1px solid ${(props) => props.theme.colors.black};
  border-radius: 100px;
  padding: 0 10px;
  width: fit-content;
  @media ${(props) => props.theme.minWidth.md} {
    font-size: 10px;
  }
`;
const StyledArrow = styled(Arrow)`
  width: 15px;
  margin-left: 8px;
  @media ${(props) => props.theme.minWidth.md} {
    margin-left: 15px;
  }
`;

const CTA = ({ children, className }) => {
  return (
    <StyledContainer className={className}>
      {children}
      <StyledArrow />
    </StyledContainer>
  );
};

export default CTA;
