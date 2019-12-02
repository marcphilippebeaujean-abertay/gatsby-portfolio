import React from "react"
import { PageContentWrapper } from "../style/pageStyleComponent"
import Img from "gatsby-image/withIEPolyfill"
import SEO from "../components/seo"

import { graphql, useStaticQuery } from "gatsby"

const browser = typeof window !== "undefined" && window

export default ({ pageContext }) => {
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
  `)
  return (
    browser && (
      <PageContentWrapper>
        <SEO
          title={"Error"}
          description={
            "Woops! Looks like you hit a page that could not be found."
          }
        />
        <h1>Error 404</h1>
        <div>
          <div style={{ width: `50%` }}>
            <Img
              fluid={data.errorPic.childImageSharp.fluid}
              alt="Error picture!"
            />
          </div>
          <p>
            <b>Oooops!</b> Looks like the page you were looking for cannot be
            accessed or doesn't exist. I apologize for the inconvenience -
            please contact me if you think this is a bug!
          </p>
        </div>
      </PageContentWrapper>
    )
  )
}
