import React from "react"
import Img from "gatsby-image/withIEPolyfill"

import HoverCard from "../widgets/hoverCard"

export default ({
  projectTitle,
  projectDescription,
  projectLink,
  imageData,
}) => (
    <div className="post-preview-wrapper">
      <HoverCard className="mb-2">
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          <div className="card-body">
            <h5 className="mt-0 card-title">
              {projectTitle}
            </h5>
            <div className="image-excerpt-container">
              <div className="in-text-thumbnail-wrapper thumbnail">
                <Img
                  className="container-img"
                  fluid={imageData}
                  alt="Search icon for no search found"
                />
              </div>
              <p className="excerpt-text">{projectDescription}</p>
            </div>
          </div>
        </a>
      </HoverCard>
    </div>
  )
