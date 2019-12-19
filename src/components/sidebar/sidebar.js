import React from "react"
import styled from "styled-components"

import FeaturedTags from "./featuredTags"
import { navMenuHeight } from "../../style/layoutStyle"
import NewsletterForm from "../forms/newsletterForm"
import PodcastsCard from "./podcastsCard"

const SidebarWrapper = styled.aside`
  z-index: 0;
  position: relative;
  margin: ${navMenuHeight + 10}px 0px 10px 0px;
  animation: fade-in 1s;
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
      <NewsletterForm formTitle={"newsletter"} />
      <div className="mt-2" />
      <FeaturedTags />
      <div className="mt-2" />
      <PodcastsCard />
    </SidebarWrapper>
  )
}
export default Sidebar
