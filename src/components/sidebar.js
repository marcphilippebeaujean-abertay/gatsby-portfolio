import React from "react";
import styled from "styled-components";
import { navMenuHeight, initContentWidth, mainContentWidthPercent } from "../style/layoutStyle";

const defaultWidthPercent = 100-mainContentWidthPercent;

const SidebarWrapper = styled.aside`
    position: fixed;
    margin-left: ${initContentWidth*mainContentWidthPercent}px;
    top: ${navMenuHeight}px;
    width: ${initContentWidth - (initContentWidth*mainContentWidthPercent)}px;
    @media screen and (max-width: ${initContentWidth}px){
        margin-left: ${100 - defaultWidthPercent}%;
        width: ${defaultWidthPercent}%
    }
`

const Sidebar = () => (
    <SidebarWrapper >
        
    </SidebarWrapper>);

export default Sidebar;