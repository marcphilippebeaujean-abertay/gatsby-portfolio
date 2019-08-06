import React from 'react';
import {graphql, useStaticQuery, Link} from 'gatsby';
import { mainColour } from '../style/themeStyle';
import styled from "styled-components";

const FooterWrapper = styled.footer`
  width: 100%;
  height: 100%;
  background-color: black;
  margin: 0;
`

const FooterLink = styled(Link)`
  color: ${props => props.selected ? mainColour : `white`};
  text-decoration: none !important;
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
        {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
            <FooterLink to={`/${item.object_slug}`} 
                        key={item.title}
                        selected={item.object_slug === document.location.pathname.slice(1)}>
                {item.title}
            </FooterLink>
        ))}
    </FooterWrapper>)
    };

export default Footer;