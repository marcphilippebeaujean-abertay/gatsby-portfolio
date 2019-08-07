import React,  { useState } from 'react';
import { Link } from 'gatsby';
import { smallScreenWidth, smallScreenNavHeight, smallScreenSidePadding } from "../style/layoutStyle";
import { mainColour } from "../style/themeStyle";
import styled from "styled-components";

const NavigationIcon = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    right: ${smallScreenSidePadding}px;
    top: 2px;
    width: 50px;
    overflow: hidden;
    @media screen and (min-width: ${smallScreenWidth}px){
        display: none;
    }
    .bar{
        position: relative;
        width: 50px;
        height: 5px;
        margin: 5px 0;
        background-color: ${mainColour};
        transition: all 0.5s;
        opacity: 1;
        transform: rotate(0);
    }
    .bar.bar1 {
        transform: rotate(-45deg) translate(-10px, 11px);
        width: 100%;
    }
    .bar.bar2 {
        opacity: 0;
    }
    .bar.bar3 {
        transform: rotate(45deg) translate(-10px, -11px);
        width: 100%;
    }
`

const NavigationOverlay = styled.nav`
    position: fixed;
    margin-top: ${smallScreenNavHeight}px;
    left: 0%;
    background-color: black;
    width: 100%;
    z-index: 2 !important;
    transform: ${props => props.overlayActive ? `scaleX(1)` : `scaleX(0)`};
    display: flex;
    flex-direction: column;
    opacity: 1;
    @media screen and (min-width: ${smallScreenWidth}px){
        display: none !important;
    }
    animation: slide-down 0.2s;
    @keyframes slide-down {
        from{
            opacity: 0;
            transform: scaleX(0);
        }to {
            opacity: 1;
            transform: scaleX(1);
        }
    }
`

const OverlayLink = styled(Link)`
    text-decoration: none;
    opacity: 1;
    color: ${props => props.selected ? `black` : mainColour};
    background-color: ${props => props.selected ? mainColour : `black`};
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
`
const barElementsTag = `bar`;

const HamburgerButton = (props) => {
    const [overlayActive, setOverlayActive] = useState(false);
    const toggleOverlay = () => {
        const menuBarElements = Array.from(document.getElementsByClassName(barElementsTag));
        menuBarElements.map((elem, index) => elem.classList.toggle(`${barElementsTag+(index+1)}`));
        setOverlayActive(!overlayActive);
    }
    // TODO: STORE BAR ELEMENTS IN STATE
    return(
        <div>
            <NavigationIcon onClick={toggleOverlay}>
                <div className={barElementsTag} />
                <div className={barElementsTag} />
                <div className={barElementsTag} />
            </NavigationIcon>
            <NavigationOverlay overlayActive={overlayActive}>
                { props.items.map(item => item.object_slug !== "logo" ?
                <OverlayLink key={item.object_slug+"_key"}
                             to={`/${item.object_slug}`}
                             onClick={toggleOverlay}
                             selected={item.object_slug === document.location.pathname.slice(1)}>
                    {item.title}
                </OverlayLink> : null)}
            </NavigationOverlay>
        </div>);
    }

export default HamburgerButton;