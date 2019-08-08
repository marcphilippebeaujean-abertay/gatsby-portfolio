import React from 'react'
import styled from "styled-components";
import PostPreview from "../components/postPreview";
import { graphql, useStaticQuery } from 'gatsby';
import { mainContentWidthPercent, initContentWidth, mediumScreenWidth, smallScreenSidePadding } from "../style/layoutStyle";

const PageContentWrapper = styled.div`
  width: ${mainContentWidthPercent}%;
  padding-right: ${smallScreenSidePadding}px;
  @media screen and (max-width: ${mediumScreenWidth}px) {
        width: 100%;
  }
  @media screen and (max-width: ${initContentWidth}px){
        padding: 0px ${smallScreenSidePadding}px !important;
  }
`

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