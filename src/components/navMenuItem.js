import styled from "styled-components";
import React, {useState, useEffect} from 'react';
import { Link } from 'gatsby';
import { mainColour } from '../style/themeStyle';

const MenuItem = styled(Link)`
    position: relative;
    text-decoration: none;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    font-weight: bold;
    color: ${props => props.selected ? `black` : `inherit`};
    background-color: ${props => props.selected ? mainColour : `inherit`};
    width: ${props => (100 / props.partitions)}%;
    overflow: hidden;
    :hover{
        cursor: ${props => props.selected ? `default` : `pointer`}
    }
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

const NavMenuItem = (props) => {
    const [url] = useState(props.item.object_slug);
    const [selected, setSelected] = useState(false);
    useEffect(() => {
        if(url === document.location.pathname.slice(1)){
            setSelected(true);
        }
      });
    return (
        <MenuItem to={`/${props.item.object_slug}`}
                  key={props.item.title}
                  partitions={props.partitions}
                  selected={selected}>
            {selected ? null : <HoverAnimation id={props.item.object_slug+`_hover_anim`}/>}
            <NavElementText id={props.item.object_slug+`_text`}>{props.item.title}</NavElementText>
        </MenuItem>
    )
};

export default NavMenuItem