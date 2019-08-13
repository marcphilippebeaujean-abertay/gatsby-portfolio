import React from 'react';
import {graphql, useStaticQuery, Link} from 'gatsby';
import { footerHeight, smallScreenWidth } from "../style/layoutStyle";
import { mainColour } from '../style/themeStyle';
import styled from "styled-components";
import linkedInLogo from '../images/linkedin-icon.png';
import youtubeLogo from '../images/youtube-icon.png';
import githubLogo from '../images/github-icon.png';

const FooterWrapper = styled.footer`
  position: relative;
  width: 100%;
  padding: 0 !important;
  clear: both;
  height: ${footerHeight}px;
  margin-top: -${footerHeight}px;
  background-color: black;
  display: flex;
  flex-direction: column;
  .footer-container{
    display: flex;
    padding: 10px 10px;
    flex-direction: column;
    width: 50%;
    background-color: black;
  }
  .left-footer-container{
    text-align: right !important;
    align-content: right;
    align-self: right;
  }
  #footer-links-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
  @media screen and (max-width: ${smallScreenWidth}px){
    flex-direction: column;
    .footer-container{
      width: 100%;
      padding: 0px;
      text-align: center !important;
    }
    #footer-links-container{
      flex-direction: column;
      background-color: black;
    }
  }
`

const FooterLink = styled(Link)`
  display: relative;
  flex-direction: column;
  color: ${props => props.selected ? mainColour : `white`};
  text-decoration: none !important;
  :hover{
    color: ${mainColour};
  }
`

const SocialMediaLogoWrapper = styled.div`
  display: flex;
  padding: 10px 0;
  width: 100%;
  justify-content: center;
  .logo{
    background-color: white;
    margin: 0px 20px;
    height: 30px;
    width: 30px;
    transition: ease 0.2s;
  }
  a:hover .logo{
    background-color: ${mainColour};
  }
`

const Footer = () => {
    const data = useStaticQuery(graphql`
        query{
        allWordpressWpApiMenusMenusItems(filter: {
              name: {
                  eq: "Footer"
                }
            }){
          edges{
            node{
              name
              items{
                title,
                object_slug
              }
            }
          }
        }
      }`);
    return (
    <FooterWrapper>
      <SocialMediaLogoWrapper>
        <a href="https://www.linkedin.com/in/marc-philippe-beaujean-5ab27815a/" target="_blank"><img className="logo" src={linkedInLogo} alt="LinkedIn Logo" /></a>
        <a href="https://www.youtube.com/channel/UCrGAw9i5HoaByeiQAV5FaLA?guided_help_flow=3" target="_blank"><img className="logo" src={youtubeLogo} alt="YouTube Logo" /></a>
        <a href="https://github.com/marcphilippebeaujean-abertay" target="_blank"><img className="logo" src={githubLogo} alt="GitHub Logo" /></a>
      </SocialMediaLogoWrapper>
      <div id="footer-links-container">
        <div className={`left-footer-container footer-container`}>
          {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map((item, index) =>
          index % 2 === 0 ? (
                  <FooterLink to={`/${item.object_slug}`}
                            key={item.title}
                            selected={item.object_slug === document.location.pathname.slice(1)}>
                            {item.title}
                  </FooterLink>
          ) : null)}
        </div>
        <div className={`footer-container`}>
          {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map((item, index) =>
          index % 2 === 1 ? (
                  <FooterLink to={`/${item.object_slug}`}
                            key={item.title}
                            selected={item.object_slug === document.location.pathname.slice(1)}>
                            {item.title}
                  </FooterLink>
            ) : null)}
        </div>
      </div>

    </FooterWrapper>)
    };

export default Footer;