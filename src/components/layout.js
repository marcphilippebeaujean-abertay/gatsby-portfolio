import React from "react";
import Sidebar from "./sidebar";
import NavMenu from "./navMenu";
import Footer from "./footer";
import { navMenuHeight, initContentWidth, smallScreenNavHeight, smallScreenWidth } from  "../style/layoutStyle";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  body{
    font-family: 'Open Sans', sans-serif;
    padding: 0 !important;
    display: block;
    max-width: ${initContentWidth}px;
    margin: 0 auto;
    margin-top: ${navMenuHeight}px;
    text-align: justify;
    @media screen and (max-width: ${smallScreenWidth}px){
      margin-top: ${smallScreenNavHeight}px;
    }
  }
`

const Layout = ({ children }) => {
  return(
    <div>
      <GlobalStyles />
      <NavMenu />
      <div style={{display: `flex`}}>
        {children}
        <Sidebar />
      </div>
      <Footer />
    </div>
)}

export default Layout;
