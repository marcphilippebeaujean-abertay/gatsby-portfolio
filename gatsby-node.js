const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  createRedirect({
    fromPath: "",
    toPath: "/blog/1",
    redirectInBrowser: true,
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/",
    toPath: "/blog/1",
    redirectInBrowser: true,
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/blog",
    toPath: "/blog/1",
    redirectInBrowser: true,
    isPermanent: true,
  })
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local WordPress graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.
    // ==== PAGES (WORDPRESS NATIVE) ====
    graphql(`
      {
        allWordpressPage {
          edges {
            node {
              id
              slug
              status
              template
              title
              content
              template
            }
          }
        }
      }
    `)
      .then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
        // Create Page pages.
        const pageTemplate = path.resolve("./src/templates/page.js")
        const contactsTemplate = path.resolve("./src/templates/contacts.js")
        const archiveTemplate = path.resolve("./src/templates/archive.js")
        const successTemplate = path.resolve("./src/templates/success.js")
        const errorTemplate = path.resolve("./src/templates/error.js")
        // We want to create a detailed page for each
        // page node. We'll just use the WordPress Slug for the slug.
        // The Page ID is prefixed with 'PAGE_'
        _.each(result.data.allWordpressPage.edges, edge => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.
          let template = pageTemplate
          switch (edge.node.template) {
            case "blog-page.php":
              return // this page will be auto generated in post sections! Only relevant for nav menu creation.
            case "contact-page.php":
              template = contactsTemplate
              break
            case "archive-page.php":
              template = archiveTemplate
              break
            case "error.php":
              template = errorTemplate
              break
            case "success.php":
              template = successTemplate
              break
            default:
              break
          }
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/${edge.node.slug}/`,
            component: slash((edge.node.template = template)),
            context: edge.node,
          })
        })
      })
      // ==== END PAGES ====
      // ==== POSTS (WORDPRESS NATIVE AND ACF) ====
      .then(() => {
        graphql(`
          {
            allWordpressWpBlogpost(sort: { fields: date, order: DESC }) {
              edges {
                node {
                  id
                  slug
                  content
                  date(formatString: "DD/MM/YYYY")
                  title
                  featured_media {
                    source_url
                  }
                  excerpt
                  tags {
                    name
                  }
                }
              }
            }
          }
        `).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
          // Create a blog page for each
          const posts = result.data.allWordpressWpBlogpost.edges
          const postsPerPage = 5
          const numberOfPages = Math.ceil(posts.length / postsPerPage)
          const blogTemplate = path.resolve(
            "./src/templates/blogDisplayPage.js"
          )
          Array.from({ length: numberOfPages }).forEach((page, index) => {
            createPage({
              component: blogTemplate,
              path: `/blog/${index + 1}`,
              context: {
                posts: posts.slice(
                  index * postsPerPage,
                  index * postsPerPage + postsPerPage
                ),
                title: `Blog`,
                numberOfPages,
                currentPage: index + 1,
              },
            })
          })
          // We want to create a detailed page for each
          // post node. We'll just use the WordPress Slug for the slug.
          // The Post ID is prefixed with 'POST_'
          const postTemplate = path.resolve("./src/templates/post.js")
          _.each(posts, edge => {
            createPage({
              path: `/post/${edge.node.slug}/`,
              component: slash(postTemplate),
              context: edge.node,
            })
          })
          resolve()
        })
      })
    // ==== END POSTS ====
  })
}
