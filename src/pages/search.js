import React, { useState } from "react"
import SEO from "../components/seo"
import { PageContentWrapper } from "../style/pageStyleComponent"
import { IoIosSearch } from "react-icons/io"
import { mainColour } from "../style/themeStyle"
import { DateTime } from "luxon"

import PostPreview from "../components/postComponent/postPreview"
import ClipLoader from "react-spinners/ClipLoader"

export default () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [foundPost, setFoundPost] = useState([])
  const [searchPending, setSearchPending] = useState(false)
  const searchForPost = e => {
    e.preventDefault()
    if (searchTerm.length === 0) return
    const searchResultsDiv = document.getElementById(`results-container`)
    searchResultsDiv.classList.add(`d-none`)
    setSearchPending(true)
    fetch(
      `${process.env.GATSBY_API_PROTOCOL}://${process.env.GATSBY_API_URL}/wp-json/wp/v2/blogpost?search=${searchTerm}`
    )
      .then(response => response.json())
      .then(queriedPosts => {
        const postList = []
        if (queriedPosts.length === 0) {
          setSearchPending(false)
          searchResultsDiv.classList.remove(`d-none`)
        } else {
          queriedPosts.forEach(queriedPost => {
            postList.push({
              featured_media: {
                source_url: queriedPost.better_featured_image.source_url,
              },
              wordpress_id: queriedPost.id,
              title: queriedPost.title.rendered,
              excerpt: queriedPost.excerpt.rendered,
              date: DateTime.fromISO(queriedPost.date).toFormat("dd/MM/yyyy"),
              slug: queriedPost.slug,
            })
          })
          if (postList.length === queriedPosts.length) {
            setFoundPost(postList)
          }
        }
      })
      .catch(e => console.error(e))
      .finally(() => {
        setSearchPending(false)
        searchResultsDiv.classList.remove(`d-none`)
      })
  }
  const handleInputChange = e => setSearchTerm(e.target.value)
  return (
    <PageContentWrapper>
      <div className="search-page">
        <SEO
          title="Archive"
          description="Search through the posts of <JustDoIT />"
        />
        <h1>Search</h1>
        <hr></hr>
        <form onSubmit={searchForPost} className="mb-2" id="search-form">
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
        </form>
        <div id="search-results">
          <div id="results-container">
            {foundPost.length === 0
              ? null
              : foundPost.map(post => (
                <PostPreview post={post} key={post.title} showState={false} />
              ))}
          </div>
        </div>
        <div className="spinner-wrapper">
          {searchPending ? (
            <ClipLoader
              sizeUnit={"px"}
              size={150}
              color={mainColour}
              loading={searchPending}
            />
          ) : null}
        </div>
      </div>
    </PageContentWrapper>
  )
}
