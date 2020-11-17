/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// const path = require(`path`)

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const result = await graphql(`
//     query {
//         allInternalPosts(filter: {id: {ne: "dummy"}}) {
//         edges {
//           node {
//             name
//             edited
//           }
//         }
//       }
//     }
//   `)

//   result.data.allInternalPosts.edges.forEach(({ node }) => {
//     const friendlyPageName = (node.name) ? node.name.toLowerCase().replace(" ", "-") : null;
//     createPage({
//       component: path.resolve(`./src/templates/post.js`),
//       path: '/posts/' + friendlyPageName,
//       context: {
//         lastmoddate: node.edited
//       },
//     })
//   })
// }

