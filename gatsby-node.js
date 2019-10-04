const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const fetch = require("node-fetch")
const slash = require(`slash`)
require("dotenv").config({
  path: ".env",
})
// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
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
              excerpt
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
        // We want to create a detailed page for each
        // page node. We'll just use the WordPress slug for the slug.
        // The Page ID is prefixed with 'PAGE_'
        _.each(result.data.allWordpressPage.edges, edge => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/${edge.node.slug}/`,
            component: slash((edge.node.template = pageTemplate)),
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
                  wordpress_id
                  slug
                  content
                  date(formatString: "DD/MM/YYYY")
                  title
                  seo_tags
                  featured_media {
                    source_url
                    media_details {
                      height
                      width
                    }
                    localFile {
                      childImageSharp {
                        fluid(maxWidth: 500) {
                          base64
                          aspectRatio
                          src
                          srcSet
                          srcWebp
                          srcSetWebp
                          sizes
                          originalImg
                          originalName
                        }
                      }
                    }
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
          let seoTag = []
          let seoTagIds = [
            ...result.data.allWordpressWpBlogpost.edges.map(
              edge => edge.node.seo_tags
            ),
          ]
          fetch(
            `${process.env.GATSBY_API_PROTOCOL}://${
              process.env.GATSBY_API_URL
            }/wp-json/wp/v2/seo_tags?include=${seoTagIds.join(",")}`
          )
            .then(response => response.json())
            .then(tags => {
              seoTags = tags
            })
            .catch(e => {
              console.log(e)
            })
            .finally(() => {
              // Create a blog page for each
              const posts = result.data.allWordpressWpBlogpost.edges
              const postsPerPage = 5
              const numberOfPages = Math.ceil(posts.length / postsPerPage)
              const blogTemplate = path.resolve(
                "./src/templates/blogInfiniteScroll.js"
              )
              createPage({
                component: blogTemplate,
                path: `/`,
                context: {
                  posts: posts.slice(0, postsPerPage),
                  title: `Blog`,
                },
              })
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
              const uniqueTagNames = []
              // We want to create a detailed page for each
              // post node. We'll just use the WordPress Slug for the slug.
              // The Post ID is prefixed with 'POST_'
              const postTemplate = path.resolve("./src/templates/post.js")
              _.each(posts, edge => {
                _.each(edge.node.tags, tag => {
                  if (!uniqueTagNames.includes(tag.name)) {
                    uniqueTagNames.push(tag.name)
                  }
                })
                edge.node.seoTags = seoTags.filter(tag =>
                  edge.node.seo_tags.includes(tag.id)
                )
                createPage({
                  path: `/post/${edge.node.slug}/`,
                  component: slash(postTemplate),
                  context: edge.node,
                })
              })
              /** Create pages for tags */
              const tagPageTemplate = path.resolve("./src/templates/tagPage.js")
              _.each(uniqueTagNames, tagName => {
                postsForTag = []
                _.each(posts, edge => {
                  _.each(edge.node.tags, tag => {
                    if (tag.name === tagName) {
                      postsForTag.push(edge)
                    }
                  })
                })
                const tagUrlSlug = `/${tagName.replace(/ /g, "-")}/`
                createPage({
                  component: tagPageTemplate,
                  path: tagUrlSlug,
                  context: {
                    posts: postsForTag,
                    title: `#${tagName}`,
                  },
                })
              })
              resolve()
            })
        })
      })
    // ==== END POSTS ====
  })
}
