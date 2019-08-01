import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { navMenuHeight, contentWidth } from  "../style/layoutStyle";
import { mainColour } from "../style/themeStyle";
import styled from "styled-components";
import Logo from './logo';

const navMenuPartitions = 6;
export const navMenuWidth = contentWidth / navMenuPartitions;

const MainMenuWrapper = styled.nav`
  background-color: rgb(0, 0, 0);
  display: flex;
  width: ${contentWidth}px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
  padding: 0;
  top: 0%;
  border-radius: 0px 0px 10px 10px;
  color: ${mainColour} !important;
  height: ${navMenuHeight}px;
`
const MenuItem = styled(Link)`
  text-decoration: none;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  font-weight: bold;
  color: inherit;
  width: ${props => (100 / props.menuPartitions)}%;
`

const NavElementText = styled.p`
  font-size: 20px;
`


const NavMenu = () => {
    // language=GraphQL
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
  const dataMenuPartitions = data.allWordpressWpApiMenusMenusItems.edges[0].node.items.length+1;
  return (
  <MainMenuWrapper>
      {
        data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item =>
        item.object_slug === "logo" ? (<Logo menuPartitions={dataMenuPartitions}/>) :
        (
            <MenuItem to={item.object_slug} key={item.title} menuPartitions={dataMenuPartitions}>
              <NavElementText id={item.object_slug+`_text`}>{item.title}</NavElementText>
            </MenuItem>
        ))
      }
  </MainMenuWrapper>
  )};

export default NavMenu;