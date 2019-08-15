import React from 'react';
import {PageContentWrapper} from './page';
import Img from "gatsby-image/withIEPolyfill";
import { graphql, useStaticQuery } from 'gatsby';

export default ({ pageContext }) =>{
    const data = useStaticQuery(graphql`
    query {
        errorPic: file(relativePath: { eq: "error-icon.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `);
    return (
    <PageContentWrapper>
      <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
      <div>
          <div style={{width: `50%`}}>
            <Img fluid={data.errorPic.childImageSharp.fluid} alt="Error picture!" />
          </div>
          <p style={{fontWeight: `bold`}}>Looks like the page you were looking for cannot be accessed or doesn't exist. I apologize for the inconvenience 
            - please contact me if you think this is a bug!</p>
      </div>
    </PageContentWrapper>
    )
}