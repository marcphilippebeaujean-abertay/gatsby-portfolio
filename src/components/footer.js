import React from 'react';
import {graphql, useStaticQuery, Link} from 'gatsby';
import { smallScreenWidth } from "../style/layoutStyle";
import { mainColour } from '../style/themeStyle';
import Img from "gatsby-image/withIEPolyfill";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  width: 100%;
  height: 100%;
  background-color: black;
  margin: 0;
  flex-grow: 1;
  display: flex;
  .footer-container{
    width: 50%;
    padding: 10px 10px;
  }
  .left-footer-container{
    text-align: right !important;
  }
  @media screen and (max-width: ${smallScreenWidth}px){
    flex-direction: column;
    .footer-container{
      width: 100%;
      padding: 10px 0;
      text-align: center !important;
    }
  }
`

const FooterLink = styled(Link)`
  color: ${props => props.selected ? mainColour : `white`};
  text-decoration: none !important;
`

const SocialMediaLogoWrapper = styled.div`
  display: flex;
  width: 100%;
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
      {/*<SocialMediaLogoWrapper>
        <img href={`../linkedin-icon.png`} />
      </SocialMediaLogoWrapper>*/}
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
    </FooterWrapper>)
    };

export default Footer;