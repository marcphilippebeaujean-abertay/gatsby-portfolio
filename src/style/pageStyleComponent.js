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
  width: ${mainContentWidthPercent}%;
  margin-top: ${navMenuHeight + 10}px;
  padding: 0 ${smallScreenSidePadding}px;
  @media screen and (min-width: ${mediumScreenWidth}px) {
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
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
    margin-bottom: 10px;
  }
`
