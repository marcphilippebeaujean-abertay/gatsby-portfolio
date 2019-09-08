import React from 'react';
import styled from "styled-components";
import { Link } from 'gatsby';
import { smallScreenWidth, smallScreenSidePadding } from '../style/layoutStyle';
import { IoIosCalendar, IoIosPricetag } from 'react-icons/io';
import { FaComment } from "react-icons/fa";
import { CommentCount } from 'gatsby-plugin-disqus'


const excerptHeight = `200px`;

const PostPreviewWrapper = styled.div`
    display: flex;
    flex-direction: column;
    .post-info-row{
        margin: 5px 0 !important;
    }
    .post-info-text{
        position: relative;
        bottom: 8.5px;
        margin: 0px 10px;
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
    .tag{
        color: darkblue;
        background-color: lightblue;
        border-radius: 5px;
        margin-right: 5px;
        padding: 5px;
    }
    .in-text-thumbnail{
        display: none;
    }
    @media screen and (max-width: ${smallScreenWidth}px){
        .thumbnail{
            display: none;
        }
        .in-text-thumbnail{
            display: inherit;
            float: left;
            width: 100px;
            height: auto;
        }
        .excerpt-text{
            position: static;
            -ms-transform: translateY(0%);
            transform: translateY(0%);
        }
    }
    @media screen and (min-width: ${smallScreenWidth}px){
        br{
            display: none;
        }
    }
`

const disqusConfig = title => {
    return {
        shortname: process.env.GATSBY_DISQUS_NAME,
        config: { identifier: title },
    }
}

const PostPreview = props => {
    return (
        <PostPreviewWrapper>
            <h2 dangerouslySetInnerHTML={{__html: props.post.title}} />
            <div className='post-info-row'>
                <IoIosCalendar size={32} className="post-attribute" />
                <span className="post-info-text">
                    {props.post.date}
                </span>
                <br />
                <IoIosPricetag size={32} className="post-attribute-icon"/>
                <span className="post-info-text">{props.post.tags.map(tag => <span key={`tag_${tag.name}`} className="tag">{tag.name}</span>)}</span>
                <br />
                <FaComment size={32} className="post-attribute-icon"/>
                <span className="post-info-text">
                    <CommentCount {...disqusConfig(props.post.title)} placeholder={`...`} />
                </span>
            </div>
            <div className='image-excerpt-container'>
                <img className="thumbnail" src={props.post.featured_media.source_url} alt="Thumbnail" />
                <div>
                    <div className="excerpt-text">
                        <img className="in-text-thumbnail" src={props.post.featured_media.source_url} alt="Thumbnail" />
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