import React,  { useState } from 'react';
import { Link } from 'gatsby';
import { IoIosMenu } from 'react-icons/io';
import { smallScreenWidth, smallScreenNavHeight } from "../style/layoutStyle";
import { mainColour } from "../style/themeStyle";
import styled from "styled-components";

const NavigationIcon = styled.div`
    position: absolute;
    bottom: -1.5px;
    right: 10px;
    @media screen and (min-width: ${smallScreenWidth}px){
        display: none;
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
                <IoIosMenu size={50}/>
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