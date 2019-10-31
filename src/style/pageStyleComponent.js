import styled from "styled-components"
import React from "react"
import {
  smallScreenWidth,
  smallScreenNavHeight,
  navMenuHeight,
} from "./layoutStyle"
import { Container } from "react-bootstrap"

export const PageContentWrapper = ({ children }) => {
  return (
    <PageContentWrapperStyle>
      <Container>{children}</Container>
    </PageContentWrapperStyle>
  )
}

const PageContentWrapperStyle = styled.div`
  /***** Content Layout *****/
  figure {
    display: inline-block;
    position: relative;
    width: 100%;
    margin: 0;
  }
  figure > img {
    display: block !important;
    margin: 0 auto;
    max-width: 100%;
    height: auto;
  }
  figcaption {
    text-align: center;
    margin: 0 auto;
  }
  background-color: white;
  margin-top: ${navMenuHeight + 10}px;
  @media screen and (min-width: ${smallScreenWidth}px) {
    border-radius: 5px;
  }
  @media screen and (max-width: ${smallScreenWidth}px) {
    margin-top: ${smallScreenNavHeight}px;
    margin-bottom: 10px;
  }
`
