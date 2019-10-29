import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { navMenuHeight, smallScreenWidth } from "../../style/layoutStyle"
import { mainColour } from "../../style/themeStyle"
import { getCurrentUrlPathname } from "../../utility/navigation"
import { document } from "browser-monads"
import HamburgerButton from "./hamburgerMenu"
import NavMenuItem from "./navMenuItem"
import styled from "styled-components"
import Logo from "../logo"

const MainMenuWrapper = styled.nav`
  display: flex;
  background-color: black;
  width: 100%;
  z-index: 3;
  padding: 0;
  animation: menu-drop-in 1s;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.7);
  a:hover {
    text-decoration: none;
    color: ${mainColour};
  }
  a:active {
    color: ${mainColour};
  }
  .nav-bar {
    background-color: rgb(0, 0, 0);
    justify-content: right;
    align-self: flex-end;
    display: flex;
    position: relative;
    color: ${mainColour} !important;
    overflow: hidden;
    width: 100%;
  }
  @media screen and (max-width: ${smallScreenWidth}px) {
    .nav-bar {
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
  z-index: 1;
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
      <TopCoverupDiv className="d-none d-sm-block" />
      <MainMenuWrapper>
        <Logo key={`logo`} partitions={menuPartitions} />
        <div className="nav-bar justify-content-end">
          {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item =>
            item.object_slug === "logo" ? null : (
              <NavMenuItem
                className="align-"
                key={item.object_slug + "_key"}
                item={item}
                partitions={menuPartitions}
              >
                {item.title}
              </NavMenuItem>
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
