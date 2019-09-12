import React from 'react'
import styled from "styled-components";
import { smallScreenWidth, smallScreenNavHeight,
         navMenuHeight, mainContentWidthPercent,
         initContentWidth, mediumScreenWidth, smallScreenSidePadding } from "../style/layoutStyle";

export const PageContentWrapper = styled.div`
  width: ${mainContentWidthPercent}%;
  margin-top: ${navMenuHeight}px;
  padding-right: ${smallScreenSidePadding}px;
  @media screen and (max-width: ${mediumScreenWidth}px) {
    width: 100%;
    overflow: hidden;
  }
  @media screen and (max-width: ${initContentWidth}px){
    padding: 0px ${smallScreenSidePadding}px !important;
  }
  @media screen and (max-width: ${smallScreenWidth}px){
    margin-top: ${smallScreenNavHeight}px;
  }
  figure>img{
    display: block !important;
    margin: 0 auto;
    width: auto;
    height: auto;
  }
  figure>figcaption{
    text-align: center;
  }
`

export default ({ pageContext }) => {
    return(
    <PageContentWrapper>
      <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
      <div dangerouslySetInnerHTML={{__html: pageContext.content }} />
    </PageContentWrapper>
    )
}