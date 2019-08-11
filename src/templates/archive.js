import React from 'react'
import styled from 'styled-components';
import { PageContentWrapper } from './page';
import { IoIosSearch } from "react-icons/io";

const SearchBar = styled.div`
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
`;

export default ({ pageContext }) => {
    return (
    <PageContentWrapper>
        <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
        <SearchBar>
            <input className="input-field"
                   id="search-bar"
                   type="text"
                   name="search-bar"
                   placeholder="Search" />
            <button id="search-btn"><IoIosSearch /></button>
        </SearchBar>
        <div id="blog-display-wrapper">
            
        </div>
    </PageContentWrapper>)
}