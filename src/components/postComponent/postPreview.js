import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Card } from "react-bootstrap"
import Img from "gatsby-image/withIEPolyfill"

import HoverCard from "../../style/widgetStyles/hoverCard"
import PostStats from "./postStats"
import {
  smallScreenWidth,
  smallScreenSidePadding,
} from "../../style/layoutStyle"

const PostPreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .image-excerpt-container {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    position: relative;
  }
  .thumbnail {
    margin-right: ${smallScreenSidePadding}px;
  }
  p {
    margin: 0;
  }
  h2 {
    margin: 0px !important;
  }
  .excerpt-text {
    width: 100%;
  }
  .in-text-thumbnail-wrapper {
    display: block;
    position: relative;
    top: 8px;
    float: left;
    width: 100px !important;
  }
  .in-text-thumbnail {
    height: auto;
    max-width: 100%;
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

const PostPreview = ({ post, showStats }) => {
  return (
    <PostPreviewWrapper>
      <HoverCard className="mb-2">
        <Link to={`/post/${post.slug}`}>
          <Card.Header
            as="h5"
            className="mt-0"
            dangerouslySetInnerHTML={{ __html: post.title }}
          />
          <Card.Body>
            {showStats === true ? <PostStats post={post} /> : null}
            <div className="image-excerpt-container">
              {`localFile` in post.featured_media ? (
                <div className="in-text-thumbnail-wrapper thumbnail">
                  <Img
                    className="container-img"
                    fluid={post.featured_media.localFile.childImageSharp.fluid}
                    alt="Search icon for no search found"
                  />
                </div>
              ) : (
                <div className="in-text-thumbnail-wrapper thumbnail">
                  <img
                    className="in-text-thumbnail thumbnail"
                    src={post.featured_media.source_url}
                    alt="Thumbnail"
                  />
                </div>
              )}
              <div
                className="excerpt-text"
                dangerouslySetInnerHTML={{ __html: post.excerpt }}
              />
            </div>
          </Card.Body>
        </Link>
      </HoverCard>
    </PostPreviewWrapper>
  )
}

export default PostPreview
