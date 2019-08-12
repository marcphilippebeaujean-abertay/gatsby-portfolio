import React, {useEffect} from 'react'
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
  .bold{
    font-weight: bold;
  }
  .bold a:hover{
    text-decoration: none;
  }
`

export default ({ pageContext }) => {
    useEffect(() => {
      let currentPageIndex = parseInt(document.location.pathname.match(/([1-9])(?!\/)$/)[0]);
      const boldPageLink = document.getElementsByClassName('bold');
      console.log(boldPageLink);
      if(boldPageLink.length > 0) {
        boldPageLink[0].classList.toggle('bold');
      }
      const pageLinkElement = document.getElementById(`page-link-${currentPageIndex}`);
      pageLinkElement.classList.toggle('bold');
    })
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
              <Link to={`/blog/${index+1}`}
                    id={`page-link-${index+1}`}>
                {index + 1}
              </Link>
            </div>
          ))
        }
        </PageToggleStyle>
      </PageContentWrapper>)
}