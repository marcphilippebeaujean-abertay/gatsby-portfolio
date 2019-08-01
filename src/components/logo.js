import React from 'react';
import styled from "styled-components";

const LogoStyle = styled.div`
    color: inherit;
    display: table-cell;
    vertical-align: middle;
    width: ${props => (100 / props.menuPartitions) * 2}%;
    margin-top: 10px;
`

const LogoText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Orbitron&display=swap');
    font-family: 'Orbitron', sans-serif;
    margin: 0;
    font-weight: bold;
    text-align: justify;
    font-size: 16px;
    text-align: center;
`


const Logo = (props) => (
    <LogoStyle id="logo" menuPartitions={props.menuPartitions}>
        <LogoText>{`<JustDoIT />`}</LogoText>
    </LogoStyle>
)

export default Logo;