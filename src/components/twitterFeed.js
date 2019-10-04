import React, { useEffect } from "react"
import styled from "styled-components"
import twitterLogo from "../images/Twitter_logo_og.png"

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
  a:hover {
    text-decoration: underline;
  }
  .hidden {
    display: none;
  }
  .timeline-Widget {
    animation: fadein 2s;
  }
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const TwitterOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  transition: opacity 1s;
  #loading-overlay {
    height: 100%;
    width: 100%;
    background-color: white;
    position: relative;
    transition: all 0.1s ease-out;
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
  .hidden {
    z-index: -1;
    display: none;
  }
`

const timelineLoaderLoop = func => {
  if (document.getElementById("twitter-widget-0")) {
    document.getElementById("overlay").classList.add("hidden")
  } else {
    setTimeout(() => func(func), 2000)
  }
}

export default props => {
  useEffect(() => {
    setTimeout(() => timelineLoaderLoop(timelineLoaderLoop), 2000)
  })
  return (
    <TwitterFeedWrapper>
      <div className="center">
        <h1>
          Tweets by{" "}
          <a
            href="https://twitter.com/MarcBeaujean"
            target="_blank"
            rel="noopener noreferrer"
          >
            @MarcBeaujean
          </a>
        </h1>
      </div>
      <TwitterOverlay id="overlay">
        <div id="loading-overlay">
          <img src={twitterLogo} id="twitter-loader" alt="twitter icon" />
        </div>
      </TwitterOverlay>
      <a
        className="twitter-timeline"
        data-dnt="true"
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
