import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Row, Col } from "react-bootstrap"
import Img from "gatsby-image/withIEPolyfill"
import SEO from "../components/seo"
import styled from "styled-components"

import { PageContentWrapper } from "../style/pageStyleComponent"
import PostPreview from "../components/postComponent/postPreview"

const PersonalPicWrapper = styled.div`
  margin: auto;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  overflow: hidden;
`

export default () => {
  const data = useStaticQuery(graphql`
    {
      personalPic: file(relativePath: { eq: "personal-pic.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      allWordpressWpBlogpost(sort: { fields: date, order: DESC }, limit: 4) {
        edges {
          node {
            slug
            title
            featured_media {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    base64
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                    originalImg
                    originalName
                  }
                }
              }
            }
            excerpt
          }
        }
      }
    }
  `)
  const posts = data.allWordpressWpBlogpost.edges.map(node => {
    return { ...node.node }
  })
  return (
    <PageContentWrapper>
      <SEO
        title={"Home"}
        description={
          "Hi! My name is Marc Philippe Beaujean and I'm a software developer from Germany."
        }
      />
      <h1>Home</h1>
      <hr></hr>
      <Row className="mb-2">
        <Col md={4}>
          <PersonalPicWrapper>
            <Img
              fluid={data.personalPic.childImageSharp.fluid}
              alt="Photo of the author"
              className="wp-image-186"
            />
          </PersonalPicWrapper>
        </Col>
        <Col md={8} className="d-flex flex-column justify-content-center">
          <h5 className="mt-0">Welcome</h5>
          <p className="mb-0">
            I'm Marc, a software developer from Germany. I published&nbsp;
            <b>&lt;ByteSchool /&gt;</b> with the aim to offer high quality
            software development and productivity articles to help you reach
            your professional goals. If you like the content, please consider
            subscribing to my newsletter to receive updates and exclusive
            content!
          </p>
        </Col>
      </Row>
      <h2 className="mt-4">Latest Articles</h2>
      {posts.map((post, index) =>
        index % 2 === 0 ? (
          <Row key={post.title}>
            <Col md={6} className="pr-md-1 pr-3 pl-3">
              <PostPreview post={post} showStats={false} />
            </Col>
            <Col md={6} className="pl-md-1 pr-3 pl-3">
              <PostPreview post={posts[index + 1]} showStats={false} />
            </Col>
          </Row>
        ) : null
      )}
    </PageContentWrapper>
  )
}
