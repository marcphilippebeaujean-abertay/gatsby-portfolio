import React from "react"
import styled from "styled-components"
import TwitterFeed from "./twitterFeed"
import {
  mediumScreenWidth,
  mainContentWidthPercent,
  navMenuHeight,
  initContentWidth,
  smallScreenSidePadding,
} from "../style/layoutStyle"
import NewsletterForm from "./forms/newsletterForm"

const sidebarWidthPercent = 100 - mainContentWidthPercent

const SidebarWrapper = styled.aside`
  z-index: 0;
  position: absolute;
  margin-left: calc(${mainContentWidthPercent}% + ${smallScreenSidePadding}px);
  width: calc(${sidebarWidthPercent}% - ${smallScreenSidePadding}px);
  animation: fade-in 1s;
  top: ${navMenuHeight}px;
  @media screen and (max-width: ${initContentWidth}px) {
    padding: 0 0 0 ${smallScreenSidePadding * 3}px;
    margin-left: calc(
      ${mainContentWidthPercent}% - ${smallScreenSidePadding}px
    );
    width: calc(${sidebarWidthPercent}% - ${smallScreenSidePadding * 3}px);
  }
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
