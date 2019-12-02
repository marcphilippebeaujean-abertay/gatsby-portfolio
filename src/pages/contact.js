import React from "react"
import SEO from "../components/seo"

import ContactForm from "../components/forms/contactForm"
import { PageContentWrapper } from "../style/pageStyleComponent"

export default ({ pageContext }) => {
  return (
    <PageContentWrapper>
      <SEO title="Contact" description="Send me a message!" />
      <h1>Contact</h1>
      <ContactForm formTitle={"contact"} />
    </PageContentWrapper>
  )
}
