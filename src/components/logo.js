import React from "react"
import { smallScreenWidth, smallScreenSidePadding } from "../style/layoutStyle"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

import styled from "styled-components"

const LogoStyle = styled.div`
  left: ${smallScreenSidePadding}px;
  z-index: 3;
  position: relative;
  top: 17px;
  width: 300px !important;

  position: relative;
  display: table-cell;
  vertical-align: middle;
  @media screen and (max-width: ${smallScreenWidth}px) {
    vertical-align: left;
    top: 8px;
    height: 40px;
    width: auto;
  }
  @media screen and (min-width: ${smallScreenWidth}px) {
    bottom: 20px;
  }
`

const Logo = props => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <LogoStyle id="logo" partitions={props.menuPartitions}>
      <div id="logo-wrapper ">
        <Img
          fluid={data.logo.childImageSharp.fluid}
          alt="The <ByteSchool /> logo"
        />
      </div>
    </LogoStyle>
  )
}

export default Logo
