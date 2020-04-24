import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

const Logo = props => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div id="logo" className="logo-wrapper" partitions={props.menuPartitions}>
      <Img
        fluid={data.logo.childImageSharp.fluid}
        alt="The <ByteSchool /> logo"
      />
    </div>
  )
}

export default Logo
