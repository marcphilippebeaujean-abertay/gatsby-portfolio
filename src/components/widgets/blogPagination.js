import React from "react"
import { Link } from "gatsby"

export default ({ numberOfPages, currentPageNum }) => {
  const pageButtons = []
  for (let index = 0; index < numberOfPages; index++) {
    pageButtons.push(
      <Link
        key={index}
        className={`pagination-button ${
          currentPageNum === index + 1 ? `button-active` : `button-inactive`
          }
        ${index === 0 ? "rounded-left" : ""}
        ${index === numberOfPages - 1 ? "rounded-right" : ""}`}
        to={`/blog/${index + 1}`}
      >
        {index + 1}
      </Link>
    )
  }
  return (
    <div className="paginator mt-2 mb-3">{pageButtons}</div>
  )
}
