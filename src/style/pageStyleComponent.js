import React from "react"
import styled from "styled-components"
import {
  smallScreenWidth,
  smallScreenNavHeight,
  navMenuHeight,
  mainContentWidthPercent,
  initContentWidth,
  mediumScreenWidth,
  smallScreenSidePadding,
} from "./layoutStyle"

export const PageContentWrapper = ({ children }) => (
  <PageLayoutWrapper>
    <FigureStylesWrapper>{children}</FigureStylesWrapper>
  </PageLayoutWrapper>
)

const PageLayoutWrapper = styled.div`
  /***** Content Layout *****/
  width: ${mainContentWidthPercent}%;
  margin-top: ${navMenuHeight}px;
  padding-right: ${smallScreenSidePadding}px;
  @media screen and (max-width: ${mediumScreenWidth}px) {
    width: 100%;
    overflow: hidden;
  }
  @media screen and (max-width: ${initContentWidth}px) {
    padding: 0px ${smallScreenSidePadding}px !important;
  }
  @media screen and (max-width: ${smallScreenWidth}px) {
    margin-top: ${smallScreenNavHeight}px;
  }
`

const FigureStylesWrapper = styled.div`
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
    width: 33%;
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
