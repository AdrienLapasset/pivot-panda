import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import GlobalStyle from "styles/globalStyle";
import Navigation from "./Navigation";
// import Footer from "./Footer";

const StyledContainer = styled.div`
  padding: 0 ${(props) => props.theme.columnGap.mobile};
  @media ${(props) => props.theme.minWidth.sm} {
    padding: 0 ${(props) => props.theme.columnGap.desktop};
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledContainer>
          <Navigation />
          {children}
          {/* <Footer /> */}
        </StyledContainer>
      </ThemeProvider>
    </>
  );
};

export default Layout;
