import React from "react"
import styled from "styled-components"
import { Row } from "react-bootstrap"

import { smallScreenWidth } from "../../style/layoutStyle"
import { mainColour } from "../../style/themeStyle"
import Img from "gatsby-image/withIEPolyfill"
import { graphql, useStaticQuery } from "gatsby"

const SocialMediaLogoWrapper = styled.div`
  display: flex;
  padding: 5px 0;
  a {
    border-radius: 25px;
    height: 30px;
    width: 30px;
  }
  .logo {
    background-color: white;
    transition: ease 0.2s;
  }
  a:hover .logo {
    background-color: ${mainColour};
  }
  @media screen and (max-width: ${smallScreenWidth}px) {
    a {
      margin: 0px 20px 0px 0px;
    }
    left: 0px;
  }
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      linkinLogo: file(relativePath: { eq: "linkedin-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      youtubeLogo: file(relativePath: { eq: "youtube-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      githubLogo: file(relativePath: { eq: "github-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      twitterLogo: file(relativePath: { eq: "twitter-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rssLogo: file(relativePath: { eq: "rss-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <SocialMediaLogoWrapper>
      <Row className="ml-auto mr-auto">
        <a
          className="mr-4"

          href="https://www.linkedin.com/in/marc-philippe-beaujean-5ab27815a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img
            className="logo"
            fluid={data.linkinLogo.childImageSharp.fluid}
            alt="LinkedIn Logo"
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UCrGAw9i5HoaByeiQAV5FaLA?guided_help_flow=3"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <Img
            className="logo"
            fluid={data.youtubeLogo.childImageSharp.fluid}
            alt="LinkedIn Logo"
          />{" "}
        </a>
        <a
          href="https://github.com/marcphilippebeaujean-abertay"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <Img
            className="logo"
            fluid={data.githubLogo.childImageSharp.fluid}
            alt="LinkedIn Logo"
          />{" "}
        </a>
        <a
          href="https://twitter.com/MarcBeaujean"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <Img
            className="logo"
            fluid={data.twitterLogo.childImageSharp.fluid}
            alt="LinkedIn Logo"
          />{" "}
        </a>
        <a
          href="https://byteschool.io/blog/rss.xml"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img
            className="logo"
            fluid={data.rssLogo.childImageSharp.fluid}
            alt="RSS Feed Logo"
          />
        </a>
      </Row>
    </SocialMediaLogoWrapper>
  )
}
