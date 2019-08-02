import React from "react";
import NavMenu from "./navMenu";
import Footer from "./footer";
import ContentWrapper from "./contentWrapper";
import { navMenuHeight, contentWidth } from  "../style/layoutStyle";
import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  body{
    font-family: 'Open Sans', sans-serif;
    padding: 0 !important;
    display: block;
    max-width: ${contentWidth}px;
    margin: 0 auto;
    margin-top: ${navMenuHeight}px;
    /* TODO: adjust when screen becomes smaller */
  }
`

const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <NavMenu />
    <ContentWrapper pageContent={children} />
    <Footer />
  </div>
)

export default Layout
