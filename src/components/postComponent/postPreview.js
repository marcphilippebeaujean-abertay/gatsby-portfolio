import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

import PostStats from "./postStats"
import HoverCard from "../widgets/hoverCard";

export const PostPreview = ({ post, showStats }) => {
  return (
    <div className="post-preview-wrapper">
      <HoverCard className="mb-2">
        <Link to={`/post/${post.slug}`}>
          <div className="card-body">
            <h5

              className="mt-0 card-title"
              dangerouslySetInnerHTML={{ __html: post.title }}
            />
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
          </div>
        </Link>
      </HoverCard>
    </div>
  )
}

export default PostPreview