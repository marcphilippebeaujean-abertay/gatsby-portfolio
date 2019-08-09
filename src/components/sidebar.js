import React from "react";
import styled from "styled-components";
import Img from "gatsby-image/withIEPolyfill";
import { graphql, useStaticQuery } from 'gatsby';
import {mediumScreenWidth, mainContentWidthPercent,
        initContentWidth, smallScreenSidePadding } from "../style/layoutStyle";

const sidebarWidthPercent = 100-mainContentWidthPercent;

const SidebarWrapper = styled.aside`
    z-index: 0;
    margin-top: 35px;
    position: relative;
    width: ${sidebarWidthPercent}%;
    animation: fade-in 1s;
    @media screen and (max-width: ${initContentWidth}px){
        padding-right: ${smallScreenSidePadding}px;
    }
    @media screen and (max-width: ${mediumScreenWidth}px) {
        display: none;
    }
    @keyframes fade-in {
        from{
            opacity: 0;
            left: 50px;
        } to {
            opacity: 1;
            left: 0px;
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
    </SidebarWrapper>);
}
export default Sidebar;