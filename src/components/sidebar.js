import React, { useEffect } from "react"
import styled from "styled-components"
import TwitterFeed from "./twitterFeed"
import {
  mediumScreenWidth,
  mainContentWidthPercent,
  navMenuHeight,
  smallScreenSidePadding,
  initContentWidth,
} from "../style/layoutStyle"
import NewsletterForm from "./forms/newsletterForm"

const sidebarWidthPercent = 100 - mainContentWidthPercent
const sidebarInitPixelWidth = initContentWidth * (sidebarWidthPercent / 100)

const SidebarWrapper = styled.aside`
  z-index: 0;
  position: relative;
  margin: ${navMenuHeight}px 0px 10px 0px;
  width: calc(${sidebarWidthPercent}% - ${smallScreenSidePadding}px);
  animation: fade-in 1s;
  overflow: hidden;
  .fixed {
    position: fixed;
    top: ${navMenuHeight}px;
    width: calc(${sidebarInitPixelWidth}px - ${smallScreenSidePadding}px);
    margin: 0px 0px 10px 0px;
  }
  @media screen and (max-width: ${mediumScreenWidth}px) {
    display: none;
  }
  @media screen and (max-width: ${initContentWidth}px) {
    .fixed {
      width: calc(${sidebarWidthPercent}% - ${smallScreenSidePadding + 6}px);
    }
  }
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const Sidebar = () => {
  useEffect(() => {
    const el = document.getElementById("sub-form")
    const elTop =
      el.getBoundingClientRect().top -
      document.body.getBoundingClientRect().top -
      navMenuHeight
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > elTop) {
        el.classList.add("fixed")
      } else {
        el.classList.remove("fixed")
      }
    })
  })
  return (
    <SidebarWrapper>
      <TwitterFeed />
      <NewsletterForm formTitle={"newsletter"} />
    </SidebarWrapper>
  )
}
export default Sidebar
