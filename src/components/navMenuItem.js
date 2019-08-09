import styled from "styled-components";
import React from 'react';
import { smallScreenWidth } from '../style/layoutStyle';
import { mainColour } from "../style/themeStyle";
import { Link } from 'gatsby';

const MenuItem = styled(Link)`
    position: relative;
    color: inherit;
    background-color: inherit;
    width: ${props => (100 / props.partitions)}%;
    overflow: hidden;
    text-decoration: none;
    text-align: center;
    align-content: center;
    display: flex;
    .menu-item{
        display: inherit;
        font-weight: bold;
        vertical-align: middle;
        transition: all 0.3s;
        text-align: center;
        height: 100%;
        width: 100%;
    }
    .menu-item.selected{
        color: black !important;
        background-color: ${mainColour} !important;
    }
    .selected:hover{
        cursor: default !important;
    }
    @media screen and (max-width: ${smallScreenWidth}px) {
        display: none;
    }
`

const NavElementText = styled.p`
    font-size: 20px;
    z-index: 1;
    position: relative;
    width: 100%;
    text-align: center;
`

const stripeWidth = 20;
const HoverAnimation = styled.div`
    position: absolute;
    width: 10000%;
    height: 100%;
    background-position-x: 100px;
    top: 0%;
    opacity: 100%;
    display: none;
    background: repeating-linear-gradient(
      135deg,
      black,
      black ${stripeWidth}px,
      rgba(174, 174, 174, 0.2) ${stripeWidth}px,
      rgba(174, 174, 174, 0.2) ${stripeWidth*2}px
    );
    animation: slide 60s linear infinite;
    @keyframes slide{
        from { background-position: 0 0; }
        to { background-position: -800px 0; }
    }
    ${MenuItem}:hover &{
        display: inherit;
    }
`

const NavMenuItem = (props) => {
    return (
        <MenuItem to={`/${props.item.object_slug}`}
                  key={props.item.title}
                  partitions={props.partitions}>
            <div className={`${props.item.object_slug} menu-item`}>
                {/* ? null : <HoverAnimation id={props.item.object_slug+`_hover_anim`}/>*/}
                <NavElementText id={props.item.object_slug+`_text`}>{props.item.title}</NavElementText>
            </div>
        </MenuItem>
    )
};

export default NavMenuItem