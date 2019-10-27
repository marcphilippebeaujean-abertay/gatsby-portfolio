import React from "react"
import styled from "styled-components"

import { smallScreenWidth } from "../../style/layoutStyle"
import { mainColour } from "../../style/themeStyle"
import linkedInLogo from "../../images/linkedin-icon.png"
import youtubeLogo from "../../images/youtube-icon.png"
import githubLogo from "../../images/github-icon.png"
import twitterLogo from "../../images/twitter-icon.png"

const SocialMediaLogoWrapper = styled.div`
  display: flex;
  padding: 5px 0;
  a {
    margin-right: 20px;
    border-radius: 25px;
  }
  .logo {
    background-color: white;
    height: 30px;
    width: 30px;
    transition: ease 0.2s;
  }
  a:hover .logo {
    background-color: ${mainColour};
  }
  @media screen and (max-width: ${smallScreenWidth}px) {
    a {
      margin: 0px 20px 0px 0px;
    }
    left: 0px;
  }
`

export default () => (
  <SocialMediaLogoWrapper>
    <a
      href="https://www.linkedin.com/in/marc-philippe-beaujean-5ab27815a/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="logo" src={linkedInLogo} alt="LinkedIn Logo" />
    </a>
    <a
      href="https://www.youtube.com/channel/UCrGAw9i5HoaByeiQAV5FaLA?guided_help_flow=3"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="logo" src={youtubeLogo} alt="YouTube Logo" />
    </a>
    <a
      href="https://github.com/marcphilippebeaujean-abertay"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="logo" src={githubLogo} alt="GitHub Logo" />
    </a>
    <a
      href="https://twitter.com/MarcBeaujean"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="logo" src={twitterLogo} alt="Twitter Logo" />
    </a>
  </SocialMediaLogoWrapper>
)
