import React from "react"
import Sidebar from "./sidebar/sidebar"
import NavMenu from "./navBar/navMenu"
import Footer from "./footer/footer"
import CookieBanner from "./cookieBanner"
import { Container, Row, Col } from "react-bootstrap"
import { footerHeight, smallScreenWidth } from "../style/layoutStyle"
import { createGlobalStyle } from "styled-components"
import { backgroundColour } from "../style/themeStyle"

export const GlobalStyles = createGlobalStyle`
  body{
    background-color: ${backgroundColour} !important;
    position: relative;
  }
  hr {
    border: 0;
    margin: 0.5rem 0 !important;
    clear:both;
    display:block;
    width: 100%;
    background-color: lightgrey !important;
    height: 1px;
  }
  figcaption{
    font-style: italic;
  }
  pre{
    margin-top: 0 !important;
    margin-bottom: 1rem !important;
  }
  html{
    height: 100%;
  }
  small, .text_small {font-size: 0.8em;}
  #main-content-container{
    min-height: 100vh;
    position: relative;
  }
  .fb_iframe_widget_fluid_desktop, .fb_iframe_widget_fluid_desktop span, .fb_iframe_widget_fluid_desktop iframe {
    max-width: 100% !important;
    width: 100% !important;
  }
  #page-content-row{
    padding-bottom: ${footerHeight}px;
    margin-bottom: 20px;
  }
  @media screen {
    pre .token.comment,
    pre .token.prolog,
    pre .token.doctype,
    pre .token.cdata {
        color: slategray;
    }
  }
  @media screen and (max-width: ${smallScreenWidth}px) {
    body{
      background-color: ${backgroundColour} !important;
    }
  }
`

const Layout = ({ children }) => {
  return (
    <Container fluid className="px-0 main">
      <CookieBanner />
      <NavMenu />
      <Container id="main-content-container">
        <GlobalStyles />
        <Row id="page-content-row">
          <Col lg={8}>{children}</Col>
          <Col lg={4} className="d-none d-lg-block">
            <Sidebar />
          </Col>
        </Row>
      </Container>
      <Footer />
    </Container>
  )
}

export default Layout
