import React, { useEffect } from "react"
import styled from "styled-components"
import twitterLogo from "../images/Twitter_logo_og.png"
import twitterLoadFailed from "../images/twitter-fetch-fail.png"

const twitterDataHeight = `350`
const twitterColourCode = `#1DA1F2`

const TwitterFeedWrapper = styled.div`
  h1 {
    z-index: 4;
    position: absolute;
    background-color: white;
    margin: 0px;
    color: black;
  }
  position: relative;
  height: ${twitterDataHeight}px;
  overflow: hidden;
  a {
    text-decoration: none;
    color: ${twitterColourCode};
  }
  .hidden {
    display: none;
  }
`

const FailedToLoadOverlay = styled.div`
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 10%;
  h2 {
    color: ${twitterColourCode};
    text-align: center;
  }
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`

const TwitterOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
  transition: opacity 1s;
  #loading-overlay {
    height: 100%;
    width: 100%;
    background-color: white;
    position: relative;
  }

  #twitter-loader {
    width: 100%;
    max-width: 60px;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: fade-in 1.2s;
    animation-iteration-count: infinite;
  }
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export default props => {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("overlay").classList.add("hidden")
    }, 3000)
  })
  return (
    <TwitterFeedWrapper>
      <div className="center">
        <h1>
          Tweets by{" "}
          <a href="https://twitter.com/MarcBeaujean" target="_blank">
            @MarcBeaujean
          </a>
        </h1>
      </div>
      <FailedToLoadOverlay>
        <h2>Failed to load Twitter Feed</h2>
        <img src={twitterLoadFailed} alt="Twitter fetch failed logo" />
      </FailedToLoadOverlay>
      <TwitterOverlay id="overlay">
        <div id="loading-overlay">
          <img src={twitterLogo} id="twitter-loader" />
        </div>
      </TwitterOverlay>
      <a
        className="twitter-timeline"
        data-height={twitterDataHeight}
        href="https://twitter.com/MarcBeaujean?ref_src=twsrc%5Etfw"
        data-chrome="noscrollbar"
      >
        Tweets by MarcBeaujean
      </a>{" "}
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      ></script>
    </TwitterFeedWrapper>
  )
}
