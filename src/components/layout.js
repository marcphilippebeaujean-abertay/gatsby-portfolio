import React, {useEffect} from "react";
import Sidebar from "./sidebar";
import NavMenu from "./navMenu";
import Footer from "./footer";
import { footerHeight, initContentWidth } from  "../style/layoutStyle";
import styled, { createGlobalStyle } from "styled-components";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

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
    <GoogleReCaptchaProvider
    reCaptchaKey="6LcHXrIUAAAAAGXsi5JIm7OKKo9b2bifbsS8BYgJ">
      <div id="main-content-container">
        <GlobalStyles />
        <NavMenu />
        <PageContentStyle>
          {children}
          <Sidebar />
        </PageContentStyle>
      </div>
      <Footer />
    </GoogleReCaptchaProvider>
)}

export default Layout;
