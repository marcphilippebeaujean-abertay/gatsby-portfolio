import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import Prism from "prismjs"
import "../style/prism.css"
import { PageContentWrapper } from "../style/pageStyleComponent"
import "../components/postStats"
import { DiscussionEmbed } from "disqus-react"
import PostStats from "../components/postStats"

export default ({ pageContext }) => {
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: `${pageContext.wordpress_id}` },
  }
  useEffect(() => Prism.highlightAll())
  return (
    <PageContentWrapper>
      <Helmet>
        <meta
          property="og:image"
          content={pageContext.featured_media.source_url}
        />
      </Helmet>
      <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
      <PostStats post={pageContext} />
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
      <DiscussionEmbed {...disqusConfig} />
    </PageContentWrapper>
  )
}
