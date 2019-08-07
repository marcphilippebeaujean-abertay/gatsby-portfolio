import React from 'react'
import styled from "styled-components";
import PostPreview from "../components/postPreview";
import { graphql, useStaticQuery } from 'gatsby';
import { mainContentWidthPercent, initContentWidth, smallScreenWidth, smallScreenSidePadding } from "../style/layoutStyle";

const PageContentWrapper = styled.div`
  width: ${mainContentWidthPercent}%;
  padding-right: ${smallScreenSidePadding}px;
  @media screen and (max-width: ${smallScreenWidth}px) {
        width: 100%;
  }
  @media screen and (max-width: ${initContentWidth}px){
        padding: 0px ${smallScreenSidePadding}px !important;
  }
`

export default ({ pageContext }) => {
    const data = useStaticQuery(graphql`
    query{
      allWordpressPost(limit: 6) {
        edges {
          node {
            id
            title
            excerpt
            date(formatString: "DD-MM-YYYY")
            slug
          }
        }
      }
    }
    `);
    return(
      <PageContentWrapper>
        {data.allWordpressPost.edges.map(post =>
          <PostPreview post = {post.node} />
        )}
      </PageContentWrapper>)
}