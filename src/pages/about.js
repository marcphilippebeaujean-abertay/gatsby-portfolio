import React from "react"
import { PageContentWrapper } from "../style/pageStyleComponent"
import { smallScreenWidth } from "../style/layoutStyle"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"

import Img from "gatsby-image/withIEPolyfill"
import SoftwareDevLogo from "../images/software-dev-icon.png"
import styled from "styled-components"

const FigureStylesWrapper = styled.div`
  .image-row-block {
    display: flex;
    margin: 0 auto;
  }
  .image-block img {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
  .image-block figcaption {
    display: none;
  }
  .caption-block > div {
    width: 25%;
    text-align: center;
  }
  @media screen and (min-width: ${smallScreenWidth}px) {
    .image-block > figure {
      margin: 0 30px;
    }
  }
  @media screen and (max-width: ${smallScreenWidth}px) {
    .image-block figcaption {
      display: inherit;
    }
    .image-block img {
      position: relative !important;
      top: 50%;
      transform: translateY(-50%) !important;
      height: auto;
      width: 200px;
    }
    .image-row-block > figure {
      height: 150px;
    }
    .image-row-block {
      flex-direction: column;
    }
    .caption-block {
      display: none;
    }
  }
`

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
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      academyPhoto: file(relativePath: { eq: "academy.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <PageContentWrapper>
      <SEO
        title={"About"}
        description={
          "Hi! My name is Marc Philippe Beaujean and I'm a software developer from Germany."
        }
      />
      <h1>About</h1>
      <h2>About the Author</h2>
      <p>
        Hi! My name is Marc Philippe Beaujean and I'm a software developer from
        Germany. I started developing a passion for programming when I was
        creating my own games at the age of 17. I finished school and traveled
        to Scotland to pursue my bachelors degree in Game Development. I
        graduated from Abertay University with a first class honours degree and
        was also fortunate enough to be awarded with the John Wilson award for
        academic excellence.
      </p>
      <GatsbyImgWrapper maxWidth={`300px`}>
        <Img
          fluid={data.gradPhoto.childImageSharp.fluid}
          alt="Graduation photo from Abertay University"
          className="wp-image-186"
        />
      </GatsbyImgWrapper>

      <figcaption>Graduation in-front of Caird Hall, Dundee</figcaption>
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
        <figcaption>AcademicWork software development class of 2019</figcaption>
      </GatsbyImgWrapper>
      <h2>About the Blog</h2>
      <p>
        <strong>&lt;JustDoIT /&gt;</strong> is a passion project that originated
        from my desire to learn new technologies and best practices in software
        development. The website was written from scratch using the GatsbyJS
        framework. With this blog, I hope to share insights that I have gained
        from my personal experience and research. While I hope to cover a wide
        range of topics, you can find a quick overview here:
      </p>
      <FigureStylesWrapper>
        <div className="image-block image-row-block">
          <figure className="wp-block-image">
            <img src={SoftwareDevLogo} alt="jdit icon" />
          </figure>
          <figcaption>Software Development</figcaption>
          <figure className="wp-block-image">
            <img
              src="https://wp.jdit.eu/wp-content/uploads/2019/09/handshake-icon-1024x784.png"
              alt="handshake icon"
              className="wp-image-213"
            />
          </figure>
          <figcaption>Softskills</figcaption>
          <figure className="wp-block-image">
            <img
              src="https://wp.jdit.eu/wp-content/uploads/2019/09/dev-ops-1-1024x724.png"
              alt="dev ops icon"
              className="wp-image-2090"
            />
          </figure>
          <figcaption>Developer Operations</figcaption>
          <figure className="wp-block-image">
            <img
              src="https://wp.jdit.eu/wp-content/uploads/2019/09/game-development-5.png"
              alt="game dev icon"
              className="wp-image-233"
            />
          </figure>
          <figcaption>Game Development</figcaption>
        </div>
        <div className="caption-block image-row-block">
          <div>
            <figcaption>Software Development</figcaption>
          </div>
          <div>
            <figcaption>Softskills</figcaption>
          </div>
          <div>
            <figcaption>Developer Operations</figcaption>
          </div>
          <div>
            <figcaption>Game Development</figcaption>
          </div>
        </div>
      </FigureStylesWrapper>
      <p>
        Thanks for taking the time to read my blog! I hope you learn something
        and enjoy your stay. If you want to receive continual updates on new
        content and exclusive insights, be sure to subscribe to the newsletter
        and follow me on social media.{" "}
      </p>
    </PageContentWrapper>
  )
}
