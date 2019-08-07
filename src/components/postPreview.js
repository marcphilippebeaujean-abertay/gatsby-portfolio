import React from 'react';
import { Link } from 'gatsby';

const PostPreview = props => {
    return (
        <div>
            <h2 dangerouslySetInnerHTML={{__html: props.post.title}} />
            <p>{props.post.date}</p>
            <div dangerouslySetInnerHTML={{__html: props.post.excerpt}} />
            <Link to={`/post/${props.post.slug}`}>Read more</Link>
        </div>
    )
}

export default PostPreview;