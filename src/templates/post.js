import React, { useEffect } from "react"
import SEO from "../components/seo"
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
      <SEO
        title={pageContext.title}
        description={pageContext.excerpt.slice(
          3,
          pageContext.excerpt.length - 4
        )}
        image={{
          src: pageContext.featured_media.source_url,
          height: pageContext.featured_media.media_details.height,
          width: pageContext.featured_media.media_details.width,
        }}
        tags={[...pageContext.tags.map(tag => tag.name)].join(",")}
      />
      <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
      <PostStats post={pageContext} />
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
      <DiscussionEmbed {...disqusConfig} />
    </PageContentWrapper>
  )
}
