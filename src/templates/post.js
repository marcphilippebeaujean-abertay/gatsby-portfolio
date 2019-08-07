import React from 'react'
import { PageContentWrapper } from './page';

export default ({pageContext}) =>(
    <PageContentWrapper>
        <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
    </PageContentWrapper>
)