import React from "react"

import { IoIosMicrophone } from "react-icons/io"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import styled from "styled-components"

import SidebarCard from "./sidebarCard"

const LinksContainer = styled.div`
  max-width: 200px;
  margin: 0 auto;
  width: 100%;
`

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        spotifyLogo: file(relativePath: { eq: "spotify-logo-beitrag.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        rssLogo: file(relativePath: { eq: "rss-feed.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        applePodcast: file(relativePath: { eq: "apple-podcast-logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return (
    <SidebarCard title={"Podcast"} icon={<IoIosMicrophone size={32} />}>
      <LinksContainer>
        <a
          href="https://open.spotify.com/show/5KxuV0VPpcMKVvBrSs4tnU"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img
            className="logo"
            fluid={data.spotifyLogo.childImageSharp.fluid}
            alt="Spotify Logo"
          />
        </a>
        <a
          href="https://feed.podbean.com/juniordevcast/feed.xml"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2"
        >
          <Img
            className="logo"
            fluid={data.rssLogo.childImageSharp.fluid}
            alt="RSS Feed Logo with a 'Subscribe' text"
          />
        </a>
        <a
          href="https://podcasts.apple.com/de/podcast/the-junior-developer-podcast/id1489865810?fbclid=IwAR0Htl1U1GcMhNKKKKBMusEiIrI_CEg2SRoJHphAF1rhiqb5px3cWlOhGaY"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img
            className="logo"
            fluid={data.applePodcast.childImageSharp.fluid}
            alt="Apple Podcast Logo"
          />
        </a>
      </LinksContainer>
    </SidebarCard>
  )
}
