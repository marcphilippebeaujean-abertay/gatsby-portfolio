import React from "react";
import { Helmet } from "react-helmet"
import Sidebar from "./sidebar";
import NavMenu from "./navMenu";
import Footer from "./footer";
import { footerHeight, initContentWidth } from  "../style/layoutStyle";
import styled, { createGlobalStyle } from "styled-components";
import { FacebookProvider } from "react-facebook";
import CookieBanner from "./cookieBanner";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  body{
    font-family: 'Open Sans', sans-serif;
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
`

export const PageContentStyle = styled.div`
  position: relative;
  display: flex;
  overflow: auto;
  margin: 0 auto;
  max-width: ${initContentWidth}px;
  padding-bottom: ${footerHeight}px;
  text-align: justify;
`
// "6LcHXrIUAAAAAGXsi5JIm7OKKo9b2bifbsS8BYgJ"
const Layout = ({ children }) => {
  return(
    <FacebookProvider appId='2992918847417224'>
      <Helmet>
          <meta charSet="utf-8" />
          <title>{`<JustDoIT />`}</title>
      </Helmet>
      <div id="main-content-container">
        <GlobalStyles />
        <NavMenu />
        <PageContentStyle>
          {children}
          <Sidebar />
        </PageContentStyle>
      </div>
      <Footer />
      <CookieBanner />
    </FacebookProvider>
)}

export default Layout;
