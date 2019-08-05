import React from 'react'
import styled from "styled-components";
import { mainContentWidthPercent } from "../style/layoutStyle";

const PageContentWrapper = styled.div`
  width: ${mainContentWidthPercent}%;
  padding-right: 10px;
`

export default ({ pageContext }) =>(
    <PageContentWrapper>
      <h2 dangerouslySetInnerHTML={{__html: pageContext.title}} />
      <div dangerouslySetInnerHTML={{__html: pageContext.content }} />
    </PageContentWrapper>
)