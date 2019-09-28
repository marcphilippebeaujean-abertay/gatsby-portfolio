import React from "react"
import Sidebar from "./sidebar"
import NavMenu from "./navMenu"
import Footer from "./footer"
import { footerHeight, initContentWidth } from "../style/layoutStyle"
import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  body{
    font-family: 'Open Sans', sans-serif !important;
    padding: 0 !important;
    margin: 0;
    position: relative;
  }
  html {
    height: 100%;
  }
  #main-content-container{
    min-height: 100vh;
    position: relative;
  }
  .fb_iframe_widget_fluid_desktop, .fb_iframe_widget_fluid_desktop span, .fb_iframe_widget_fluid_desktop iframe {
    max-width: 100% !important;
    width: 100% !important;
  }
  @media screen {
    pre .token.comment,
    pre .token.prolog,
    pre .token.doctype,
    pre .token.cdata {
        color: slategray;
    }
}
`

export const PageContentStyle = styled.div`
  position: relative;
  display: flex;
  /*overflow: auto;*/
  margin: 0 auto;
  max-width: ${initContentWidth}px;
  padding-bottom: ${footerHeight}px;
`
const Layout = ({ children }) => {
  return (
    <div>
      <div id="main-content-container">
        <GlobalStyles />
        <NavMenu />
        <PageContentStyle>
          {children}
          <Sidebar />
        </PageContentStyle>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
