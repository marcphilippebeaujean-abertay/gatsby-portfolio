import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { smallScreenWidth, smallScreenSidePadding } from "../style/layoutStyle"
import PostStats from "./postStats"
import Img from "gatsby-image/withIEPolyfill"

const PostPreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .image-excerpt-container {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    position: relative;
  }
  .excerpt-text {
    width: 100%;
  }
  .thumbnail {
    margin-right: ${smallScreenSidePadding}px;
    width: 200px;
    height: auto;
  }
  p {
    margin: 0;
  }
  h2 {
    margin-bottom: 0;
  }
  .in-text-thumbnail-wrapper {
    display: inherit;
    float: left;
    width: 90px;
    height: 90px;
  }
  .in-text-thumbnail {
    width: 90px;
    display: block;
    float: left;
    left: 0 !important;
  }
  .read-more {
    text-decoration: none;
    transition: all 0.3s;
  }
  .read-more:hover {
    text-decoration: underline;
  }
  .img-center {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  @media screen and (max-width: ${smallScreenWidth}px) {
    .excerpt-text {
      position: static;
      -ms-transform: translateY(0%);
      transform: translateY(0%);
    }
  }
`

const PostPreview = props => {
  return (
    <PostPreviewWrapper>
      <h2 dangerouslySetInnerHTML={{ __html: props.post.title }} />
      <PostStats post={props.post} />
      <div className="image-excerpt-container">
        <div className="excerpt-text">
          {`localFile` in props.post.featured_media ? (
            <div className="in-text-thumbnail-wrapper">
              <Img
                className="img-center"
                fluid={
                  props.post.featured_media.localFile.childImageSharp.fluid
                }
                alt="Search icon for no search found"
              />
            </div>
          ) : (
            <img
              className="in-text-thumbnail"
              src={props.post.featured_media.source_url}
              alt="Thumbnail"
            />
          )}
          <p>
            {props.post.excerpt.slice(3, props.post.excerpt.length - 5)}
            <span>
              {" "}
              <Link className="read-more" to={`/post/${props.post.slug}`}>
                Read More
              </Link>
            </span>
          </p>
        </div>
      </div>
    </PostPreviewWrapper>
  )
}

export default PostPreview
