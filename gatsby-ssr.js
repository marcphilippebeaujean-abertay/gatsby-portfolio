
const Layout = require("./src/components/layout").default
const React = require("react")

//const { Helmet } = require("react-helmet")

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
exports.wrapPageElement = ({ element, props }) => {
    return (<Layout>
        {element}
    </Layout>)
}