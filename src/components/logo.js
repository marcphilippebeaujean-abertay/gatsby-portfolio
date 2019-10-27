import React from "react"
import { mainColour } from "../style/themeStyle"
import { smallScreenWidth, smallScreenSidePadding } from "../style/layoutStyle"
import styled from "styled-components"

const LogoStyle = styled.div`
  position: relative;
  color: inherit;
  display: table-cell;
  vertical-align: middle;
  flex-grow: 1;
  svg {
    margin: 0 auto;
  }
  @media screen and (max-width: ${smallScreenWidth}px) {
    vertical-align: left;
  }
  @media screen and (min-width: ${smallScreenWidth}px) {
    bottom: 20px;
    text {
      font-size: "140";
    }
  }
`

const LogoContainer = styled.div`
  height: 50px;
  width: 330px;
  font-family: "Orbitron", sans-serif;
  :hover {
    cursor: default;
  }
  @media screen and (max-width: ${smallScreenWidth}px) {
    vertical-align: left;
    position: relative;
    bottom: 30px;
    flex-grow: 0;
  }
`

const Logo = props => (
  <LogoStyle id="logo" partitions={props.menuPartitions}>
    <LogoContainer>
      <svg
        y1="0%"
        y="100%"
        x1="0%"
        x2="100%"
        viewBox="0 -200 1000 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          className="d-xm-none"
          fontSize="90"
          fill={`${mainColour}`}
          letterSpacing="-0.5"
        >{`<ByteSchool />`}</text>
        <text
          className="d-none d-xm-block"
          fontSize="70"
          fill={`${mainColour}`}
          letterSpacing="-0.5"
        >
          {`<ByteSchool />`}
        </text>
      </svg>
    </LogoContainer>
  </LogoStyle>
)

export default Logo
