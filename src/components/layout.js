import React from "react";
import NavMenu from "./navMenu";
import Footer from "./footer";
import { GlobalStyles, ContentLayoutWrapper } from "../style/layoutStyle";

const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <NavMenu />
    <ContentLayoutWrapper>
      {children}
    </ContentLayoutWrapper>
    <Footer />
  </div>
)

export default Layout
