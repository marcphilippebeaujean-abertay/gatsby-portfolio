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

export const PageContentWrapper = styled.div`
  /***** Content Layout *****/
  width: ${mainContentWidthPercent}%;
  margin-top: ${navMenuHeight}px;
  padding-right: ${smallScreenSidePadding}px;
  figure > img {
    display: block !important;
    margin: 0 auto;
    max-width: 100%;
    height: auto;
  }
  figure > figcaption {
    text-align: center;
  }
  /***** Forms *****/

  /***** WordPress Styles *****/
  .image-row-block {
    display: flex;
    margin: 0 auto;
  }
  .image-row-block > figure {
    margin: 0px 30px;
  }
  .wp-block-image figcaption {
    display: none;
  }
  .caption-block > div {
    width: 33%;
    text-align: center;
  }
  @media screen and (max-width: ${mediumScreenWidth}px) {
    width: 100%;
    overflow: hidden;
  }
  @media screen and (max-width: ${initContentWidth}px) {
    padding: 0px ${smallScreenSidePadding}px !important;
  }
  @media screen and (max-width: ${smallScreenWidth}px) {
    margin-top: ${smallScreenNavHeight}px;
    .wp-block-image figcaption {
      display: inherit;
    }
    .image-row-block .wp-block-image {
      width: 200px;
      margin: 0 auto;
    }
    .image-row-block {
      flex-direction: column;
    }
    .image-row-block > figure {
      margin: 0px;
    }
    .caption-block {
      display: none;
    }
  }
`
