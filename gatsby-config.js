require("dotenv").config({
  path: ".env",
})

module.exports = {
  siteMetadata: {
    title: "ByteSchool",
    author: "Marc Philippe Beaujean",
    description: "Blog about Software and Personal Development.",
    url: "https://www.byteschool.io", // No trailing slash allowed!
    siteUrl: "https://www.byteschool.io", // No trailing slash allowed!
    image: "/images/icon.png", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        /* The base URL of the Wordpress site without the trailingslash and the protocol. This is required.
         * Example : 'gatsbyjsexamplewordpress.wordpress.com' or 'www.example-site.com'*/
        baseUrl: process.env.GATSBY_API_URL,
        // The protocol. This can be http or https.
        protocol: process.env.GATSBY_API_PROTOCOL,
        // Indicates whether the site is hosted on wordpress.com.
        // If false, then the assumption is made that the site is self hosted.
        // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
        // If your site is hosted on wordpress.org, then set this to false.
        hostingWPCOM: false,
        // If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
        // This feature is untested for sites hosted on wordpress.com.
        // Defaults to true.
        useACF: true,
        // Include specific ACF Option Pages that have a set post ID
        // Regardless if an ID is set, the default options route will still be retrieved
        // Must be using V3 of ACF to REST to include these routes
        // Example: `["option_page_1", "option_page_2"]` will include the proper ACF option
        // routes with the ID option_page_1 and option_page_2
        // The IDs provided to this array should correspond to the `post_id` value when defining your
        // options page using the provided `acf_add_options_page` method, in your WordPress setup
        // Dashes in IDs will be converted to underscores for use in GraphQL
        acfOptionPageIds: [],
        auth: {
          // If auth.user and auth.pass are filled, then the source plugin will be allowed
          // to access endpoints that are protected with .htaccess.
          htaccess_user: "your-htaccess-username",
          htaccess_pass: "your-htaccess-password",
          htaccess_sendImmediately: false,
          // If hostingWPCOM is true then you will need to communicate with wordpress.com API
          // in order to do that you need to create an app (of type Web) at https://developer.wordpress.com/apps/
          // then add your clientId, clientSecret, username, and password here
          // Learn about environment variables: https://www.gatsbyjs.org/docs/environment-variables
          // If two-factor authentication is enabled then you need to create an Application-Specific Password
          wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
          wpcom_app_clientId: "54793",
          wpcom_user: "gatsbyjswpexample@gmail.com",
          wpcom_pass: process.env.WORDPRESS_PASSWORD,
          // If you use "JWT Authentication for WP REST API" (https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/)
          // or (https://github.com/jonathan-dejong/simple-jwt-authentication) requires jwt_base_path, path can be found in wordpress wp-api.
          // plugin, you can specify user and password to obtain access token and use authenticated requests against wordpress REST API.
          jwt_user: process.env.JWT_USER,
          jwt_pass: process.env.JWT_PASSWORD,
          jwt_base_path: "/jwt-auth/v1/token", // Default - can skip if you are using https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/
        },
        // Set cookies that should be send with requests to wordpress as key value pairs
        cookies: {},
        // Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build`
        // It can help you debug specific API Endpoints problems.
        verboseOutput: false,
        // Set how many pages are retrieved per API request.
        perPage: 100,
        // Search and Replace Urls across WordPress content.
        searchAndReplaceContentUrls: {
          sourceUrl: "https://source-url.com",
          replacementUrl: "https://replacement-url.com",
        },
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,
        // Set WP REST API routes whitelists
        // and blacklists using glob patterns.
        // Defaults to whitelist the routes shown
        // in the example below.
        // See: https://github.com/isaacs/minimatch
        // Example:  `["/*/*/comments", "/yoast/**"]`
        // ` will either include or exclude routes ending in `comments` and
        // all routes that begin with `yoast` from fetch.
        // Whitelisted routes using glob patterns
        includedRoutes: [
          "**/*/categories",
          "**/*/posts",
          "**/*/pages",
          "**/*/media",
          "**/*/tags",
          "**/*/taxonomies",
          "**/*/users",
          "**/*/menus",
          "**/*/blogpost",
        ],
        // use a custom normalizer which is applied after the built-in ones.
        normalizer: function ({ entities }) {
          return entities
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-153657097-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "0",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: process.env.GATSBY_DISQUS_NAME,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: ``,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/blog/1`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        title: `ByteSchool`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                url,
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allWordpressWpBlogpost } }) => {
              return allWordpressWpBlogpost.edges.map(edge => {
                return {
                  title: edge.node.title,
                  description: edge.node.excerpt.slice(
                    3,
                    edge.node.excerpt.length - 5
                  ),
                  date: edge.node.date,
                  url: `${process.env.GATSBY_API_PROTOCOL}://${process.env.GATSBY_DOMAIN_NAME}/post/${edge.node.slug}`,
                  guid: `${process.env.GATSBY_API_PROTOCOL}://${process.env.GATSBY_DOMAIN_NAME}/post/${edge.node.slug}`,
                }
              })
            },
            query: `
              {
                allWordpressWpBlogpost(sort: { fields: date, order: DESC }) {
                  edges {
                    node {
                      slug
                      date
                      title
                      featured_media {
                        source_url
                      }
                      excerpt
                    }
                  }
                }
              }
            `,
            output: "/blog/rss.xml",
            title: "ByteSchool RSS Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: "^/blog/",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        ignore: ['/src/style/prism.css'], // Ignore files/folders
        //purgeOnly: ['./node_modules/bootstrap/scss/bootstrap.scss/'], // Purge only these files/folders
      }
    },
    "gatsby-plugin-netlify",
    `gatsby-plugin-twitter`,
  ],
}
