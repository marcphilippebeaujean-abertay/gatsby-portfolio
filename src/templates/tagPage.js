import React from "react"
import PostPreview from "../components/postComponent/postPreview"
import SEO from "../components/seo"
import { PageContentWrapper } from "../style/pageStyleComponent"

export default ({ pageContext }) => {
  return (
    <PageContentWrapper>
      <SEO
        title={`${pageContext.title}`}
        description={`Results for tag "${pageContext.excerpt}"`}
      />
      <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
      <hr></hr>
      {pageContext.posts.map(edge => (
        <PostPreview post={edge.node} showStats={true} key={edge.node.title} />
      ))}
    </PageContentWrapper>
  )
}
