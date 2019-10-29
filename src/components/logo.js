import React from "react"
import { smallScreenWidth, smallScreenSidePadding } from "../style/layoutStyle"
import styled from "styled-components"
import LogoImg from "../images/logo.png"

const LogoStyle = styled.div`
  img {
    margin: 0 ${smallScreenSidePadding}px;
    z-index: 3;
    position: relative;
    top: 30px;
    height: 50px;
    width: auto;
  }

  position: relative;
  display: table-cell;
  vertical-align: middle;
  @media screen and (max-width: ${smallScreenWidth}px) {
    vertical-align: left;
    img {
      top: 8px;
      height: 40px;
      width: auto;
    }
  }
  @media screen and (min-width: ${smallScreenWidth}px) {
    bottom: 20px;
  }
`

const Logo = props => (
  <LogoStyle id="logo" partitions={props.menuPartitions}>
    <img src={LogoImg} alt="the byteschool logo" />
  </LogoStyle>
)

export default Logo
