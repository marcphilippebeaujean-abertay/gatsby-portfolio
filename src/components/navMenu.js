import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { navMenuHeight, contentWidth } from  "../style/layoutStyle";
import { mainColour } from "../style/themeStyle";
import NavMenuItem from "./navMenuItem";
import styled from "styled-components";
import Logo from './logo';

const MainMenuWrapper = styled.nav`
  background-color: rgb(0, 0, 0);
  display: flex;
  width: ${contentWidth}px;
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
  @keyframes menu-drop-in {
    from {
      top: -30px;
    }
    to {
      top: 0px;
    }
  }
  @media screen and (max-width: ${contentWidth}px){
    border-radius: 0;
    width: 100%;
  }
`

const NavMenu = () => {
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
  const menuPartitions = data.allWordpressWpApiMenusMenusItems.edges[0].node.items.length+1;
  const jsx = (
    <MainMenuWrapper>{
        data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item =>
          item.object_slug === "logo" ? (<Logo key={`logo`} menuPartitions={menuPartitions} />) :
                                        (<NavMenuItem key={item.object_slug+"_key"} item={item} menuPartitions={menuPartitions} />))}
    </MainMenuWrapper>
  )
  return jsx;
};

export default NavMenu;