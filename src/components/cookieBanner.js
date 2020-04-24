import React, { useEffect } from "react"
import { Link } from "gatsby"

const cookieBannerStorageKey = "cookiesAccepted"

export default props => {
  useEffect(() => {
    if (window.localStorage.getItem(cookieBannerStorageKey) !== "true") {
      let banner = document.getElementById("cookie-banner-container")
      banner.classList.remove("d-none")
    }
  }, [])
  const hideBanner = () => {
    if (!window) return
    const cookieBanner = document.getElementById("cookie-banner-container")
    cookieBanner.classList.add("d-none")
    window.localStorage.setItem(cookieBannerStorageKey, "true")
  }
  return (
    <div id="cookie-banner-container">
      <div className="d-none" id="banner-information-wrapper">
        <p>
          This website uses cookies! By using it, you are agreeing to the terms
          - please read the <Link to={`/imprint`}>Data Policy</Link> for more
          information.
        </p>
        <button id="submit-btn" onClick={() => hideBanner()}>
          Got It!
        </button>
      </div>
    </div>
  )
}
