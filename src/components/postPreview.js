import React from 'react';
import { Link } from 'gatsby';
import styled from "styled-components";

const PostPreviewWrapper = styled.div`
    .date{
        font-style: italic;
        margin-top: 0;
    }
`

const PostPreview = props => {
    return (
        <PostPreviewWrapper>
            <h2 dangerouslySetInnerHTML={{__html: props.post.title}} />
            <p className='date' dangerouslySetInnerHTML={{__html: props.post.date.slice(1)}} />
            <div dangerouslySetInnerHTML={{__html: props.post.excerpt}} />
            <Link to={`/post/${props.post.slug}`}>Read more</Link>
        </PostPreviewWrapper>
    )
}

export default PostPreview;