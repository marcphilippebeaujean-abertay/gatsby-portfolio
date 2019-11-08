import React from "react"
import { PageContentWrapper } from "../style/pageStyleComponent"
import { graphql, useStaticQuery, navigate } from "gatsby"
import { Row, Col, Card } from "react-bootstrap"
import Img from "gatsby-image/withIEPolyfill"
import SEO from "../components/seo"
import styled from "styled-components"

import ButtonMixin from "../style/btnMixin"

const PersonalPicWrapper = styled.div`
  margin: auto;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  overflow: hidden;
`

const HomePageStyles = styled.div`
  .preview-img {
    display: inline-block;
    float: left;
    width: 80px;
  }
`

const PostCard = ({ post }) => (
  <Col md={6}>
    <Card>
      <Card.Body>
        <Card.Title dangerouslySetInnerHTML={{ __html: post.title }} />
        <Card.Text>
          <div className="preview-img">
            <Img fluid={post.featured_media.localFile.childImageSharp.fluid} />
          </div>
          {post.excerpt.slice(3, post.excerpt.length - 5)}{" "}
        </Card.Text>
        <Card.Link href={`/post/${post.slug}`} target="_blank">
          Read
        </Card.Link>
      </Card.Body>
    </Card>
  </Col>
)

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
      allWordpressWpBlogpost(sort: { fields: date, order: DESC }, limit: 6) {
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
      <HomePageStyles>
        <SEO
          title={"Home"}
          description={
            "Hi! My name is Marc Philippe Beaujean and I'm a software developer from Germany."
          }
        />
        <h1>Home</h1>
        <hr></hr>
        <Row>
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
            <h3>Welcome</h3>
            <p>
              Hi, my name is Marc! At <b>ByteSchool</b>, I aim to offer high
              quality software development and productivity articles to help you
              reach your professional goals. If you like the content, please
              consider subscribing to my newsletter to receive updates and
              exclusive content!
            </p>
          </Col>
        </Row>
        <hr></hr>
        <h2>Latest Articles</h2>
        {posts.map((post, index) =>
          index % 2 === 0 ? (
            <Row className="mb-md-2">
              <PostCard post={post} />
              <PostCard post={posts[index + 1]} className="mb-2" />
            </Row>
          ) : null
        )}
      </HomePageStyles>
    </PageContentWrapper>
  )
}
