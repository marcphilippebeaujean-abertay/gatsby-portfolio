const Layout = require("./src/components/layout").default
const React = require("react")
//const { Helmet } = require("react-helmet")

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
exports.wrapPageElement = ({ element, props }) => {
    <Layout>
        {element}
    </Layout>
}

//exports.onRenderBody = (
//    { setHeadComponents, setHtmlAttributes, setBodyAttributes },
//    pluginOptions
//  ) => {
//    const helmet = Helmet.renderStatic()
//    setHtmlAttributes(helmet.htmlAttributes.toComponent())
//    setBodyAttributes(helmet.bodyAttributes.toComponent())
//    setHeadComponents([
//      helmet.title.toComponent(),
//      helmet.link.toComponent(),
//      helmet.meta.toComponent(),
//      helmet.noscript.toComponent(),
//      helmet.script.toComponent(),
//      helmet.style.toComponent(),
//    ])
//  }
