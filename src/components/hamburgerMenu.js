import React, { useState } from "react"
import { Link } from "gatsby"
import {
  smallScreenWidth,
  smallScreenNavHeight,
  smallScreenSidePadding,
} from "../style/layoutStyle"
import { mainColour } from "../style/themeStyle"
import { getCurrentUrlPathname } from "../utility/navigation"
import { document } from "browser-monads"
import styled from "styled-components"

const NavigationIcon = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: ${smallScreenSidePadding}px;
  top: 2px;
  width: 40px;
  overflow: hidden;
  @media screen and (min-width: ${smallScreenWidth}px) {
    display: none;
  }
  .bar {
    position: relative;
    width: 100%;
    height: 5px;
    margin: 5px 0;
    background-color: ${mainColour};
    transition: all 0.2s;
    opacity: 1;
    transform: rotate(0);
  }
  .bar.bar1 {
    transform: rotate(-45deg) translate(-10px, 11px);
  }
  .bar.bar2 {
    opacity: 0;
  }
  .bar.bar3 {
    transform: rotate(45deg) translate(-10px, -11px);
  }
`

const HamburgerMenu = styled.div`
  #nav-overlay {
    position: fixed;
    margin-top: ${smallScreenNavHeight}px;
    left: 0%;
    width: 100%;
    z-index: 2 !important;
    display: flex;
    flex-direction: column;
    opacity: 0;
    transition: all 0.2s;
    transform: scaleX(0);
    @media screen and (min-width: ${smallScreenWidth}px) {
      display: none !important;
    }
  }
  #nav-overlay.overlay-active {
    transform: scaleX(1);
    opacity: 1;
  }
  #overlay-rest-bg {
    opacity: 0.9;
    background: white;
    width: 100vw;
    height: 100vh;
  }
`

const OverlayLink = styled(Link)`
  text-decoration: none;
  opacity: 1;
  color: ${props => (props.selected ? `black` : mainColour)};
  background-color: ${props => (props.selected ? mainColour : `black`)};
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
`

const barElementsTag = `bar`

const HamburgerButton = props => {
  const [overlayActive, setOverlayActive] = useState(false)
  const toggleOverlay = () => {
    const menuBarElements = Array.from(
      document.getElementsByClassName(barElementsTag)
    )
    menuBarElements.map((elem, index) =>
      elem.classList.toggle(`${barElementsTag + (index + 1)}`)
    )
    const overlayElement = document.getElementById(`nav-overlay`)
    overlayElement.classList.toggle(`overlay-active`)
    setOverlayActive(!overlayActive)
  }
  return (
    <HamburgerMenu>
      <NavigationIcon onClick={toggleOverlay}>
        <div className={barElementsTag} />
        <div className={barElementsTag} />
        <div className={barElementsTag} />
      </NavigationIcon>
      <div id={`nav-overlay`}>
        {props.items.map(item =>
          item.object_slug !== "logo" ? (
            <OverlayLink
              key={item.object_slug + "_key"}
              to={`/${item.object_slug}`}
              onClick={toggleOverlay}
              selected={item.object_slug === getCurrentUrlPathname(document)}
            >
              {item.title}
            </OverlayLink>
          ) : null
        )}
        <div id="overlay-rest-bg" />
      </div>
    </HamburgerMenu>
  )
}

export default HamburgerButton
