import React from "react"
import PostPreview from "../components/postPreview"
import { PageContentWrapper } from "../style/pageStyleComponent"

export default ({ pageContext }) => {
  return (
    <PageContentWrapper>
      <h1
        style={{ marginBottom: `0px` }}
        dangerouslySetInnerHTML={{ __html: pageContext.title }}
      />
      {pageContext.posts.map(edge => (
        <PostPreview post={edge.node} key={edge.node.title} />
      ))}
    </PageContentWrapper>
  )
}
