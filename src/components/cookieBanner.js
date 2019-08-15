import React from 'react'
import styled from "styled-components";
import { Link } from "gatsby";
import { mainColour } from "../style/themeStyle";
import { smallScreenWidth } from '../style/layoutStyle';

const CookieBannerWrapper = styled.div`
    width: 100%;
    height: auto;
    z-index: 5;
    background-color: rgba(0,0,0,.9);
    position: fixed;
    bottom: 0;
    color: ${mainColour};
    animation: fadeIn 1s;
    @keyframes fadeIn {
        from {
            opacity: 0;
            bottom: -100;
        } to {
            bottom: 0;
        }
    }
    #submit-btn{
        margin-left: 30px;
        align-self: center;
        width: 100px;
        height: 40px;
        color: black;
        background-color: ${mainColour};
        box-shadow: 0px;
        border-radius: 5px;
        border-style: solid;
        font-size: 16px;
        transition: all 0.3s;
    }
    #submit-btn:hover{
        cursor: pointer;
    }
    .hide {
        display: none;
    }
`
const BannerInformationWrapper = styled.div`
    display: flex;
    width: calc(100% - 100px);
    margin: 0 auto;
    position: relative;
    text-align: justify;
    font-size: 20px;
    a{
        color: ${mainColour} !important;
        font-weight: bold;
    }
    @media screen and (max-width: ${smallScreenWidth}px) {
        width: calc(100% - 20px);
        flex-direction: column;
        #submit-btn{
            width: 100%;
            margin-bottom: 10px;
            margin-left: 0;
            margin-right: 0;
        }
    }
`

export default (props) => {
    const hideBanner = () => {
        console.log('tried to close banner');
        const cookieBanner = document.getElementById('banner-wrapper');
        cookieBanner.classList.add('hide');
        localStorage.setItem('cookiesAccepted', true);
    }
    return (
        <CookieBannerWrapper onClick={() => hideBanner()} id="cookie-banner-container">
            <BannerInformationWrapper className={localStorage.getItem('cookiesAccepted') ? "hide" : ""} id='banner-wrapper'>
                <p>This website uses cookies! Please read the <Link to={`/datenschutzerklarung/`}>Data Policy</Link> for more information.</p>
                <button id="submit-btn">Ok</button>
            </BannerInformationWrapper>
        </CookieBannerWrapper>
    )
}