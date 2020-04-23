import React from "react"
import { smallScreenWidth, smallScreenSidePadding } from "../style/layoutStyle"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

import styled from "styled-components"

const LogoStyle = styled.div`
  left: ${smallScreenSidePadding}px;
  z-index: 3;
  position: relative;
  top: 3px;
  height: 50px;
  width: 300px;
  max-width: 350px !important;

  position: relative;

  @media screen and (max-width: ${smallScreenWidth}px) {
    top: 0px;
    width: 250px;
  }
`

const Logo = props => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <LogoStyle id="logo" partitions={props.menuPartitions}>
      <Img
        fluid={data.logo.childImageSharp.fluid}
        alt="The <ByteSchool /> logo"
      />
    </LogoStyle>
  )
}

export default Logo
