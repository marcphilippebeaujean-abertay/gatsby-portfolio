import React from "react"
import styled from "styled-components"
import TwitterFeed from "./twitterFeed"
import {
  mediumScreenWidth,
  mainContentWidthPercent,
  navMenuHeight,
  smallScreenSidePadding,
} from "../style/layoutStyle"
import NewsletterForm from "./forms/newsletterForm"

const sidebarWidthPercent = 100 - mainContentWidthPercent

const SidebarWrapper = styled.aside`
  z-index: 0;
  position: relative;
  margin: ${navMenuHeight}px 0px 10px 0px;
  width: calc(${sidebarWidthPercent}% - ${smallScreenSidePadding}px);
  animation: fade-in 1s;

  @media screen and (max-width: ${mediumScreenWidth}px) {
    display: none;
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
  return (
    <SidebarWrapper>
      <TwitterFeed />
      <div>
        <NewsletterForm formTitle={"newsletter"} />
      </div>
    </SidebarWrapper>
  )
}
export default Sidebar
