import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { navMenuHeight, contentWidth } from  "../style/layoutStyle";
import { mainColour } from "../style/themeStyle";
import styled from "styled-components";

const navMenuPartitions = 6;
const navMenuWidth = contentWidth / navMenuPartitions;

export const MainMenuWrapper = styled.nav`
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
`

export const MenuItem = styled(Link)`
    color: ${mainColour};
    text-decoration: none;
    height: ${navMenuHeight}px;
    width: ${navMenuWidth}px;
    text-align: center;
    flex-direction: row;
    display: table-cell;
    vertical-align: middle;
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
    `)
    return (
    <MainMenuWrapper>
        {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
            <MenuItem to={item.object_slug} key={item.title}>
                <p>{item.title}</p>
            </MenuItem>
        ))}
    </MainMenuWrapper>
    )};

export default NavMenu;