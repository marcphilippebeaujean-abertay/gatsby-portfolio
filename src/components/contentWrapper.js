import React from "react";
import styled from "styled-components";
import Sidebar from "./sidebar";
import { contentWidth } from "../style/layoutStyle";

const mainContentWidthPercent = 70;



const PageLayoutWrapper = styled.div`
  width: ${mainContentWidthPercent}%;
  padding-right: 10px;
`
const MainViewWrapper = styled.div`
  display: flex;
`

const ContentWrapper = (props) => (
    <MainViewWrapper >
      <PageLayoutWrapper>
        {props.pageContent}
      </PageLayoutWrapper>
      <Sidebar width={100-mainContentWidthPercent}/>
    </MainViewWrapper>
)

export default ContentWrapper;