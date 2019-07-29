import React from "react"
import MainMenu from "./mainMenu";
import Footer from "./footer";

const Layout = ({ children }) => (
  <div>
    <MainMenu />
    {children}
    <Footer />
  </div>
)

export default Layout
