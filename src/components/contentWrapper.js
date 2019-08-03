import React from "react";
import styled from "styled-components";
import Sidebar from "./sidebar";
import { mainContentWidthPercent } from "../style/layoutStyle";

const PageLayoutWrapper = styled.div`
  width: ${mainContentWidthPercent}%;
  padding-right: 10px;
`
const MainViewWrapper = styled.div`
  display: flex;
`

const ContentWrapper = ({ children }) => (
    <MainViewWrapper >
      <PageLayoutWrapper>
        { children }
      </PageLayoutWrapper>
      <Sidebar />
    </MainViewWrapper>
)

export default ContentWrapper;