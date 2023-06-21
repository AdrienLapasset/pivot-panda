import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import GlobalStyle from "styles/globalStyle";
import Navigation from "./Navigation";
import { useLocation } from "@reach/router";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {pathname !== "/contact/" && <Navigation />}
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
