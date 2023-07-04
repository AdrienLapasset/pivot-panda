import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import GlobalStyle from "styles/globalStyle";
import Navigation from "./Navigation";
import { useLocation } from "@reach/router";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  const isPageFullScreen =
    pathname === "/contact/" ||
    pathname === "/panda-invest/" ||
    pathname === "/design-thinking/";

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {!isPageFullScreen && <Navigation />}
        {children}
        {!isPageFullScreen && <Footer />}
      </ThemeProvider>
    </>
  );
};

export default Layout;
