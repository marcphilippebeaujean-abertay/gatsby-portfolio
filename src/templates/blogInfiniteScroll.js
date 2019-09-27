import { PageContentWrapper } from "../style/pageStyleComponent"
import React from "react"
import PostPreview from "../components/postPreview"

export default ({ pageContext }) => {
  return (
    <PageContentWrapper id="post-feed">
      <h1
        style={{ marginBottom: `0px` }}
        dangerouslySetInnerHTML={{ __html: pageContext.title }}
      />
      {pageContext.posts.map(post => (
        <PostPreview post={post.node} key={post.node.title} />
      ))}
    </PageContentWrapper>
  )
}
