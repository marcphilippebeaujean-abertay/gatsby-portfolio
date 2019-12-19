import React from "react"
import { Link } from "gatsby"
import { footerHeight } from "../../style/layoutStyle"
import { mainColour } from "../../style/themeStyle"
import { getCurrentUrlPathname } from "../../utility/navigation"
import { document } from "browser-monads"
import { Col, Row, Container } from "react-bootstrap"
import FooterNavLinks from "./footerNavLinks"
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
        <Row>
          <Col md="4">
            <p>
              <b>Legal</b>
            </p>
            <div className="d-flex flex-md-column flex-xs-row">
              <div className="link-wrap">
                <Link
                  className="footer-link"
                  to={`/impressum`}
                  selected={"/impressum" === getCurrentUrlPathname(document)}
                >
                  Impressum und Datenschutzerklärung (DEU)
                </Link>
              </div>
              <div className="link-wrap">
                <Link
                  className="footer-link"
                  to={`/imprint`}
                  selected={"/imprint" === getCurrentUrlPathname(document)}
                >
                  Imprint und Data Policy (ENG)
                </Link>
              </div>
            </div>
            <p className="footer-link">© 2019 Marc P. Beaujean</p>
          </Col>
          <Col md="4">
            <p>
              <b>Topics</b>
            </p>
            <FooterNavLinks />
          </Col>
          <Col md="4">
            <p>
              <b>Social Media</b>
            </p>
            <FooterSocialMedia />
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  )
}

export default Footer
