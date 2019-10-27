import React from "react"
import styled from "styled-components"
import { IoIosCalendar, IoIosPricetag } from "react-icons/io"
import { FaComment } from "react-icons/fa"
import { CommentCount } from "gatsby-plugin-disqus"
import { Link } from "gatsby"
import { smallScreenWidth } from "../style/layoutStyle"

const disqusConfig = postId => {
  return {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: `${postId}` },
  }
}

const PostStatsStyle = styled.div`
  a {
    text-decoration: none;
    position: relative;
    padding: 10px 0px;
  }
  .post-info-row {
    margin: 5px 0 !important;
  }
  .post-info-text {
    position: relative;
    top: 3px;
    margin: 5px 15px;
  }
  @media screen and (min-width: ${smallScreenWidth}px) {
    br {
      display: none;
    }
  }
`

export const TagWrapper = styled.span`
  position: relative;
  margin: 5px 15px;
  a {
    text-decoration: none !important;
    color: darkblue;
    background-color: lightblue;
    padding: 3px;
    margin-right: 5px;
    border-radius: 5px;
    text-align: center;
  }
  .tag-wrapper {
    display: inline-block;
    margin: 10px 0px;
  }
  a:hover {
    background-color: darkblue;
    color: white;
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
        <TagWrapper>
          {post.tags.map(tag => (
            <span className="tag-wrapper" key={`tag_${tag.name}`}>
              <Link to={`/${tag.name.replace(/ /g, "-")}`}>{tag.name}</Link>
            </span>
          ))}
        </TagWrapper>
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
