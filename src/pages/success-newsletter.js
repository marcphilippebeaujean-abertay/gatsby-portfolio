import React from "react"
import SEO from "../components/seo"
import { PageContentWrapper } from "../style/pageStyleComponent"
import { Alert } from "react-bootstrap"

export default ({ pageContext }) => {
  return (
    <PageContentWrapper>
      <SEO title="Success" description="Your message was sent successfully!" />
      <Alert variant={"success"}>
        You subscribed to my newsletter - awesome!
      </Alert>
    </PageContentWrapper>
  )
}
