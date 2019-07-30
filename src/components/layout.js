import React from "react";
import MainMenu from "./mainMenu";
import Footer from "./footer";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  body{
    font-family: 'Open Sans', sans-serif;
  }
`

const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <MainMenu />
    {children}
    <Footer />
  </div>
)

export default Layout
