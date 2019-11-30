import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { mainColour, secondaryColour } from "../../style/themeStyle"

const PaginationStyles = styled.div`
  .pagination-button {
    padding: 10px;
  }
  .button-inactive {
    background-color: ${secondaryColour};
    color: ${mainColour};
  }
  .pagination-button:hover {
    background-color: ${mainColour};
    color: ${secondaryColour};
    text-decoration: none;
  }
  .button-active {
    color: ${secondaryColour};
    background-color: ${mainColour};
  }
`

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
    <PaginationStyles className="mt-2 mb-3">{pageButtons}</PaginationStyles>
  )
}
