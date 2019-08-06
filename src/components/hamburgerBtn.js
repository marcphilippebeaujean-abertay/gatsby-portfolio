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
    @media screen and (min-width: ${smallScreenWidth}px){
        display: none;
    }
`

const MenuBar = styled.div`
    width: 50px;
    height: 5px;
    margin: 5px 0;
    background-color: ${mainColour};
    ${props =>  `animation: bar${props.bar} 1s ${props.overlayActive ? `reverse` : ``}`};
    @keyframes bar1 {
        from {
            transform: rotate(-45deg) translate(-9px, 6px);
        }to{
            transform: rotate(0deg) translate(0px, 0px);
        }
    }
    @keyframes bar2 {
        from {
            opacity: 0;
        } to {
            opacity: 1;
        }
    }
    @keyframes bar3 {
        from {
            transform: rotate(45deg) translate(-8px, -8px);
        }to{
            transform: rotate(0deg) translate(0px, 0px);
        }
    }
`

const NavigationOverlay = styled.nav`
    position: fixed;
    margin-top: ${smallScreenNavHeight}px;
    left: 0%;
    background-color: black;
    width: 100%;
    z-index: 1 !important;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    display: ${props => props.overlayActive ? `flex` : `none`};
    flex-direction: column;
    @media screen and (min-width: ${smallScreenWidth}px){
        display: none !important;
    }
`

const OverlayLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.selected ? `black` : mainColour};
    background-color: ${props => props.selected ? mainColour : `black`};
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
`

const HamburgerButton = (props) => {
    const [overlayActive, setOverlayActive] = useState(false)
    const toggleOverlay = () => {
        setOverlayActive(!overlayActive);
    }
    return(
        <div>
            <NavigationIcon onClick={toggleOverlay}>
                <MenuBar overlayActive={overlayActive} bar={1}/>
                <MenuBar overlayActive={overlayActive} bar={2}/>
                <MenuBar overlayActive={overlayActive} bar={3}/>
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