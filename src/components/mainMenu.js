import React from 'react';
import {graphql, useStaticQuery, Link} from 'gatsby';
import styled from 'styled-components';

const MainMenuWrapper = styled.div`
    display: flex;
    background-color: rgb(3, 27, 77);
`

const MenuItem = styled(Link)`
    color: white;
    display: block;
    padding: 8px 16px;
`

const MainMenu = () => {
    const data = useStaticQuery(graphql`
        query
        {
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

export default MainMenu;