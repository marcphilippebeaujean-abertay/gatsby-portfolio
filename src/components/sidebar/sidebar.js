import React from "react"

import FeaturedTags from "./featuredTags"
import NewsletterForm from "../forms/newsletterForm"

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <NewsletterForm formTitle={"newsletter"} />
      <FeaturedTags />
    </aside>
  )
}
export default Sidebar
