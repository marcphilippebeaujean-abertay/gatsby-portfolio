import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import {
  smallScreenWidth,
  smallScreenSidePadding,
} from "../../style/layoutStyle"
import { mainColour } from "../../style/themeStyle"
import { getCurrentUrlPathname } from "../../utility/navigation"
import { document } from "browser-monads"
import styled from "styled-components"

const NavigationIcon = styled.div`
  .hamburger-inner {
    position: absolute;
    top: 25px !important;
    background-color: ${mainColour} !important;
  }
  margin-right: ${smallScreenSidePadding}px;
  @media screen and (min-width: ${smallScreenWidth}px) {
    display: none;
  }
`

const HamburgerMenu = styled.div`
  #nav-overlay {
    position: fixed;
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
  .selected {
    color: black !important;
    background-color: ${mainColour} !important;
  }
  .selected:hover {
    cursor: default !important;
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

const HamburgerButton = props => {
  const [overlayActive, setOverlayActive] = useState(false)
  const toggleOverlay = () => {
    const hamburgerElements = Array.from(
      document.getElementsByClassName(`hamburger`)
    )
    if (hamburgerElements.length > 0) {
      if (overlayActive) {
        hamburgerElements[0].classList.remove("is-active")
      } else {
        hamburgerElements[0].classList.add("is-active")
      }
    }
    const overlayElement = document.getElementById(`nav-overlay`)
    overlayElement.classList.toggle(`overlay-active`)
    setOverlayActive(!overlayActive)
  }
  useEffect(() => {
    const currentUrl =
      getCurrentUrlPathname(document) !== ""
        ? getCurrentUrlPathname(document)
        : "blog"
    const currentSelected = Array.from(
      document.getElementsByClassName("selected")
    )
    const newSelectedObject = Array.from(
      document.getElementsByClassName(currentUrl)
    )
    if (currentSelected.length > 0)
      currentSelected.map(obj => obj.classList.remove("selected"))
    if (newSelectedObject.length > 0)
      newSelectedObject.map(obj => obj.classList.add("selected"))
  })
  return (
    <HamburgerMenu>
      <NavigationIcon onClick={toggleOverlay}>
        <button className="hamburger hamburger--collapse" type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </NavigationIcon>
      <div id={`nav-overlay`}>
        {props.items.map(item =>
          item.object_slug !== "logo" ? (
            <OverlayLink
              key={item.object_slug + "_key"}
              to={item.object_slug === "blog" ? "/" : `/${item.object_slug}`}
              onClick={toggleOverlay}
              className={item.object_slug}
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
