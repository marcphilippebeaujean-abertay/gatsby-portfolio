import React, {useEffect} from 'react';
import Prism from "prismjs";
import "../style/prism.css";
import { PageContentWrapper } from './page';
import { DiscussionEmbed } from 'disqus-react'



export default ({pageContext}) =>{
    const disqusConfig = {
        shortname: process.env.GATSBY_DISQUS_NAME,
        config: { identifier: pageContext.title },
    }
    useEffect(() => Prism.highlightAll());
    return (
    <PageContentWrapper>
        <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
        <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
        <DiscussionEmbed { ...disqusConfig} />
    </PageContentWrapper>)
}