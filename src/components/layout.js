import React from "react"
import MainMenu from "./mainMenu";

const Layout = ({ children }) => (
  <div>
    <MainMenu />
    {children}
  </div>
)

export default Layout
