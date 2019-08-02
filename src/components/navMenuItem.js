import styled from "styled-components";
import React from 'react';
import { Link } from 'gatsby';


const MenuItem = styled(Link)`
    position: relative;
    text-decoration: none;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    font-weight: bold;
    color: inherit;
    width: ${props => (100 / props.menuPartitions)}%;
    overflow: hidden;
`

const NavElementText = styled.p`
    font-size: 20px;
    z-index: 1;
    position: relative;
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

const NavMenuItem = (props) => (
    <MenuItem to={props.item.object_slug} key={props.item.title} menuPartitions={props.menuPartitions}>
        <HoverAnimation id={props.item.object_slug+`_hover_anim`}/>
        <NavElementText id={props.item.object_slug+`_text`}>{props.item.title}</NavElementText>
    </MenuItem>);

export default NavMenuItem