import React from 'react'
import styled from "styled-components";
import { mainContentWidthPercent, contentWidth, smallScreenWidth } from "../style/layoutStyle";

const PageContentWrapper = styled.div`
  width: ${mainContentWidthPercent}%;
  padding-right: 10px;
  @media screen and (max-width: ${smallScreenWidth}px) {
        width: 100%;
  }
  @media screen and (max-width: ${contentWidth}px){
        padding: 0px 10px !important;
  }
`

export default ({ pageContext }) =>(
    <PageContentWrapper>
      <h2 dangerouslySetInnerHTML={{__html: pageContext.title}} />
      <div dangerouslySetInnerHTML={{__html: pageContext.content }} />
    </PageContentWrapper>
)