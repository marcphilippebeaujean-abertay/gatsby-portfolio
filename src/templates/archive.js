import React, {useState} from 'react'
import styled from 'styled-components';
import { PageContentWrapper } from './page';
import { IoIosSearch } from "react-icons/io";
import PostPreview from '../components/postPreview';

const SearchBar = styled.form`
    width: 100%;
    display: flex;
    #search-btn{
        height: 39px;
        width: 50px;
    }
    .input-field{
        width: 100%;
        padding: 10px 0px;
        margin-bottom: 20px;
        font-size: 16px;
        border-style:solid;
        border-width: 0.5px;
        border-color: lightgrey;
        border-radius: 5px 0px 0px 5px;
    }
    .input-field:hover{
        border-color: lightblue;
        border-style: solid;
        box-shadow: 0px;
    }
`

const SearchResultWrapper = styled.div`
    .post-preview-hider{
        display: none !important;
    }
`

export default ({ pageContext }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [foundPost, setFoundPost] = useState([]);
    const searchForPost = e => {
        e.preventDefault();
        console.log(`searching for blogs with term...${searchTerm}`);
        // TODO: dangerous!
        fetch(`http://localhost:9000/wp-json/wp/v2/blogpost?search=${searchTerm}`)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            const postList = result.reduce((accumulator, queriedPost) => {
                accumulator.push({
                    featured_media: {
                        source_url: queriedPost.better_featured_image.source_url
                    },
                    title: queriedPost.title.rendered,
                    excerpt: queriedPost.excerpt.rendered,
                    date: "change the date!"
                    })
                return accumulator;
                }, []);
            console.log(postList);
            setFoundPost(postList);
        })
        .catch(e => console.error(e))
    }
    const handleInputChange = e => setSearchTerm(e.target.value);
    return (
    <PageContentWrapper>
        <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
        <SearchBar onSubmit={searchForPost}>
            <input className="input-field"
                   id="search-bar"
                   type="text"
                   name="search-bar"
                   value={searchTerm}
                   onChange={handleInputChange}
                   placeholder="Search" />
            <button id="search-btn"><IoIosSearch /></button>
        </SearchBar>
        <SearchResultWrapper>
            {
                foundPost.map(post => <PostPreview post={post} key={post.title}/>)
            }
        </SearchResultWrapper>
    </PageContentWrapper>)
}