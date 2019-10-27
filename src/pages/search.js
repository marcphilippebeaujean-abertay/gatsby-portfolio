import React, { useState } from "react"
import SEO from "../components/seo"
import { PageContentWrapper } from "../style/pageStyleComponent"
import { IoIosSearch } from "react-icons/io"
import { mainColour } from "../style/themeStyle"
import { DateTime } from "luxon"
import { inputFieldHeight } from "../components/forms/formStyleComponent"
import { graphql, useStaticQuery, Link } from "gatsby"

import Img from "gatsby-image/withIEPolyfill"
import styled from "styled-components"
import PostPreview from "../components/postComponent/postPreview"
import ClipLoader from "react-spinners/ClipLoader"

const SearchBar = styled.form`
  width: 100%;
  height: ${inputFieldHeight}px;
  margin-bottom: 20px;
  display: flex;
  -webkit-appearance: none;
  border-radius: 0;
  #search-btn {
    height: ${inputFieldHeight}px;
    width: 60px;
    background-color: black;
    border: 1px solid transparent;
    border-radius: 0px 5px 5px 0px;
    font-size: 16px;
  }
  #search-btn::-moz-focus-inner {
    border: 0;
  }
  #search-btn:hover {
    cursor: pointer;
    background-color: ${mainColour};
    color: black;
  }
  #btn-icon {
    color: ${mainColour};
  }
  #search-btn:hover #btn-icon {
    color: black;
  }
  .input-field {
    font-size: 16px;
    width: 100%;
    max-height: ${inputFieldHeight}px;
    border-style: solid;
    border-width: 0.5px;
    border-color: lightgrey;
    border-radius: 5px 0px 0px 5px;
    padding: 0 10px;
  }
  .input-field:hover {
    border-color: lightblue;
    border-style: solid;
    box-shadow: 0px;
  }
`

const SearchResultWrapper = styled.div`
  position: relative;
  .post-preview-hider {
    display: none !important;
  }
  #no-post-found-container {
    width: 100%;
    justify-content: center;
  }
  #search-icon-wrapper {
    width: 150px;
    height: auto;
    margin: 0 auto;
  }
  .hidden-results {
    display: none !important;
  }
  h2 {
    margin-top: 40px;
    padding-bottom: 40px;
  }
`

const SpinnerWrapper = styled.div`
  display: block;
  margin: 0 auto;
  width: 150px;
`

export default ({ pageContext }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [foundPost, setFoundPost] = useState([])
  const [searchPending, setSearchPending] = useState(false)
  const searchForPost = e => {
    e.preventDefault()
    if (searchTerm.length === 0) return
    const searchResultsDiv = document.getElementById(`results-container`)
    searchResultsDiv.classList.add(`hidden-results`)
    setSearchPending(true)
    fetch(
      `${process.env.GATSBY_API_PROTOCOL}://${process.env.GATSBY_API_URL}/wp-json/wp/v2/blogpost?search=${searchTerm}`
    )
      .then(response => response.json())
      .then(queriedPosts => {
        const postList = []
        if (queriedPosts.length === 0) {
          setSearchPending(false)
          searchResultsDiv.classList.remove(`hidden-results`)
        }
        // Get list of tags to query by aggregating them from the search results
        const foundTagIds = []
        queriedPosts.forEach(queriedPost => {
          foundTagIds.push(
            ...queriedPost.tags
              .filter(tagId => !foundTagIds.includes(tagId))
              .map(tagId => tagId)
          )
        })
        fetch(
          `${process.env.GATSBY_API_PROTOCOL}://${
            process.env.GATSBY_API_URL
          }/wp-json/wp/v2/tags?include=${foundTagIds
            .map(tagId => `${tagId}`)
            .join(",")}`
        )
          .then(resp => resp.json())
          .then(postTags => {
            queriedPosts.forEach(queriedPost => {
              const tagNames = postTags
                .filter(postTag => queriedPost.tags.includes(postTag.id))
                .map(postTag => {
                  return {
                    name: postTag.name,
                  }
                })
              postList.push({
                featured_media: {
                  source_url: queriedPost.better_featured_image.source_url,
                },
                wordpress_id: queriedPost.id,
                title: queriedPost.title.rendered,
                excerpt: queriedPost.excerpt.rendered,
                date: DateTime.fromISO(queriedPost.date).toFormat("dd/MM/yyyy"),
                tags: tagNames,
                slug: queriedPost.slug,
              })
            })
            if (postList.length === queriedPosts.length) {
              setFoundPost(postList)
            }
          })
          .catch(e => console.error("failed to fetch post tags!"))
          .finally(() => {
            setSearchPending(false)
            searchResultsDiv.classList.remove(`hidden-results`)
          })
      })
      .catch(e => console.error(e))
  }
  const data = useStaticQuery(graphql`
    query {
      searchIcon: file(relativePath: { eq: "search-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const handleInputChange = e => setSearchTerm(e.target.value)
  return (
    <PageContentWrapper>
      <SEO
        title="Archive"
        description="Search through the posts of <JustDoIT />"
      />
      <h1>Search</h1>
      <SearchBar onSubmit={searchForPost}>
        <input
          className="input-field"
          id="search-bar"
          type="text"
          name="search-bar"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search"
        />
        <button id="search-btn">
          <span>
            {" "}
            <IoIosSearch id="btn-icon" size="30px" />
          </span>
        </button>
      </SearchBar>
      <SearchResultWrapper id="search-results">
        <div id="results-container">
          {foundPost.length === 0 ? (
            <div id="no-post-found-container">
              <div id="search-icon-wrapper">
                <Img
                  fluid={data.searchIcon.childImageSharp.fluid}
                  alt="Search icon for no search found"
                />
              </div>
              <h2 style={{ textAlign: `center` }}>
                No posts to see. Please start a new search!
              </h2>
            </div>
          ) : (
            foundPost.map(post => <PostPreview post={post} key={post.title} />)
          )}
        </div>
      </SearchResultWrapper>
      <SpinnerWrapper>
        {searchPending ? (
          <ClipLoader
            sizeUnit={"px"}
            size={150}
            color={mainColour}
            loading={searchPending}
          />
        ) : null}
      </SpinnerWrapper>
    </PageContentWrapper>
  )
}
