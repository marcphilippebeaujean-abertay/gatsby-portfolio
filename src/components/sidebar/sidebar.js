import React from "react"
import styled from "styled-components"
import TwitterFeed from "./twitterFeed"
import { navMenuHeight } from "../../style/layoutStyle"
import NewsletterForm from "../forms/newsletterForm"

const SidebarWrapper = styled.aside`
  z-index: 0;
  position: relative;
  margin: ${navMenuHeight + 10}px 0px 10px 0px;
  animation: fade-in 1s;
  .fixed {
    position: fixed;
    top: ${navMenuHeight}px;
    margin: 10px 10px 10px 0px;
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
      <NewsletterForm formTitle={"newsletter"} />
    </SidebarWrapper>
  )
}
export default Sidebar
