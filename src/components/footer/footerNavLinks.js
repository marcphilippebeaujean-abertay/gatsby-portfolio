import React from "react"
import { Link } from "gatsby"

const topicLinks = ["Docker", "Linux", "DevOps", "Design", "JavaScript"]

export default () => (
  <div className="d-flex flex-md-column flex-xs-row">
    {topicLinks.map(topic => (
      <div className="link-wrap" key={`${topic}-footer-nav-link`}>
        <Link
          className="footer-link"
          key={`${topic} footer link`}
          to={`/${topic.toLowerCase()}`}
        >
          {topic}
        </Link>
      </div>
    ))}
  </div>
)
