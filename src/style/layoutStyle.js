import styled, { createGlobalStyle } from "styled-components";
import { navMenuHeight } from "./navMenuStyle";

export const contentWidth = `950px`;

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  body{
    font-family: 'Open Sans', sans-serif;
    padding: 0 !important;
    margin-top: ${navMenuHeight};
  }
`

export const ContentLayoutWrapper = styled.div`
  max-width: ${contentWidth};
  margin: 0 auto;
`