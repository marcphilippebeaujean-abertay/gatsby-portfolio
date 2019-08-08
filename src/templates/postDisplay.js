import React from 'react'
import PostPreview from "../components/postPreview";
import { graphql, useStaticQuery } from 'gatsby';
import { PageContentWrapper } from './page';

export default ({ pageContext }) => {
    const data = useStaticQuery(graphql`{
      allWordpressWpBlogpost {
        edges {
          node {
            id
            date( formatString: "/MM/DD/YYYY" )
            featured_media {
              source_url
            }
            slug
            title
            excerpt
          }
        }
      }
    }`);
    return(
      <PageContentWrapper>
        {data.allWordpressWpBlogpost.edges.map(post =>
          <PostPreview post={post.node} key={post.node.title} />
        )}
      </PageContentWrapper>)
}