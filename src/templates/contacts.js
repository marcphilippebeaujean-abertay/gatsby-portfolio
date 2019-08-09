import React from 'react'
import { PageContentWrapper } from './page';


export default ({ pageContext }) => {
    return(
      <PageContentWrapper>
        <h2 dangerouslySetInnerHTML={{__html: pageContext.title}} />
      </PageContentWrapper>)
}