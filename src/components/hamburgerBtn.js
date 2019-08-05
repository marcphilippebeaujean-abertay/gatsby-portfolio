import React,  { useState } from 'react';
import { Link } from 'gatsby';
import { IoIosMenu } from 'react-icons/io';
import { smallScreenWidth, smallScreenNavHeight } from "../style/layoutStyle";
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
    z-index: 4 !important;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    display: flex;
    flex-direction: column;
    @media screen and (min-width: ${smallScreenWidth}px){
        display: none;
    }
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
            {overlayActive ? 
            <NavigationOverlay>
                { props.items.map(item => item.object_slug !== "logo" ?
                <Link key={item.object_slug+"_key"}
                      to={`/${item.object_slug}`}
                      onClick={toggleOverlay}>{item.title}</Link> : null)}
            </NavigationOverlay> : ""}
        </div>);
    }

export default HamburgerButton;