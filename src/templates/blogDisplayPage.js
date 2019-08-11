import React from 'react'
import PostPreview from "../components/postPreview";
import styled from 'styled-components';
import { Link } from "gatsby";
import { PageContentWrapper } from './page';

const PageToggleStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 10px;
  a{
    margin: 10px;
    text-decoration: none;
    font-size: 18px;
  }
  a:hover{
    text-decoration: underline;
  }
`

export default ({ pageContext }) => {
    return(
      <PageContentWrapper>
        <h1 style={{marginBottom: `0px`}} dangerouslySetInnerHTML={{__html: pageContext.title}} />
        {pageContext.posts.map(post => <PostPreview post={post.node}
                                                    key={post.node.title} />)}
        <PageToggleStyle>
        {
          pageContext.numberOfPages === 1 ? null :
            Array.from({length: pageContext.numberOfPages}).map((page, index) => (
            <div key={index}>
              <Link to={index === 0 ? '/blog' : `/blog/${index + 1}`}>
                {index + 1}
              </Link>
            </div>
          ))
        }
        </PageToggleStyle>
      </PageContentWrapper>)
}