import React from "react"
import { PageContentWrapper } from "../style/pageStyleComponent"
import { smallScreenWidth } from "../style/layoutStyle"
import { graphql, useStaticQuery } from "gatsby"
import { Row, Col } from "react-bootstrap"
import SEO from "../components/seo"

import Img from "gatsby-image/withIEPolyfill"
import styled from "styled-components"

const GatsbyImgWrapper = styled.div`
  max-width: ${props => props.maxWidth};
  width: 100%;
  height: auto;
  margin: 0 auto;
`

export default ({ pageContext }) => {
  const data = useStaticQuery(graphql`
    {
      gradPhoto: file(relativePath: { eq: "graduation_photo_resized.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      academyPhoto: file(relativePath: { eq: "academy.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      allFile(filter: { relativeDirectory: { eq: "about_images" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 3000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const principleImages = data.allFile.edges
  console.log(data)
  return (
    <PageContentWrapper>
      <SEO
        title={"About"}
        description={
          "Hi! My name is Marc Philippe Beaujean and I'm a software developer from Germany."
        }
      />
      <h1>About</h1>
      <hr></hr>
      <h2>About the Author</h2>
      <p>
        Hi! My name is Marc Philippe Beaujean and I'm a software developer from
        Germany. I started developing a passion for programming when I was
        creating my own games at the age of 17. I finished school and traveled
        to Scotland to pursue my bachelors degree in Game Development. I
        graduated from Abertay University with a first class honours degree and
        was also fortunate enough to be awarded with the John Wilson award for
        academic excellence. It was here that I first discovered my love for
        reading and acquiring new knowledge. During this time, I gathered
        several productivity routines and techniques that helped me boost my
        academic performance.
      </p>
      <GatsbyImgWrapper maxWidth={`300px`}>
        <Img
          fluid={data.gradPhoto.childImageSharp.fluid}
          alt="Graduation photo from Abertay University"
          className="wp-image-186"
        />
      </GatsbyImgWrapper>
      <figcaption className="font-italic">
        Me (right) at Graduation in-front of Caird Hall, Dundee
      </figcaption>
      <p>
        Upon moving back to Germany, I realized that I had different ambitions
        than when I had began my studies. I decided to pursue a career in
        enterprise software development, by participating in the three month
        software development training program offered by AcademicWork. After
        graduating from the course, I began my career as a fullstack software
        developer, working for a consultancy called 7Principles.{" "}
      </p>
      <GatsbyImgWrapper maxWidth={`500px`}>
        <Img
          fluid={data.academyPhoto.childImageSharp.fluid}
          alt="Graduation photo from Abertay University"
          className="wp-image-186"
        />
        <figcaption className="font-italic">
          AcademicWork software development class of 2019
        </figcaption>
      </GatsbyImgWrapper>
      <h2>About the Blog</h2>
      <p>
        <strong>&lt;ByteSchool /&gt;</strong> is a passion project that
        originated from my desire to learn new technologies and best practices
        in software development. It also encompasses my thoughts on how an
        individual can be a user of technology, not a slave to it. With
        concentration and true relaxation becoming a rare commodity, my goal is
        to introduce the reader to practical ways that will help them improve
        their mental health, productivity and relationships. I hope to share
        insights that I have gained from my personal experience and research.
      </p>
      <Col>
        <GatsbyImgWrapper maxWidth={`300px`}>
          <Img
            fluid={principleImages[1].node.childImageSharp.fluid}
            className="wp-image-186"
          />
        </GatsbyImgWrapper>
        <figcaption>
          <b>Skills:</b>
          <span className="font-italic">
            {" "}
            I hope to share practical advice and tutorials on some of the most
            important and relevant skills on today's job market.
          </span>
        </figcaption>
      </Col>
      <Col>
        <GatsbyImgWrapper maxWidth={`300px`}>
          <Img
            fluid={principleImages[0].node.childImageSharp.fluid}
            className="wp-image-186"
          />
        </GatsbyImgWrapper>
        <figcaption>
          <b>Productivity:</b>
          <span className="font-italic">
            {" "}
            I am constantly trying to find new ways to increase my focus and
            reach my goals faster - I hope to share my successes and failures in
            that regard on this blog.
          </span>
        </figcaption>
      </Col>
      <Col>
        <GatsbyImgWrapper maxWidth={`300px`}>
          <Img
            fluid={principleImages[2].node.childImageSharp.fluid}
            className="wp-image-186"
          />
        </GatsbyImgWrapper>
        <figcaption>
          <b>Well-Being:</b>
          <span className="font-italic">
            {" "}
            I firmly believe that success is linked to mental and physical
            health - this is why I will be sharing some of the key habits that
            have helped me lead a healthier and more productive life.
          </span>
        </figcaption>
      </Col>
      <p>
        Thanks for taking the time to read my blog! I hope you learn something
        and enjoy your stay. If you want to receive continual updates on new
        content and exclusive insights, be sure to subscribe to the newsletter
        and follow me on social media.{" "}
      </p>
    </PageContentWrapper>
  )
}
