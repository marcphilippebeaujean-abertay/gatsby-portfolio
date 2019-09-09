import React from 'react';
import { mainColour } from "../style/themeStyle";
import { smallScreenWidth, smallScreenSidePadding } from "../style/layoutStyle";
import styled from "styled-components";

const LogoStyle = styled.div`
    color: inherit;
    display: table-cell;
    vertical-align: middle;
    flex-grow: 1;
    svg{
        margin: 0 auto;
    }
    @media screen and (max-width: ${smallScreenWidth}px){
        vertical-align: left;
    }
`

const LogoContainer = styled.div`
    height: 50px;
    width: 250px;
    margin: 0px auto;
    @import url('https://fonts.googleapis.com/css?family=Orbitron&display=swap');
    font-family: 'Orbitron', sans-serif;
    :hover{
        cursor: default;
    }
    @media screen and (max-width: ${smallScreenWidth}px){
        vertical-align: left;
        width: 200px;
        margin: 0px 0px 0px ${smallScreenSidePadding}px;
        flex-grow: 0;
    }
`

const Logo = (props) => (
    <LogoStyle id="logo" partitions={props.menuPartitions}>
        <LogoContainer>
            <svg y1="0%" y="100%" x1="0%" x2="100%" viewBox="0 -200 1000 300"
                 xmlns="http://www.w3.org/2000/svg">
                <text fontSize="153" fill={`${mainColour}`} letterSpacing="-0.5">{`<JustDoIT/>`}</text>
            </svg>
        </LogoContainer>
    </LogoStyle>
)

export default Logo;