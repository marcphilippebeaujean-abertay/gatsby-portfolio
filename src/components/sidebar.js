import React from "react";
import styled from "styled-components";
import Img from "gatsby-image/withIEPolyfill";
import { graphql, useStaticQuery } from 'gatsby';
import {mediumScreenWidth, mainContentWidthPercent, navMenuHeight,
        initContentWidth, smallScreenSidePadding } from "../style/layoutStyle";

const sidebarWidthPercent = 100-mainContentWidthPercent;

const SidebarWrapper = styled.aside`
    z-index: 0;
    position: relative;
    width: ${sidebarWidthPercent}%;
    animation: fade-in 1s;
    top: ${navMenuHeight}px;
    @media screen and (max-width: ${initContentWidth}px){
        padding-right: ${smallScreenSidePadding}px;
    }
    @media screen and (max-width: ${mediumScreenWidth}px) {
        display: none;
    }
    @keyframes fade-in {
        from{
            opacity: 0;
        } to {
            opacity: 1;
        }
    }
`

const Sidebar = () => {
    const data = useStaticQuery(graphql`
    query {
        personalPic: file(relativePath: { eq: "personal-pic.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 719) {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `);
    return (
    <SidebarWrapper >
        <Img fluid={data.personalPic.childImageSharp.fluid} />
        <p>Hi, and welcome to my site! I hope you are enjoying the content. If you find the information valuable, 
            please consider a small donation - it helps me keep the server running. Thanks, and I hope to see you here again soon!</p>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="J6YRD6YHY8YHW" />
            <input type="image" src="https://www.paypalobjects.com/en_US/DK/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_DE/i/scr/pixel.gif" width="1" height="1" />
        </form>

    </SidebarWrapper>);
}
export default Sidebar;