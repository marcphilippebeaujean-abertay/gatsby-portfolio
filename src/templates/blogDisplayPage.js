import React from 'react'
import PostPreview from "../components/postPreview";
import { PageContentWrapper } from './page';

export default ({ pageContext }) => {
    return(
      <PageContentWrapper>
      <h1 style={{marginBottom: `0px`}} dangerouslySetInnerHTML={{__html: pageContext.title}} />
        {pageContext.posts.map(post => <PostPreview post={post.node}
                                                    key={post.node.title} />)}
      </PageContentWrapper>)
}