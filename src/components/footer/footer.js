import React from "react"
import { Link } from "gatsby"
import { footerHeight } from "../../style/layoutStyle"
import { mainColour } from "../../style/themeStyle"
import { getCurrentUrlPathname } from "../../utility/navigation"
import { document } from "browser-monads"
import { Col, Row, Container } from "react-bootstrap"
import FooterSocialMedia from "./footerSocialMedia"
import styled from "styled-components"

const FooterWrapper = styled.footer`
  position: relative;
  width: 100%;
  padding: 0 0 10px 0 !important;
  clear: both;
  min-height: ${footerHeight}px;
  margin-top: -${footerHeight}px;
  margin-bottom: 0 !important;
  .link-wrap {
    margin-right: 5px;
  }
  .footer-container {
    margin-bottom: 0 !important;
  }
  color: white;
  background-color: black !important;
  .footer-link {
    display: inline-block;
    color: ${props => (props.selected ? mainColour : `white`)};
    text-decoration: none !important;
    font-size: 16px;
    text-transform: uppercase;
    margin: 0;
  }
  p {
    margin: 0px !important;
  }
  .footer-link:hover {
    color: ${mainColour};
  }
`

const Footer = () => {
  return (
    <FooterWrapper>
      <Container className="text-white footer-container">
        <Row className="text-center">
          <Col xs="12" className="link-wrap mt-4">
            <Link
              className="footer-link"
              to={`/impressum`}
              selected={"/impressum" === getCurrentUrlPathname(document)}
            >
              Impressum und Datenschutzerklärung
              </Link>
          </Col>
          <Col xs="12" className="link-wrap">
            <Link
              className="footer-link"
              to={`/imprint`}
              selected={"/imprint" === getCurrentUrlPathname(document)}
            >
              Imprint und Data Policy
              </Link>
          </Col>
        </Row>
        <div className="text-center mt-2 mb-2">
          <p >Copyright © Marc Philippe Beaujean, 2020</p>
        </div>
        <div className="d-block ml-auto mr-auto">
          <div>
            <FooterSocialMedia />
          </div>
        </div>
      </Container>
    </FooterWrapper>
  )
}

export default Footer
