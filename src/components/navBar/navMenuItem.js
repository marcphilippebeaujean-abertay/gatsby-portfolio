import React from "react"
import { Link } from "gatsby"

const NavMenuItem = props => {
  return (
    <Link
      className="nav-menu-item"
      to={
        props.item.object_slug === `blog`
          ? `/blog/1`
          : `/${props.item.object_slug}`
      }
      key={props.item.title}
      partitions={props.partitions}
    >
      <div className={`${props.item.object_slug} menu-item nav-menu-item-text`}>
        <div className={`${props.item.object_slug} hover-anim`} />
        <p id={props.item.object_slug + `_text`}>
          {props.children}
        </p>
      </div>
    </Link>
  )
}

export default NavMenuItem
