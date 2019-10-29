import React, { useEffect } from "react"
import { navMenuHeight, smallScreenWidth } from "../../style/layoutStyle"
import { mainColour } from "../../style/themeStyle"
import { getCurrentUrlPathname } from "../../utility/navigation"
import { document } from "browser-monads"
import {
  IoIosSearch,
  IoIosInformationCircleOutline,
  IoIosSend,
  IoIosBook,
} from "react-icons/io"
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

const items = [
  {
    object_slug: `blog`,
    title: `Blog`,
    icon: <IoIosBook className="nav-icon" />,
  },
  {
    object_slug: `search`,
    title: `Search`,
    icon: <IoIosSearch className="nav-icon" />,
  },
  {
    object_slug: `about`,
    title: `About`,
    icon: <IoIosInformationCircleOutline className="nav-icon" />,
  },
  {
    object_slug: `contact`,
    title: `Contact`,
    icon: <IoIosSend className="nav-icon" />,
  },
]

const NavMenu = () => {
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
  const menuPartitions = items.length + 1
  return (
    <div>
      <TopCoverupDiv className="d-none d-sm-block" />
      <MainMenuWrapper>
        <Logo key={`logo`} partitions={menuPartitions} />
        <div className="nav-bar justify-content-end">
          {items.map(item => (
            <NavMenuItem
              className="align-"
              key={item.object_slug + "_key"}
              item={item}
              partitions={menuPartitions}
            >
              {item.icon}
              {item.title}
            </NavMenuItem>
          ))}
          <HamburgerButton items={items} />
        </div>
      </MainMenuWrapper>
    </div>
  )
}

export default NavMenu
