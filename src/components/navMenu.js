import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  navMenuHeight,
  initContentWidth,
  smallScreenWidth,
} from "../style/layoutStyle"
import { mainColour } from "../style/themeStyle"
import { getCurrentUrlPathname } from "../utility/navigation"
import { document } from "browser-monads"
import CookieBanner from "./cookieBanner"
import HamburgerButton from "./hamburgerMenu"
import NavMenuItem from "./navMenuItem"
import styled from "styled-components"
import Logo from "./logo"

const MainMenuWrapper = styled.nav`
  background-color: lightgrey;
  z-index: 3;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  .nav-bar {
    margin: 0 auto;
    background-color: rgb(0, 0, 0);
    display: flex;
    position: relative;
    width: ${initContentWidth}px;
    padding: 0;
    border-radius: 0px 0px 10px 10px;
    color: ${mainColour} !important;
    height: ${navMenuHeight}px;
    overflow: hidden;
    -webkit-animation: menu-drop-in 1s;
    -moz-animation: menu-drop-in 1s;
    -o-animation: menu-drop-in 1s;
    -ms-transition: menu-drop-in 1s;
    animation: menu-drop-in 1s;
  }
  @media screen and (max-width: ${initContentWidth}px) {
    .nav-bar {
      border-radius: 0;
      width: 100%;
    }
  }
  @media screen and (max-width: ${smallScreenWidth}px) {
    .nav-bar {
      height: ${navMenuHeight - 20}px;
      overflow: inherit;
    }
  }
  @keyframes menu-drop-in {
    from {
      top: -100px;
    }
    to {
      top: 0px;
    }
  }
  position: fixed;
`

const TopCoverupDiv = styled.div`
  position: absolute;
  background-color: white;
  z-index: 1;
  width: 100%;
  height: ${navMenuHeight}px;
  @media screen and (max-width: ${smallScreenWidth}px) {
    display: none;
  }
`

const NavMenu = () => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressWpApiMenusMenusItems(filter: { name: { eq: "Main Menu" } }) {
        edges {
          node {
            name
            items {
              title
              object_slug
            }
          }
        }
      }
    }
  `)
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
  const menuPartitions =
    data.allWordpressWpApiMenusMenusItems.edges[0].node.items.length + 1
  return (
    <div>
      <TopCoverupDiv />

      <MainMenuWrapper>
        <CookieBanner />
        <div className="nav-bar">
          {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item =>
            item.object_slug === "logo" ? (
              <Logo key={`logo`} partitions={menuPartitions} />
            ) : (
              <NavMenuItem
                key={item.object_slug + "_key"}
                item={item}
                partitions={menuPartitions}
              />
            )
          )}
          <HamburgerButton
            items={data.allWordpressWpApiMenusMenusItems.edges[0].node.items}
          />
        </div>
      </MainMenuWrapper>
    </div>
  )
}

export default NavMenu
