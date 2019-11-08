import React from "react"
import { PageContentWrapper } from "../style/pageStyleComponent"
import SEO from "../components/seo"

export default () => {
  return (
    <PageContentWrapper>
      <SEO
        title={"Home"}
        description={
          "Hi! My name is Marc Philippe Beaujean and I'm a software developer from Germany."
        }
      />
      <h1>Home</h1>
      <hr></hr>
    </PageContentWrapper>
  )
}
