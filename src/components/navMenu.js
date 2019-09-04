import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { navMenuHeight, initContentWidth, smallScreenWidth } from  "../style/layoutStyle";
import { mainColour } from "../style/themeStyle";
import HamburgerButton from "./hamburgerMenu";
import NavMenuItem from "./navMenuItem";
import styled from "styled-components";
import Logo from './logo';

const MainMenuWrapper = styled.nav`
  background-color: rgb(0, 0, 0);
  display: flex;
  width: ${initContentWidth}px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
  padding: 0;
  top: 0px;
  border-radius: 0px 0px 10px 10px;
  color: ${mainColour} !important;
  height: ${navMenuHeight}px;
  box-shadow: 1px 1px 0 2px lightgray;
  overflow: hidden;
  animation-name: menu-drop-in;
  animation-duration: 1s;
  z-index: 1;
  @keyframes menu-drop-in {
    from {
      top: -100px;
    } to {
      top: 0px;
    }
  }
  @media screen and (max-width: ${initContentWidth}px){
    border-radius: 0;
    width: 100%;
  }
  @media screen and (max-width: ${smallScreenWidth}px){
    height: ${navMenuHeight - 20}px;
    overflow: inherit;
  }
`

const NavMenu = ({siteUrl}) => {
    const data = useStaticQuery(graphql`
    query{
      allWordpressWpApiMenusMenusItems(filter: {
            name: {
                eq: "Main Menu"
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
    }
  `);
  useEffect(()=>{
    const currentUrl = siteUrl.match(/(?<=\/).*(?=\/)/);
    const currentSelected = Array.from(document.getElementsByClassName("selected"));
    const newSelectedObject = Array.from(document.getElementsByClassName(currentUrl));
    if(currentSelected.length > 0) currentSelected.map(obj => obj.classList.remove("selected"));
    if(newSelectedObject.length > 0) newSelectedObject.map(obj => obj.classList.add("selected"));
  })
  const menuPartitions = data.allWordpressWpApiMenusMenusItems.edges[0].node.items.length+1;
  return (
    <MainMenuWrapper>
      {
        data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item =>
          item.object_slug === "logo" ? (<Logo key={`logo`} partitions={menuPartitions} />) :
                                        (<NavMenuItem key={item.object_slug+"_key"} item={item} partitions={menuPartitions} />))
      }
      <HamburgerButton items={data.allWordpressWpApiMenusMenusItems.edges[0].node.items} />
    </MainMenuWrapper>
  )
};

export default NavMenu;