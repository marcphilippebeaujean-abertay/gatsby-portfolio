import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Row, Col } from "react-bootstrap"

import ProjectPreview from "./projectPreview"

export default () => {
  const data = useStaticQuery(graphql`
    {
      castspotIcon: file(relativePath: { eq: "castspot_icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      djangoReactCookiecutter: file(
        relativePath: { eq: "cookie-cutter-logo.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Row>
      <Col md={6} className="pr-md-1 pr-3 pl-3">
        <ProjectPreview
          projectTitle={"CastSpot [Alpha]"}
          projectDescription={
            "Platform that helps Podcasters grow their Audience and Network by featuring on each other's Shows."
          }
          projectLink={"https://castspot.io"}
          imageData={data.castspotIcon.childImageSharp.fluid}
        />
      </Col>
      <Col md={6} className="pl-md-1 pr-3 pl-3">
        <ProjectPreview
          projectTitle={"Django + React Cookiecutter"}
          projectDescription={
            "Kickstart your next Web App with this starter Project. Includes automated deployment to Heroku."
          }
          projectLink={
            "https://github.com/marcphilippebeaujean-abertay/django-react-cookiecutter"
          }
          imageData={data.djangoReactCookiecutter.childImageSharp.fluid}
        />
      </Col>
    </Row>
  )
}
