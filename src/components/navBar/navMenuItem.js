import styled from "styled-components"
import React from "react"
import { smallScreenWidth } from "../../style/layoutStyle"
import { mainColour } from "../../style/themeStyle"
import { Link } from "gatsby"

const stripeWidth = 20
const MenuItem = styled(Link)`
  position: relative;
  color: inherit;
  background-color: inherit;
  width: ${props => 100 / props.partitions}%;
  overflow: hidden;
  text-decoration: none;
  text-align: center;
  align-content: center;
  display: flex;
  .menu-item {
    position: relative;
    display: inherit;
    font-weight: bold;
    vertical-align: middle;
    transition: all 0.3s;
    text-align: center;
    height: 100%;
    width: 100%;
  }
  .menu-item.selected {
    color: black !important;
    background-color: ${mainColour} !important;
  }
  .selected:hover {
    cursor: default !important;
  }
  @media screen and (max-width: ${smallScreenWidth}px) {
    display: none;
  }
  .hover-anim {
    position: absolute;
    width: 1000%;
    height: 100%;
    background-position-x: 100px;
    top: 0%;
    display: none;
    background: repeating-linear-gradient(
      135deg,
      black,
      black ${stripeWidth}px,
      rgba(174, 174, 174, 0.2) ${stripeWidth}px,
      rgba(174, 174, 174, 0.2) ${stripeWidth * 2}px
    );
  }
  .menu-item:hover .hover-anim {
    display: flex;
    animation: slide 60s linear infinite;
  }
  .selected:hover .hover-anim {
    display: none !important;
  }
  @keyframes slide {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -800px 0;
    }
  }
`

const NavElementText = styled.p`
  margin: 0;
  font-size: 20px;
  z-index: 1;
  width: 100%;
  padding: 20px 0px;
  text-align: center;
`

const NavMenuItem = props => {
  return (
    <MenuItem
      to={
        props.item.object_slug === `blog` ? `/` : `/${props.item.object_slug}`
      }
      key={props.item.title}
      partitions={props.partitions}
    >
      <div className={`${props.item.object_slug} menu-item`}>
        <div className={`${props.item.object_slug} hover-anim`} />
        <NavElementText id={props.item.object_slug + `_text`}>
          {props.item.title}
        </NavElementText>
      </div>
    </MenuItem>
  )
}

export default NavMenuItem
