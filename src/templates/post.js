import React from 'react'
import { PageContentWrapper } from './page';
import { Comments } from 'react-facebook';

export default ({pageContext}) =>(
    <PageContentWrapper>
        <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
        <Comments data-href={`https://www.jdit.eu/post/${pageContext.slug}`} data-width="100%" data-numposts="10" />
    </PageContentWrapper>
)