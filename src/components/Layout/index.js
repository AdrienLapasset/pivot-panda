import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import GlobalStyle from "styles/globalStyle";
import Navigation from "./Navigation";
// import Footer from "./Footer";

const StyledContainer = styled.div``;

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
