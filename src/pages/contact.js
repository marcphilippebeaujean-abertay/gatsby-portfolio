import React from "react"
import { Helmet } from "react-helmet"

import ContactForm from "../components/forms/contactForm"
import { PageContentWrapper } from "../style/pageStyleComponent"

export default ({ pageContext }) => {
  return (
    <PageContentWrapper>
      <Helmet title="Contact" />
      <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
      <ContactForm formTitle={"contact"} />
    </PageContentWrapper>
  )
}
