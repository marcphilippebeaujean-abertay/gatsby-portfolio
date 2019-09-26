import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { smallScreenWidth, smallScreenSidePadding } from "../style/layoutStyle"
import PostStats from "./postStats"

const excerptHeight = `200px`

const PostPreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .image-excerpt-container {
    display: flex;
    flex-direction: row;
    max-height: ${excerptHeight};
    flex-grow: 1;
    position: relative;
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

  .in-text-thumbnail {
    display: inherit;
    float: left;
    width: 200px;
    height: auto;
  }
  @media screen and (max-width: ${smallScreenWidth}px) {
    .in-text-thumbnail {
      width: 100px;
    }
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
        <div>
          <div className="excerpt-text">
            <img
              className="in-text-thumbnail"
              src={props.post.featured_media.source_url}
              alt="Thumbnail"
            />
            <p>
              {props.post.excerpt.slice(3, props.post.excerpt.length - 5)}
              <span>
                {" "}
                <Link to={`/post/${props.post.slug}`}>Read More</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </PostPreviewWrapper>
  )
}

export default PostPreview
