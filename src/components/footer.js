import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import {
  footerHeight,
  smallScreenWidth,
  initContentWidth,
} from "../style/layoutStyle"
import { mainColour } from "../style/themeStyle"
import { getCurrentUrlPathname } from "../utility/navigation"
import { document } from "browser-monads"
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
  height: ${footerHeight}px;
  margin-top: -${footerHeight + 10}px;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: row;
  .footer-container {
    display: flex;
    padding: 0px 10px;
    padding-bottom: 10px;
    flex-direction: column;
    background-color: black;
    flex-grow: 1;
  }
  .contacts-entry {
    margin: 0px;
  }
  #footer-links-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: ${initContentWidth}px;
    margin: 0 auto;
  }
  #footer-container-right {
    text-align: right;
  }
  @media screen and (max-width: ${initContentWidth}px) {
    .footer-container {
      width: 100%;
    }
    #footer-links-container {
      width: 100%;
    }
    #footer-container-right {
      justify-content: center;
      text-align: center;
    }
  }

  @media screen and (max-width: ${smallScreenWidth}px) {
    flex-direction: column;
    .footer-container {
      padding: 0px;
      text-align: center !important;
    }
    #footer-links-container {
      flex-direction: column;
      background-color: black;
    }
  }
`

const FooterLink = styled(Link)`
  display: inline-block;
  color: ${props => (props.selected ? mainColour : `white`)};
  text-decoration: none !important;
  :hover {
    color: ${mainColour};
  }
`

const SocialMediaLogoWrapper = styled.div`
  display: flex;
  padding: 5px 0;
  justify-content: flex-end;
  background-color: black;
  .logo {
    background-color: white;
    margin: 0px 0px 0 40px;
    height: 30px;
    width: 30px;
    transition: ease 0.2s;
  }
  a:hover .logo {
    background-color: ${mainColour};
  }
  @media screen and (max-width: ${smallScreenWidth}px) {
    .logo {
      margin: 0px 20px;
    }
    justify-content: center;
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
      <div id="footer-links-container">
        <div className="footer-container">
          <p>
            <b>Legal</b>
          </p>
          {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
            item => (
              <div key={item.title}>
                <FooterLink
                  to={`/${item.object_slug}`}
                  selected={
                    item.object_slug === getCurrentUrlPathname(document)
                  }
                >
                  {item.title}
                </FooterLink>
              </div>
            )
          )}
        </div>
        <div className="footer-container" id="footer-container-right">
          <p>
            <b>Contact</b>
          </p>
          <p className="contacts-entry">marcphilippebeaujean@gmail.com</p>
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
        </div>
      </div>
    </FooterWrapper>
  )
}

export default Footer
