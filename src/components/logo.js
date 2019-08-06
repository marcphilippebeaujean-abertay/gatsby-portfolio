import React from 'react';
import { mainColour } from "../style/themeStyle";
import { smallScreenWidth } from "../style/layoutStyle";
import styled from "styled-components";

const LogoStyle = styled.div`
    color: inherit;
    display: table-cell;
    vertical-align: middle;
    flex-grow: 1;
    @media screen and (max-width: ${smallScreenWidth}px){
        vertical-align: left;
        width: 200px;
        flex-grow: 0;
    }
`

const LogoText = styled.text`
    @import url('https://fonts.googleapis.com/css?family=Orbitron&display=swap');
    font-family: 'Orbitron', sans-serif;
    font-size: 160px;
    fill: ${mainColour};
    :hover{
        cursor: default;
    }
`

const Logo = (props) => (
    <LogoStyle id="logo" partitions={props.menuPartitions}>
        <svg height="100%" width="100%" viewBox="0 -200 1000 300"
             xmlns="http://www.w3.org/2000/svg">
            <LogoText x="0%" y="0%" textLength="100%">{`<JustDoIT />`}</LogoText>
        </svg>
    </LogoStyle>
)

export default Logo;