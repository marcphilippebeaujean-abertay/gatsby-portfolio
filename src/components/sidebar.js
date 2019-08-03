import React from "react";
import styled from "styled-components";
import { navMenuHeight, contentWidth, mainContentWidthPercent } from "../style/layoutStyle";

const defaultWidthPercent = 100-mainContentWidthPercent;

const SidebarWrapper = styled.div`
    position: fixed;
    margin-left: ${contentWidth*0.7}px;
    top: ${navMenuHeight}px;
    width: ${contentWidth - (contentWidth*0.7)}px;
    @media screen and (max-width: ${contentWidth}px){
        margin-left: ${100 - defaultWidthPercent}%;
        width: ${defaultWidthPercent}%
    }
`

const Sidebar = () => (
    <SidebarWrapper >
        helloworld
    </SidebarWrapper>);
export default Sidebar;