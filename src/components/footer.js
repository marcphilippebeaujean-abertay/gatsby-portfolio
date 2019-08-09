import React from 'react';
import {graphql, useStaticQuery, Link} from 'gatsby';
import { footerHeight, navMenuHeight, smallScreenWidth } from "../style/layoutStyle";
import { mainColour } from '../style/themeStyle';
import styled from "styled-components";
import linkedInLogo from '../images/linkedin-icon.png';
import youtubeLogo from '../images/youtube-icon.png';

const FooterWrapper = styled.footer`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
  height: ${footerHeight}px;
  /*top: -${footerHeight}px;*/
  background-color: black;
  margin: 0;
  display: flex;
  flex-direction: column;
  .footer-container{
    width: 50%;
    padding: 10px 10px;
  }
  .left-footer-container{
    text-align: right !important;
    align-content: right;
    align-self: right;
  }
  #footer-links-container{
    display: flex;
    justify-content: center;
    width: 100%;
  }
  @media screen and (max-width: ${smallScreenWidth}px){
    flex-direction: column;
    .footer-container{
      width: 100%;
      padding: 10px 0;
      text-align: center !important;
    }
    #footer-links-container{
      flex-direction: column;
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
    margin: 0px 20px;
    filter: grayscale(1);
    height: 50px;
    width: 50px;
    transition: ease 0.2s;
  }
  a:hover .logo{
    filter: grayscale(0);
  }
  @media screen and (max-width: ${smallScreenWidth}px){
    .logo{
      filter: grayscale(0);
    }
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
        <a href="https://www.linkedin.com/in/marc-philippe-beaujean-5ab27815a/" ><img className="logo" src={linkedInLogo} alt="LinkedIn Logo" /></a>
        <a href=""><img className="logo" src={youtubeLogo} alt="YouTube Logo" /></a>
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