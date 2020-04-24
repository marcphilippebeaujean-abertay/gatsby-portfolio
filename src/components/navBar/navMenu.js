import React, { useEffect } from "react"
import { document } from "browser-monads"
import { IoIosSearch, IoIosSend, IoIosBook } from "react-icons/io"
import { Link } from "gatsby"

import { getCurrentUrlPathname } from "../../utility/navigation"
import HamburgerButton from "./hamburgerMenu"
import NavMenuItem from "./navMenuItem"
import Logo from "../logo"

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
    object_slug: `contact`,
    title: `Contact`,
    icon: <IoIosSend className="nav-icon" />,
  },
]

const NavMenu = () => {
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
  const menuPartitions = items.length + 1
  return (
    <div>
      <div id="nav-top-coverup" className="d-none d-sm-block" />
      <nav id="nav-menu">
        <Link to="/">
          <Logo key={`logo`} partitions={menuPartitions} />
        </Link>
        <div className="nav-bar justify-content-end">
          {items.map(item => (
            <NavMenuItem
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
      </nav>
    </div>
  )
}

export default NavMenu
