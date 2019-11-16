import React from "react"
import styled from "styled-components"
import { IoIosCalendar, IoIosPricetag } from "react-icons/io"
import { FaComment } from "react-icons/fa"
import { CommentCount } from "gatsby-plugin-disqus"
import { Link } from "gatsby"

import { smallScreenWidth } from "../../style/layoutStyle"
import { linkClickedColor, darkBlue, lightBlue } from "../../style/themeStyle"

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
  }
  .tag-adjustment {
    position: relative;
    top: 1.8px;
  }
  .post-info-row {
    margin: 5px 0 !important;
  }
  .post-info-text {
    position: relative;
    top: 3px;
  }
  @media screen and (min-width: ${smallScreenWidth}px) {
    br {
      display: none;
    }
  }
`

export const TagWrapper = styled.span`
  position: relative;
  margin: 0px 0px;
  a {
    text-decoration: none !important;
    color: ${darkBlue};
    background-color: ${lightBlue};
    padding: 3px;
    margin-right: 5px;
    border-radius: 5px;
    text-align: center;
  }
  .tag-wrapper {
    display: inline-block;
    margin: 0.25rem 0px;
  }
  a:hover {
    background-color: ${darkBlue};
    color: white;
  }
  a:visited {
    color: ${linkClickedColor};
  }
`

export default ({ post }) => {
  return (
    <PostStatsStyle>
      <div className="post-info-row">
        <IoIosCalendar size={32} className="post-attribute" />
        <span className="post-info-text text-mute ml-2 mr-2">{post.date}</span>
        <br />
        <IoIosPricetag size={32} className="post-attribute-icon" />
        <TagWrapper className="ml-2 mr-2">
          {post.tags.map(tag => (
            <span
              className="tag-wrapper tag-adjustment"
              key={`tag_${tag.name}`}
            >
              <Link to={`/${tag.name.replace(/ /g, "-")}`}>{tag.name}</Link>
            </span>
          ))}
        </TagWrapper>
        <br />
        <FaComment size={32} className="post-attribute-icon" />
        <span className="post-info-text text-mute ml-2">
          <CommentCount
            {...disqusConfig(post.wordpress_id)}
            placeholder={`...`}
          />
        </span>
      </div>
    </PostStatsStyle>
  )
}
