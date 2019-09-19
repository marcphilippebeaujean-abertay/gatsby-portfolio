import React from "react"
import styled from "styled-components"
import { IoIosCalendar, IoIosPricetag } from "react-icons/io"
import { FaComment } from "react-icons/fa"
import { CommentCount } from "gatsby-plugin-disqus"
import { smallScreenWidth } from "../style/layoutStyle"

const disqusConfig = postId => {
  return {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: `${postId}` },
  }
}

const PostStatsStyle = styled.div`
  .tag {
    color: darkblue;
    background-color: lightblue;
    border-radius: 5px;
    margin-right: 5px;
    padding: 5px;
  }
  .post-info-row {
    margin: 5px 0 !important;
  }
  .post-info-text {
    position: relative;
    bottom: 8.5px;
    margin: 0px 10px;
  }
  @media screen and (min-width: ${smallScreenWidth}px) {
    br {
      display: none;
    }
  }
`

export default ({ post }) => {
  return (
    <PostStatsStyle>
      <div className="post-info-row">
        <IoIosCalendar size={32} className="post-attribute" />
        <span className="post-info-text">{post.date}</span>
        <br />
        <IoIosPricetag size={32} className="post-attribute-icon" />
        <span className="post-info-text">
          {post.tags.map(tag => (
            <span key={`tag_${tag.name}`} className="tag">
              {tag.name}
            </span>
          ))}
        </span>
        <br />
        <FaComment size={32} className="post-attribute-icon" />
        <span className="post-info-text">
          <CommentCount
            {...disqusConfig(post.wordpress_id)}
            placeholder={`...`}
          />
        </span>
      </div>
    </PostStatsStyle>
  )
}
