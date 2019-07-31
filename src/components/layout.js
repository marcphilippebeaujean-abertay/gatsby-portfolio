import React from "react";
import NavMenu from "./navMenu";
import Footer from "./footer";
import { navMenuHeight, contentWidth } from  "../style/layoutStyle";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  body{
    font-family: 'Open Sans', sans-serif;
    padding: 0 !important;
    display: block;
    margin-top: ${navMenuHeight}px;
  }
`

export const ContentLayoutWrapper = styled.div`
  max-width: ${contentWidth}px;
  margin: 0 auto;
`

const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <NavMenu />
    <ContentLayoutWrapper>
      {children}
    </ContentLayoutWrapper>
    <Footer />
  </div>
)

export default Layout
