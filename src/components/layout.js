import React from "react";
import Sidebar from "./sidebar";
import NavMenu from "./navMenu";
import Footer from "./footer";
import styled from "styled-components";
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
    text-align: justify;
  }
`
const MainViewWrapper = styled.div`
  display: flex;
`

const Layout = ({ children }) => {
  return(
    <div>
      <GlobalStyles />
      <NavMenu />
      <MainViewWrapper>
        {children}
        <Sidebar />
      </MainViewWrapper>
      <Footer />
    </div>
)}

export default Layout;
