import React from 'react'
import styled from "styled-components";
import { mainContentWidthPercent, initContentWidth, mediumScreenWidth, smallScreenSidePadding } from "../style/layoutStyle";

export const PageContentWrapper = styled.div`
  width: ${mainContentWidthPercent}%;
  padding-right: ${smallScreenSidePadding}px;
  @media screen and (max-width: ${mediumScreenWidth}px) {
        width: 100%;
  }
  @media screen and (max-width: ${initContentWidth}px){
        padding: 0px ${smallScreenSidePadding}px !important;
  }
`

export default ({ pageContext }) =>(
    <PageContentWrapper>
      <h2 dangerouslySetInnerHTML={{__html: pageContext.title}} />
      <div dangerouslySetInnerHTML={{__html: pageContext.content }} />
    </PageContentWrapper>
)