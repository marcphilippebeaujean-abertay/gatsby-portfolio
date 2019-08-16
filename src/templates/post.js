import React, {useEffect} from 'react';
import Prism from "prismjs";
import "../style/prism.css";
import { PageContentWrapper } from './page';
import { Comments } from 'react-facebook';

export default ({pageContext}) =>{
    useEffect(() => Prism.highlightAll());
    return (
    <PageContentWrapper>
        <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
        <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
        <Comments data-href={`https://www.jdit.eu/post/${pageContext.slug}`} data-numposts="10" />
    </PageContentWrapper>)
}