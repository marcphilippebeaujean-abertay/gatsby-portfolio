import React, {useState} from 'react'
import { PageContentWrapper } from './page';
import { IoIosSearch } from "react-icons/io";
import { mainColour } from "../style/themeStyle";
import { DateTime } from 'luxon';
import styled from 'styled-components';
import PostPreview from '../components/postPreview';
import SearchIcon from '../images/search-image.png';
import ClipLoader from 'react-spinners/ClipLoader';


const SearchBar = styled.form`
    width: 100%;
    display: flex;
    #search-btn{
        height: 39px;
        width: 50px;
        background-color: ${mainColour};
        border: 0;
        border-radius: 0px 5px 5px 0px;
    }
    #search-btn:hover{
        cursor: pointer;
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
    position: relative;
    .post-preview-hider{
        display: none !important;
    }
    #no-post-found-container{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    #search-icon{
        width: 200px;
        height: auto;
    }
    .hidden-results{
        display: none !important;
    }
`

const SpinnerWrapper = styled.div`
    display: block;
    margin: 0 auto;
    width: 150px;
`

export default ({ pageContext }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [foundPost, setFoundPost] = useState([]);
    const [searchPending, setSearchPending] = useState(false);
    const searchForPost = e => {
        e.preventDefault();
        if(searchTerm.length === 0) return;
        const searchResultsDiv = document.getElementById(`results-container`);
        searchResultsDiv.classList.add(`hidden-results`);
        setSearchPending(true);
        fetch(`${process.env.GATSBY_API_PROTOCOL}://${process.env.GATSBY_API_URL}/wp-json/wp/v2/blogpost?search=${searchTerm}`)
        .then(response => response.json())
        .then(result => {
            const postList = [];
            if (result.length === 0){
                setSearchPending(false);
                searchResultsDiv.classList.remove(`hidden-results`);
            }
            result.forEach(queriedPost => {
                fetch(`${process.env.GATSBY_API_PROTOCOL}://${process.env.GATSBY_API_URL}/wp-json/wp/v2/tags?post=${queriedPost.id}`)
                .then(resp => resp.json())
                .then(postTags => {
                    const tagNames = postTags.map(postTag => {return { name: postTag.name } });
                    postList.push({
                        featured_media: {
                            source_url: queriedPost.better_featured_image.source_url
                        },
                        title: queriedPost.title.rendered,
                        excerpt: queriedPost.excerpt.rendered,
                        date: DateTime.fromISO(queriedPost.date).toFormat('dd/MM/yyyy'),
                        tags: tagNames,
                        slug: queriedPost.slug
                    })
                    if(postList.length === result.length){
                        setFoundPost(postList);
                    }
                })
                .catch(e => console.error('failed to fetch post tags!'))
                .finally(() => {
                    setSearchPending(false);
                    searchResultsDiv.classList.remove(`hidden-results`);
                })
            })
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
            <button id="search-btn"><IoIosSearch size="30px"/></button>
        </SearchBar>
        <SearchResultWrapper id="search-results">
            <div id='results-container'>
            {
               foundPost.length === 0 ? (
               <div>
                   <div id="no-post-found-container">
                       <img id="search-icon" src={SearchIcon} alt="search icon for no search found"/>
                   </div>
                   <h2 style={{textAlign: `center`}}>No posts to see. Please start a new search!</h2>
               </div>
               ) : (foundPost.map(post => <PostPreview post={post} key={post.title}/>))
            }
            </div>
        </SearchResultWrapper>
        <SpinnerWrapper >
        {
        searchPending ?
            <ClipLoader
                sizeUnit={"px"}
                size={150}
                color={mainColour}
                loading={searchPending}
            />
            : null
        }
        </SpinnerWrapper>
    </PageContentWrapper>)
}