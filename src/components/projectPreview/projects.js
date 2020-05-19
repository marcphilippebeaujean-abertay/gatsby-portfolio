import React from "react"
import { graphql, useStaticQuery } from "gatsby"

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
      moonlightGameDevs: file(
        relativePath: { eq: "icon_mgd.png" }
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
    <React.Fragment>
      <div className="row">
        <div className="pr-md-1 pr-3 pl-3 col-md-6">
          <ProjectPreview
            projectTitle={"CastSpot [Alpha]"}
            projectDescription={
              "Platform that helps Podcasters grow their Audience and Network by featuring on each other's Shows."
            }
            projectLink={"https://castspot.io"}
            imageData={data.castspotIcon.childImageSharp.fluid}
          />
        </div >
        <div className="pl-md-1 pr-3 pl-3 col-md-6">
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
        </div>
        <div className="pr-md-1 pr-3 pl-3 col-md-6">
          <ProjectPreview
            projectTitle={"Moonlight Game Devs"}
            projectDescription={
              "Podcast and Articles on Game Development. Helping aspiring games founders succeed!"
            }
            projectLink={
              "https://moonlightgamedevs.com"
            }
            imageData={data.moonlightGameDevs.childImageSharp.fluid} />
        </div>
        <div className="pl-md-1 pr-3 pl-3 col-md-6">
        </div>
      </div>
    </React.Fragment>
  )
}
