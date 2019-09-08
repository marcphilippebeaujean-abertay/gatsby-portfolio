const Layout = require("./src/components/layout").default
const React = require("react")
const {FacebookProvider} = require("react-facebook");

//const { Helmet } = require("react-helmet")

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
exports.wrapPageElement = ({ element, props }) => {
    return (
    <Layout>
        {element}
    </Layout>)
}

exports.wrapRootElement = ({ element }) => {
    return (
        <FacebookProvider appId='2992918847417224'>
            { element }
        </FacebookProvider>
    )
}