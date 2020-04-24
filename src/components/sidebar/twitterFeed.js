import React, { useEffect } from "react"
import twitterLogo from "../../images/Twitter_logo_og.png"
import SidebarCard from "./sidebarCard";

const twitterDataHeight = `350`

const timelineLoaderLoop = func => {
  if (document.getElementById("twitter-widget-0")) {
    document.getElementById("twitter-widget-overlay").classList.add("hidden")
  } else {
    setTimeout(() => func(func), 2000)
  }
}

export default props => {
  useEffect(() => {
    setTimeout(() => timelineLoaderLoop(timelineLoaderLoop), 2000)
  })
  return (
    <SidebarCard id="twitter-feed-wrapper">
      <div id="twitter-widget-overlay">
        <div id="loading-overlay">
          <img src={twitterLogo} id="twitter-loader" alt="twitter icon" />
        </div>
      </div>
      <a
        className="twitter-timeline"
        data-dnt="true"
        data-height={twitterDataHeight}
        data-tweet-limit="4"
        href="https://twitter.com/MarcBeaujean"
        data-chrome="noscrollbar"
      >
        Tweets by MarcBeaujean
      </a>{" "}
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      ></script>
    </SidebarCard>
  )
}
