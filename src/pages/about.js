import React from "react"
import { PageContentWrapper } from "../style/pageStyleComponent"
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
        academic excellence. During this time, I gathered several productivity
        routines and techniques that helped me boost my academic performance.
      </p>
      <GatsbyImgWrapper maxWidth={`300px`}>
        <Img
          fluid={data.gradPhoto.childImageSharp.fluid}
          alt="Two young men are standing in front of a large hall. One (the author) is wearing a graduation gown."
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
          alt="A group photo of the software development class for academic work."
          className="wp-image-186"
        />
        <figcaption className="font-italic">
          AcademicWork software development class of 2019
        </figcaption>
      </GatsbyImgWrapper>
      <h2>About the Blog</h2>
      <p className="mb-2">
        <strong>&lt;ByteSchool /&gt;</strong> is a passion project that
        originated from my desire to learn new technologies and best practices
        in software development. It also encompasses my thoughts on productivity
        and healthy technology use. In many ways, this blog contains content
        regarding several areas of focus that I believe have shaped my life
        significantly over the past years (and presumably many years to come). I
        find that they can be broken down into the following categories:
      </p>
      <Row>
        <Col md={6} className="d-flex flex-column justify-content-center">
          <GatsbyImgWrapper maxWidth={`300px`}>
            <Img
              fluid={principleImages[1].node.childImageSharp.fluid}
              className="wp-image-186"
              alt="Icons for programming, linux, databases and office skills."
            />
          </GatsbyImgWrapper>
        </Col>
        <Col className="d-flex flex-column justify-content-center">
          <h3>Skills</h3>
          <p className="text-muted">
            I hope to share practical advice and tutorials on some of the most
            important and relevant skills on today's (and the future) job
            market.
          </p>
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <Col
          md={6}
          className="d-md-none d-flex flex-column justify-content-center"
        >
          <GatsbyImgWrapper maxWidth={`300px`}>
            <Img
              fluid={principleImages[0].node.childImageSharp.fluid}
              className="wp-image-186"
              alt="A calendar, a todo list and a chart showing a positive increment."
            />
          </GatsbyImgWrapper>
        </Col>
        <Col className="d-flex flex-column justify-content-center">
          <h3>Productivity</h3>
          <p className="text-muted">
            This blog will feature practical methods to help you increase your
            productivity and manage your time.
          </p>
        </Col>
        <Col className="d-none d-md-flex flex-column justify-content-center">
          <GatsbyImgWrapper maxWidth={`300px`}>
            <Img
              fluid={principleImages[0].node.childImageSharp.fluid}
              className="wp-image-186"
              alt="A pillow, dumbell and salad"
            />
          </GatsbyImgWrapper>
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <Col md={6} className="d-flex flex-column justify-content-center">
          <GatsbyImgWrapper maxWidth={`300px`}>
            <Img
              fluid={principleImages[2].node.childImageSharp.fluid}
              className="wp-image-186"
            />
          </GatsbyImgWrapper>
        </Col>
        <Col>
          <h3>Well-Being</h3>
          <p className="text-muted">
            This blog will feature habits and routines to help you focus on your
            goals and boost your determination.
          </p>
        </Col>
      </Row>
      <p className="mb-2">
        Thanks for taking the time to read my blog! I hope you learn something
        and enjoy your stay. If you want to receive continual updates on new
        content and exclusive insights, be sure to subscribe to the newsletter
        and follow me on social media.
      </p>
    </PageContentWrapper>
  )
}
