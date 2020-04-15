import React from "react"
import { Card } from "react-bootstrap"
import Img from "gatsby-image/withIEPolyfill"

import HoverCard from "../../style/widgetStyles/hoverCard"
import { PostPreviewWrapper } from "../postComponent/postPreview"

export default ({
  projectTitle,
  projectDescription,
  projectLink,
  imageData,
}) => (
  <PostPreviewWrapper>
    <HoverCard className="mb-2">
      <a href={projectLink} target="_blank" rel="noopener noreferrer">
        <Card.Body>
          <Card.Title as="h5" className="mt-0">
            {projectTitle}
          </Card.Title>
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
        </Card.Body>
      </a>
    </HoverCard>
  </PostPreviewWrapper>
)
