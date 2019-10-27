const Layout = require("./src/components/layout").default
const React = require("react")

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
exports.wrapPageElement = ({ element, props }) => {
  return <Layout>{element}</Layout>
}
