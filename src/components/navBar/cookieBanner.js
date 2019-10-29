import React, { useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { mainColour } from "../../style/themeStyle"
import { smallScreenWidth, initContentWidth } from "../../style/layoutStyle"

const CookieBannerWrapper = styled.div`
  position: fixed;
  width: 100%;
  text-justify: none;
  height: auto;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.9);
  bottom: 0;
  color: ${mainColour};
  animation: fadeIn 1s;
  @keyframes fadeIn {
    from {
      opacity: 0;
      bottom: -100;
    }
    to {
      bottom: 0;
    }
  }
  #submit-btn {
    margin-left: 30px;
    align-self: center;
    width: 100px;
    height: 40px;
    color: ${mainColour};
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 0px;
    border-color: ${mainColour};
    border-radius: 5px;
    border-style: solid;
    font-size: 16px;
    transition: all 0.3s;
  }
  #submit-btn:hover {
    cursor: pointer;
    color: black;
    background-color: ${mainColour};
  }
  .hide {
    display: none;
  }
`
const BannerInformationWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  text-align: justify;
  font-size: 20px;
  p {
    position: relative;
    top: 6px;
  }
  a {
    color: ${mainColour} !important;
    font-weight: bold;
  }
  @media screen and (max-width: ${smallScreenWidth}px) {
    width: calc(100% - 20px);
    flex-direction: column;
    #submit-btn {
      width: 100%;
      margin-bottom: 10px;
      margin-left: 0;
      margin-right: 0;
    }
  }
`
const cookieBannerStorageKey = "cookiesAccepted"
export default props => {
  useEffect(() => {
    if (window.localStorage.getItem(cookieBannerStorageKey) !== "true") {
      let banner = document.getElementById("banner-wrapper")
      banner.classList.remove("hide")
    }
  })
  const hideBanner = () => {
    if (!window) return
    const cookieBanner = document.getElementById("banner-wrapper")
    cookieBanner.classList.add("hide")
    window.localStorage.setItem(cookieBannerStorageKey, "true")
  }
  return (
    <CookieBannerWrapper id="cookie-banner-container">
      <BannerInformationWrapper className="hide" id="banner-wrapper">
        <p>
          This website uses cookies! By using it, you are agreeing to the terms
          - please read the{" "}
          <Link to={`/datenschutzerklarung/`}>Data Policy</Link> for more
          information.
        </p>
        <button id="submit-btn" onClick={() => hideBanner()}>
          Got It!
        </button>
      </BannerInformationWrapper>
    </CookieBannerWrapper>
  )
}
