import { PageContentWrapper } from "../style/pageStyleComponent"
import SEO from "../components/seo"

import React from "react"
import PostPreview from "../components/postComponent/postPreview"
import Pagination from "../components/widgets/blogPagination"

export default ({ pageContext }) => {
  return (
    <PageContentWrapper id="post-feed">
      <SEO
        title={"Blog"}
        description={
          "<JustDoIT /> is a blog about software development - it is packed with useful tutorials and advise for new or experience developers!"
        }
      />
      <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
      <hr></hr>
      <div className="d-flex justify-content-center">
        <Pagination
          numberOfPages={pageContext.numberOfPages}
          currentPageNum={pageContext.currentPage}
          className="mr-auto"
        />
      </div>
      {pageContext.posts.map(post => (
        <PostPreview post={post.node} showStats={true} key={post.node.title} />
      ))}
      <div className="d-flex justify-content-center">
        <Pagination
          numberOfPages={pageContext.numberOfPages}
          currentPageNum={pageContext.currentPage}
        />
      </div>
    </PageContentWrapper>
  )
}
