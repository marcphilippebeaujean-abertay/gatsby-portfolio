import React from "react";
import Sidebar from "./sidebar";
import NavMenu from "./navMenu";
import Footer from "./footer";
import SEO from "../components/seo";
import { footerHeight, initContentWidth } from  "../style/layoutStyle";
import styled, { createGlobalStyle } from "styled-components";
import CookieBanner from "./cookieBanner";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  body{
    font-family: 'Open Sans', sans-serif !important;
    padding: 0 !important;
    margin: 0;
    position: relative;
  }
  html {
    height: 100%;
  }
  #main-content-container{
    min-height: 100vh;
    position: relative;
  }
  .fb_iframe_widget_fluid_desktop, .fb_iframe_widget_fluid_desktop span, .fb_iframe_widget_fluid_desktop iframe {
    max-width: 100% !important;
    width: 100% !important;
  }
  /* code highlighting with Rainbow */
  @keyframes fade-in{0%{opacity:0}100%{opacity:1}}@keyframes fade{10%{transform:scale(1, 1)}35%{transform:scale(1, 1.7)}40%{transform:scale(1, 1.7)}50%{opacity:1}60%{transform:scale(1, 1)}100%{transform:scale(1, 1);opacity:0}}[data-language] code,[class^="lang"] code,pre [data-language],pre [class^="lang"]{opacity:0;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";animation:fade-in 50ms ease-in-out 2s forwards}[data-language] code.rainbow,[class^="lang"] code.rainbow,pre [data-language].rainbow,pre [class^="lang"].rainbow{animation:none;transition:opacity 50ms ease-in-out}[data-language] code.loading,[class^="lang"] code.loading,pre [data-language].loading,pre [class^="lang"].loading{animation:none}[data-language] code.rainbow-show,[class^="lang"] code.rainbow-show,pre [data-language].rainbow-show,pre [class^="lang"].rainbow-show{opacity:1}pre{position:relative}pre.loading .preloader div{animation-play-state:running}pre.loading .preloader div:nth-of-type(1){background:#0081f5;animation:fade 1.5s 300ms linear infinite}pre.loading .preloader div:nth-of-type(2){background:#5000f5;animation:fade 1.5s 438ms linear infinite}pre.loading .preloader div:nth-of-type(3){background:#9000f5;animation:fade 1.5s 577ms linear infinite}pre.loading .preloader div:nth-of-type(4){background:#f50419;animation:fade 1.5s 715ms linear infinite}pre.loading .preloader div:nth-of-type(5){background:#f57900;animation:fade 1.5s 853ms linear infinite}pre.loading .preloader div:nth-of-type(6){background:#f5e600;animation:fade 1.5s 992ms linear infinite}pre.loading .preloader div:nth-of-type(7){background:#00f50c;animation:fade 1.5s 1130ms linear infinite}pre .preloader{position:absolute;top:12px;left:10px}pre .preloader div{width:12px;height:12px;border-radius:4px;display:inline-block;margin-right:4px;opacity:0;animation-play-state:paused;animation-fill-mode:forwards}pre{background-color:#000;word-wrap:break-word;margin:0px;padding:10px;color:#fff;font-size:14px;margin-bottom:20px}pre,code{font-family:'Monaco', 'Menlo', courier, monospace}pre .comment{color:#9933CC}pre .constant{color:#3387CC}pre .storage{color:#CC7833}pre .string{color:#66CC33}pre .keyword,pre .selector{color:#CC7833}pre .inherited-class{font-style:italic}pre .support{color:#C83730}
`

export const PageContentStyle = styled.div`
  position: relative;
  display: flex;
  overflow: auto;
  margin: 0 auto;
  max-width: ${initContentWidth}px;
  padding-bottom: ${footerHeight}px;
  text-align: justify;
`
const Layout = ({ children }) => {
  return(
    <div>
      <div id="main-content-container">
        <SEO lang="German"
          description="Software development blog"
          meta={[]}
          title={children.props.pageContext.title === undefined ? 'Error' : children.props.pageContext.title} />
        <GlobalStyles />
        <NavMenu />
        <PageContentStyle>
          { children }
          <Sidebar />
        </PageContentStyle>
      </div>
      <Footer />
      <CookieBanner />
    </div>
)}

export default Layout;
