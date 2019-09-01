
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
