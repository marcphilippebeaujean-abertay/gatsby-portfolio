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
    bottom: 8.5px;
    line-height: 10px;
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
  bottom: 8.5px;
  line-height: 10px;
  margin: 5px 15px;
  a {
    text-decoration: none !important;
  }
  .tag {
    color: darkblue;
    background-color: lightblue;
    border-radius: 5px;
    margin-right: 5px;
    padding: 3px;
  }
  .tag-wrapper {
    display: inline-block;
    margin: 10px 0px;
  }
  .tag:hover {
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
              <Link to={`/${tag.name.replace(/ /g, "-")}`}>
                <span className="tag">{tag.name}</span>
              </Link>
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
