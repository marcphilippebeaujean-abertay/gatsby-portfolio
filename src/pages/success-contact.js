import React from "react"
import SEO from "../components/seo"
import { PageContentWrapper } from "../style/pageStyleComponent"
import Img from "gatsby-image/withIEPolyfill"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const ImageContainer = styled.div`
  width: 300px;
  height: auto;
  margin: 0 auto;
`

const MessageWrapper = styled.div`
  h2 {
    text-align: center;
    color: darkgreen;
  }
`

export default ({ pageContext }) => {
  const data = useStaticQuery(graphql`
    query {
      letterPic: file(relativePath: { eq: "letter.png" }) {
        childImageSharp {
          fluid(maxWidth: 741) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <PageContentWrapper>
      <SEO title="Success" description="Your message was sent successfully!" />
      <h1>Success</h1>
      <hr></hr>
      <MessageWrapper>
        <ImageContainer>
          <Img
            fluid={data.letterPic.childImageSharp.fluid}
            alt="Letter picture!"
          />
        </ImageContainer>
        <h2>
          Your message has been submitted! I will get back to you as soon as
          possible.
        </h2>
      </MessageWrapper>
    </PageContentWrapper>
  )
}
