import React from "react"
import SEO from "../components/seo"
import { PageContentWrapper } from "../style/pageStyleComponent"

export default ({ pageContext }) => {
  return (
    <PageContentWrapper>
      <SEO
        title={pageContext.title}
        description={pageContext.excerpt.slice(
          3,
          pageContext.excerpt.length - 4
        )}
      />
      <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
      <hr></hr>
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </PageContentWrapper>
  )
}
