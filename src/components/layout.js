import React from "react"
import Sidebar from "./sidebar/sidebar"
import NavMenu from "./navBar/navMenu"
import Footer from "./footer/footer"
import CookieBanner from "./cookieBanner"

const Layout = ({ children }) => {
  return (
    <div className="px-0 main container-fluid">
      <CookieBanner />
      <NavMenu />
      <div id="main-content-container" className="container">
        <div id="page-content-row" className="row">
          <div className="col-lg-8">{children}</div>
          <div className="col-lg-4 d-none d-lg-block">
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
