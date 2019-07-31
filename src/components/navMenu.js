import React from 'react';
import {graphql, useStaticQuery } from 'gatsby';
import { MainMenuWrapper, MenuItem } from  "../style/navMenuStyle";

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
    `)
    return (
    <MainMenuWrapper>
        {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
            <MenuItem to={item.object_slug} key={item.title}>
                {item.title}
            </MenuItem>
        ))}
    </MainMenuWrapper>
    )};

export default NavMenu;