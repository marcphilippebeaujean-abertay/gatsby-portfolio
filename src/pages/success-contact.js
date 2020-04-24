import React from "react"
import SEO from "../components/seo"
import { PageContentWrapper } from "../style/pageStyleComponent"

export default ({ pageContext }) => {
  return (
    <PageContentWrapper>
      <SEO title="Success" description="Your message was sent successfully!" />
      <div className="alert alert-success" variant={"success"}>
        Your message has been submitted! I will get back to you as soon as
        possible.
      </div>
    </PageContentWrapper>
  )
}
