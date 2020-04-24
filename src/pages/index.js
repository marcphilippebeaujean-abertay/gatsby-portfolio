import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import 'bootstrap/dist/css/bootstrap.css';
import Img from "gatsby-image/withIEPolyfill"
import SEO from "../components/seo"

import { PageContentWrapper } from "../style/pageStyleComponent"
import PostPreview from "../components/postComponent/postPreview"
import ProjectPreviews from "../components/projectPreview/projects"


export default () => {
  const data = useStaticQuery(graphql`
    {
      personalPic: file(relativePath: { eq: "personal-pic.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
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
      <div className="mb-2 row">
        <div className="col-md-4">
          <div className="personal-pic-wrapper">
            <Img
              fluid={data.personalPic.childImageSharp.fluid}
              alt="Photo of the author"
              className="wp-image-186"
            />
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center col-md-8">
          <h5 className="mt-0">Welcome</h5>
          <p className="mb-0">
            I'm Marc, a software developer from Germany. I published&nbsp;
            <b>ByteSchool</b> with the aim to offer high quality
            software development and productivity articles to help you reach
            your professional goals. If you like the content, please consider
            subscribing to my newsletter to receive updates and exclusive
            content!
          </p>
        </div>
      </div>
      <h2 className="h3">Latest Articles</h2>
      <hr></hr>
      {posts.map((post, index) =>
        index % 2 === 0 ? (
          <div key={post.title} className="row">
            <div className="pr-md-1 pr-3 pl-3 col-md-6">
              <PostPreview post={post} showStats={false} />
            </div>
            <div md={6} className="pl-md-1 pr-3 pl-3 col-md-6">
              <PostPreview post={posts[index + 1]} showStats={false} />
            </div>
          </div>
        ) : null
      )}
      <h2 className="h3">Things I've Built</h2>
      <hr></hr>
      <ProjectPreviews />
    </PageContentWrapper>
  )
}
