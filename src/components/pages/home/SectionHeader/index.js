import * as React from "react";
import styled from "styled-components";
import Grid from "components/global/Grid";
import Button from "components/global/Button";
import Title from "components/global/Title";
import Text from "components/global/Text";
import PageContainer from "components/global/PageContainer";

const StyledContainer = styled(Grid)`
  & > div {
    margin-top: 42px;
    grid-column: 1 / span 4;
    @media ${(props) => props.theme.minWidth.md} {
      grid-column: 5 / span 2;
    }
    & > a {
      margin-top: 17px;
    }
  }
`;

const StyledTitle = styled(Title)`
  grid-column: 1 / span 4;
  @media ${(props) => props.theme.minWidth.md} {
    grid-column: 1 / span 3;
  }
`;

const SectionHeader = ({
  title,
  buttonText,
  buttonTo,
  buttonHref,
  children,
  className,
}) => {
  return (
    <PageContainer>
      <StyledContainer className={className}>
        <StyledTitle>{title}</StyledTitle>
        <div>
          <Text> {children}</Text>
          <Button href={buttonHref} to={buttonTo}>
            {buttonText}
          </Button>
        </div>
      </StyledContainer>
    </PageContainer>
  );
};

export default SectionHeader;
