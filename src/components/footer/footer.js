import React from "react"
import { Link } from "gatsby"
import { getCurrentUrlPathname } from "../../utility/navigation"
import { document } from "browser-monads"
import FooterSocialMedia from "./footerSocialMedia"

const Footer = () => {
  return (
    <footer id="footer">
      <div className="text-white footer-container container">
        <div className="text-center row">
          <div className="link-wrap mt-4  col-12 col-xs-6">
            <Link
              className="footer-link mb-2"
              to={`/impressum`}
              selected={"/impressum" === getCurrentUrlPathname(document)}
            >
              Impressum und Datenschutzerklärung
              </Link>
          </div>
          <div className="link-wrap col-12 col-xs-6">
            <Link
              className="footer-link"
              to={`/imprint`}
              selected={"/imprint" === getCurrentUrlPathname(document)}
            >
              Imprint und Data Policy
              </Link>
          </div>
        </div>
        <div className="text-center mt-2 mb-2">
          <p >Copyright © Marc Philippe Beaujean, 2020</p>
        </div>
        <div className="d-block ml-auto mr-auto">
          <div>
            <FooterSocialMedia />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
