import React from "react"
import { IoIosPricetag } from "react-icons/io"
import { useStaticQuery, graphql, Link } from "gatsby"

import SidebarCard from "./sidebarCard"
import { TagWrapper } from "../postComponent/postStats"

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        allWordpressTag(
          sort: { order: DESC, fields: wordpress_id }
          limit: 14
        ) {
          edges {
            next {
              name
            }
          }
        }
      }
    `
  )
  const tags = data.allWordpressTag.edges.filter(node => node.next !== null)
  return (
    <SidebarCard
      title={"Featured Tags"}
      icon={<IoIosPricetag size={32} className="mt-2" />}
    >
      <TagWrapper>
        {tags.map(tag =>
          tag.next === null ? null : (
            <span className="tag-wrapper" key={`tag_${tag.next.name}`}>
              <Link to={`/${tag.next.name.replace(/ /g, "-")}`}>
                {tag.next.name}
              </Link>
            </span>
          )
        )}
      </TagWrapper>
    </SidebarCard>
  )
}
