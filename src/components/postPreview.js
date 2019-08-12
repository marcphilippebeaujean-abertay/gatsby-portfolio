import React from 'react';
import styled from "styled-components";
import { Link } from 'gatsby';
import { smallScreenWidth, smallScreenSidePadding } from '../style/layoutStyle';

const excerptHeight = `200px`;

const PostPreviewWrapper = styled.div`
    display: flex;
    flex-direction: column;
    .date{
        font-style: italic;
        margin: 5px 0 !important;
    }
    .image-excerpt-container{
        display: flex;
        flex-direction: row;
        max-height: ${excerptHeight};
        flex-grow: 1;
        position: relative;
    }
    .thumbnail{
        margin-right: ${smallScreenSidePadding}px;
        width: 200px;
        height: auto;
    }
    p{
        margin: 0;
    }
    h2{
        margin-bottom: 0;
    }
    .excerpt-text{
        margin: 0;
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }
    @media screen and (max-width: ${smallScreenWidth}px){
        .thumbnail{
            display: none;
        }
        .excerpt-text{
            position: static;
            -ms-transform: translateY(0%);
            transform: translateY(0%);
        }
    }
`

const PostPreview = props => {
    return (
        <PostPreviewWrapper>
            <h2 dangerouslySetInnerHTML={{__html: props.post.title}} />
            <p className='date'>Published on {props.post.date.slice(1)}</p>
            <div className='image-excerpt-container'>
                <img className="thumbnail" src={props.post.featured_media.source_url} alt="Thumbnail" />
                <div>
                    <div className="excerpt-text">
                        <p>{props.post.excerpt.slice(3, props.post.excerpt.length - 5)}
                        <span> <Link to={`/post/${props.post.slug}`}>Read More</Link></span>
                        </p>
                    </div>
                </div>
            </div>
        </PostPreviewWrapper>
    )
}

export default PostPreview;