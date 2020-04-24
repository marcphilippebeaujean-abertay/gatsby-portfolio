import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { getCurrentUrlPathname } from "../../utility/navigation"
import { document } from "browser-monads"

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
    const currentUrl = getCurrentUrlPathname(document)
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
    <div id="hamburger-menu">
      <div id="hamburger-navigation-icon-wrapper" onClick={toggleOverlay}>
        <button className="hamburger hamburger--collapse" type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
      <div id={`nav-overlay`}>
        {props.items.map(item =>
          item.object_slug !== "logo" ? (
            <Link
              key={item.object_slug + "_key"}
              to={
                item.object_slug === "blog" ? "/blog/1" : `/${item.object_slug}`
              }
              onClick={toggleOverlay}
              className={`${item.object_slug} dropdown-nav-overlay-link`}
            >
              {item.icon}
              {item.title}
            </Link>
          ) : null
        )}
        <div id="overlay-rest-bg" />
      </div>
    </div>
  )
}

export default HamburgerButton
