const React = require("react")
const NavMenu = require("./src/components/navMenu").default
const Footer = require("./src/components/footer").default;
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
//export { default as wrapRootElement } from './src/redux/reduxWrapper';
exports.wrapPageElement = ({ element, props }) => {
    // props provide same data to Layout as Page element will get
    // including location, data, etc - you don't need to pass it
    return (
    <div>
        <NavMenu />
        { element }
        <Footer />
    </div>)
  }