import React from "react"
import SEO from "../components/seo"
import { PageContentWrapper } from "../style/pageStyleComponent"

export default ({ pageContext }) => {
  return (
    <PageContentWrapper>
      <SEO title="Success" description="Your message was sent successfully!" />
      <div className="alert alert-success" role="alert">
        You subscribed to my newsletter - awesome!
      </div>
    </PageContentWrapper>
  )
}
