import React, { useEffect } from "react";
import NavMenu from "./navMenu";
import Footer from "./footer";
import ContentWrapper from "./contentWrapper";
import { CONFIRM_PAGE_LOAD } from "../redux/pageStateReducer";
import { useSelector, useDispatch } from 'react-redux'
import { navMenuHeight, contentWidth } from  "../style/layoutStyle";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  body{
    font-family: 'Open Sans', sans-serif;
    padding: 0 !important;
    display: block;
    max-width: ${contentWidth}px;
    margin: 0 auto;
    margin-top: ${navMenuHeight}px;
    text-align: justify;
  }
`
const Layout = ({children}) => {
  return(
    <div>
      <GlobalStyles />
      <ContentWrapper children={ children } />
    </div>
)}

export default Layout;
