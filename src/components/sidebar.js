import React from "react";
import styled from "styled-components";
import { navMenuHeight, contentWidth } from "../style/layoutStyle";

const SidebarWrapper = styled.div`
    position: fixed;
    margin-left: ${contentWidth*0.7}px;
    top: ${navMenuHeight}px;
    width: ${contentWidth - (contentWidth*0.7)}px;
`

const Sidebar = (props) => (
    <SidebarWrapper width={props.width}>
        helloworld
    </SidebarWrapper>);
export default Sidebar;