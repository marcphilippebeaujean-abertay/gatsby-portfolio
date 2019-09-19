import React from "react"
import ContactForm from "../components/forms/contactForm"
import { PageContentWrapper } from "../style/pageStyleComponent"

export default ({ pageContext }) => {
  return (
    <PageContentWrapper>
      <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
      <ContactForm formTitle={"contact"} />
    </PageContentWrapper>
  )
}
