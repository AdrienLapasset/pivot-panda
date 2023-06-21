import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import GlobalStyle from "styles/globalStyle";
import Navigation from "./Navigation";
import { useLocation } from "@reach/router";

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {pathname !== "/contact/" && pathname !== "/panda-invest/" && (
          <Navigation />
        )}
        {children}
      </ThemeProvider>
    </>
  );
};

export default Layout;
