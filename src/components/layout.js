import React from "react"
import Sidebar from "./sidebar"
import NavMenu from "./navMenu"
import Footer from "./footer"
import { Container, Row, Col } from "react-bootstrap"
import { footerHeight, smallScreenWidth } from "../style/layoutStyle"
import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body{
    font-family: 'Open Sans', sans-serif !important;
    padding: 0 !important;
    margin: 0;
    position: relative;
    background-color: lightgrey !important;
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
  p{
    margin: 3px;
    line-height: 1.7 !important;
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
      background-color: white !important;
    }
  }
`

const Layout = ({ children }) => {
  return (
    <Container fluid className="px-0 main">
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
