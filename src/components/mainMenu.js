import React from 'react';
import {graphql, useStaticQuery, Link} from 'gatsby';

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
    return (<div>
        {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
            <Link to={item.object_slug} key={item.title}>
                {item.title}
            </Link>
        ))}
    </div>)
    };

export default MainMenu;