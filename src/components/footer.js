import React from 'react';
import {graphql, useStaticQuery, Link} from 'gatsby';
import { smallScreenWidth } from "../style/layoutStyle";
import { mainColour } from '../style/themeStyle';
import styled from "styled-components";
import linkedInLogo from '../images/linkedin-icon.png';
import youtubeLogo from '../images/youtube-icon.png';

const FooterWrapper = styled.footer`
  width: 100%;
  height: 100%;
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
  display: flex;
  flex-direction: column;
  color: ${props => props.selected ? mainColour : `white`};
  text-decoration: none !important;
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
  .logo:hover{
    filter: grayscale(0);
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
        <img className="logo" src={linkedInLogo} alt="LinkedIn Logo" />
        <img className="logo" src={youtubeLogo} alt="YouTube Logo" />
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