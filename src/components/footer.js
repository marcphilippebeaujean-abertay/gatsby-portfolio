import React, { useEffect } from 'react';
import {graphql, useStaticQuery, Link} from 'gatsby';

const Footer = () => {
    const data = useStaticQuery(graphql`
        query
        {
        allWordpressWpApiMenusMenusItems(filter: {
              name: {
                  eq: "Footer"
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
    useEffect(() => {
      // Update the document title using the browser API
      console.log(data.allWordpressWpApiMenusMenusItems.edges[0].node.items);
    });
    return (<div>
        {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
            <Link to={`/${item.object_slug}`} key={item.title}>
                {item.title}
            </Link>
        ))}
    </div>)
    };

export default Footer;