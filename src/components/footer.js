import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { footerHeight, smallScreenWidth } from "../style/layoutStyle"
import { mainColour } from "../style/themeStyle"
import { getCurrentUrlPathname } from "../utility/navigation"
import { document } from "browser-monads"
import { Col, Row, Container } from "react-bootstrap"
import Logo from "./logo"
import styled from "styled-components"
import linkedInLogo from "../images/linkedin-icon.png"
import youtubeLogo from "../images/youtube-icon.png"
import githubLogo from "../images/github-icon.png"
import twitterLogo from "../images/twitter-icon.png"

const FooterWrapper = styled.footer`
  position: relative;
  width: 100%;
  padding: 0 0 10px 0 !important;
  clear: both;
  min-height: ${footerHeight}px;
  margin-top: -${footerHeight}px;
  margin-bottom: 0 !important;

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
  .footer-link:hover {
    color: ${mainColour};
  }
`

const SocialMediaLogoWrapper = styled.div`
  display: flex;
  padding: 5px 0;
  a {
    margin-right: 20px;
    border-radius: 25px;
  }
  .logo {
    background-color: white;
    height: 30px;
    width: 30px;
    transition: ease 0.2s;
  }
  a:hover .logo {
    background-color: ${mainColour};
  }
  @media screen and (max-width: ${smallScreenWidth}px) {
    a {
      margin: 0px 20px 0px 0px;
    }
    left: 0px;
  }
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressWpApiMenusMenusItems(filter: { name: { eq: "Legal" } }) {
        edges {
          node {
            name
            items {
              title
              object_slug
            }
          }
        }
      }
    }
  `)
  return (
    <FooterWrapper>
      <Container className="text-white footer-container">
        <Row>
          <Col md="4">
            <Logo width={200} margin={`0px`} />
          </Col>
          <Col md="4">
            <p>
              <b>Legal</b>
            </p>
            {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
              item => (
                <div key={item.title}>
                  <Link
                    className="footer-link"
                    to={`/${item.object_slug}`}
                    selected={
                      item.object_slug === getCurrentUrlPathname(document)
                    }
                  >
                    {item.title}
                  </Link>
                </div>
              )
            )}
            <p className="footer-link">© 2019 Marc P. Beaujean</p>
          </Col>
          <Col md="4">
            <p>
              <b>Social Media</b>
            </p>
            <SocialMediaLogoWrapper>
              <a
                href="https://www.linkedin.com/in/marc-philippe-beaujean-5ab27815a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="logo" src={linkedInLogo} alt="LinkedIn Logo" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCrGAw9i5HoaByeiQAV5FaLA?guided_help_flow=3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="logo" src={youtubeLogo} alt="YouTube Logo" />
              </a>
              <a
                href="https://github.com/marcphilippebeaujean-abertay"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="logo" src={githubLogo} alt="GitHub Logo" />
              </a>
              <a
                href="https://twitter.com/MarcBeaujean"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="logo" src={twitterLogo} alt="Twitter Logo" />
              </a>
            </SocialMediaLogoWrapper>
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  )
}

export default Footer
