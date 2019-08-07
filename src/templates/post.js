import React from 'react'
import { PageContentWrapper } from './page';

export default ({pageContext}) =>(
    <PageContentWrapper>
        <h1>
            {pageContext.title}
        </h1>
    </PageContentWrapper>
)