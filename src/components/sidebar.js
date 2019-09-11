import React from "react";
import styled from "styled-components";
import Img from "gatsby-image/withIEPolyfill";
import { graphql, useStaticQuery } from 'gatsby';
import {mediumScreenWidth, mainContentWidthPercent, navMenuHeight,
        initContentWidth, smallScreenSidePadding } from "../style/layoutStyle";

const sidebarWidthPercent = 100-mainContentWidthPercent;

const SidebarWrapper = styled.aside`
    z-index: 0;
    overflow: hidden;
    min-height: 50vh;
    position: absolute;
    margin-left: calc(${mainContentWidthPercent}% + ${smallScreenSidePadding}px);
    width: calc(${sidebarWidthPercent}% - ${smallScreenSidePadding}px);
    animation: fade-in 1s;
    top: ${navMenuHeight}px;
    @media screen and (max-width: ${initContentWidth}px){
        padding: 0 0 0 ${smallScreenSidePadding*3}px;
        margin-left: calc(${mainContentWidthPercent}% - ${smallScreenSidePadding}px);
        width: calc(${sidebarWidthPercent}% - ${smallScreenSidePadding*3}px);
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
        <div>
            <Img fluid={data.personalPic.childImageSharp.fluid} alt="Picture of me!" />
            <p>Hi, and welcome to my site! I hope you are enjoying the content. If you find the information valuable, 
               please consider sharing the content - it helps me a lot. Thanks, and I hope to see you here again soon!</p>
        </div>
    </SidebarWrapper>);
}
export default Sidebar;