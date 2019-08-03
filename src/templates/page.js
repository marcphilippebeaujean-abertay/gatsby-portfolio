import React from 'react'
import Layout from '../components/layout';
import NavMenu from '../components/navMenu';

export default ({pageContext}) =>(
    <div>
        <Layout>
            <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
            <div dangerouslySetInnerHTML={{__html: pageContext.content }} />
        </Layout>
    </div>
)