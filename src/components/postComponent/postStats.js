import React from "react"
import { IoIosCalendar, IoIosPricetag } from "react-icons/io"
import { FaComment } from "react-icons/fa"
import { CommentCount } from "gatsby-plugin-disqus"
import { Link } from "gatsby"

const disqusConfig = postId => {
  return {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: `${postId}` },
  }
}

export default ({ post }) => {
  return (
    <div className="post-stats">
      <div className="post-info-row">
        <IoIosCalendar size={32} className="post-attribute" />
        <span className="post-info-text text-mute ml-2 mr-2">{post.date}</span>
        <br />
        <IoIosPricetag size={32} className="post-attribute-icon" />
        <span className="ml-2 mr-2 post-tag-wrapper">
          {post.tags.map(tag => (
            <span
              className="tag-wrapper tag-adjustment"
              key={`tag_${tag.name}`}
            >
              <Link to={`/${tag.name.replace(/ /g, "-")}`}>{tag.name}</Link>
            </span>
          ))}
        </span>
        <br />
        <FaComment size={32} className="post-attribute-icon" />
        <span className="post-info-text text-mute ml-2">
          <CommentCount
            {...disqusConfig(post.wordpress_id)}
            placeholder={`...`}
          />
        </span>
      </div>
    </div>
  )
}
