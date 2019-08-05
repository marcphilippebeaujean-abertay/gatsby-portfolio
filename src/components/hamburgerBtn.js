import React from 'react';
import { IoIosMenu } from 'react-icons/io';
import { smallScreenWidth } from "../style/layoutStyle";
import styled from "styled-components";

const NavigationIcon = styled.div`
    position: absolute;
    bottom: -1.5px;
    right: 10px;
    :hover{
        cursor: pointer;
    }
    @media screen and (min-width: ${smallScreenWidth}px){
        display: none;
    }
`

const HamburgerButton = (props) => (
    <NavigationIcon>
        <IoIosMenu size={50}/>
    </NavigationIcon>
)

export default HamburgerButton;