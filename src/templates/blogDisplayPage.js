import React from "react"
import PostPreview from "../components/postComponent/postPreview"
import styled from "styled-components"
import SEO from "../components/seo"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { Link } from "gatsby"
import { PageContentWrapper } from "../style/pageStyleComponent"

const PageToggleStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 10px;
  color: black !important;
  a {
    margin: 0 10px;
    text-decoration: none;
    font-size: 18px;
  }
  a:hover {
    text-decoration: underline;
  }
  .bold {
    font-weight: bold;
  }
  .bold:hover {
    text-decoration: none !important;
    cursor: default !important;
  }
  .inner-container {
    display: flex;
    position: relative;
  }
  #page-backward {
    left: -40px;
  }
  #page-forward {
    right: -40px;
  }
  .nav-arrow {
    position: absolute;
  }
  svg {
    margin-top: 2.6px;
  }
`

export default ({ pageContext }) => {
  return (
    <PageContentWrapper>
      <SEO
        title={`Blog - Page ${pageContext.currentPage}`}
        description={`Showing results for page ${pageContext.currentPage} of the <JustDoIT /> software development blog`}
      />
      <h1
        style={{ marginBottom: `0px` }}
        dangerouslySetInnerHTML={{ __html: pageContext.title }}
      />
      <hr></hr>
      {pageContext.posts.map(post => (
        <PostPreview post={post.node} showStats={true} key={post.node.title} />
      ))}
      <PageToggleStyle>
        <div className="inner-container">
          {pageContext.currentPage === 1 ? null : (
            <Link
              to={`/blog/${pageContext.currentPage - 1}`}
              className="nav-arrow"
              id="page-backward"
            >
              <IoIosArrowBack size="20px" />
            </Link>
          )}
          {pageContext.numberOfPages === 1
            ? null
            : Array.from({ length: pageContext.numberOfPages }).map(
                (page, index) => (
                  <div key={index}>
                    <Link
                      to={`/blog/${index + 1}`}
                      id={`page-link-${index + 1}`}
                      className={
                        pageContext.currentPage === index + 1 ? `bold` : ``
                      }
                    >
                      {index + 1}
                    </Link>
                  </div>
                )
              )}
          {pageContext.currentPage === pageContext.numberOfPages ? null : (
            <Link
              to={`/blog/${pageContext.currentPage + 1}`}
              className="nav-arrow"
              id="page-forward"
            >
              <IoIosArrowForward size="20px" />
            </Link>
          )}
        </div>
      </PageToggleStyle>
    </PageContentWrapper>
  )
}
