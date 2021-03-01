const path = require(`path`)

exports.createPages = async ({ page, actions, graphql }) => {
  const { data } = await graphql(`
    query MyQuery {
      Lollies {
        getLollyCards {
          Id
          color1
          color2
          color3
          messageBody
          to
          from
        }
      }
    }
  `)
  console.log("data===>", data.Lollies.getLollyCards)
  data.Lollies.getLollyCards.map(
    ({ Id, color1, color2, color3, messageBody, to, from }) => {
      console.log("Id ===>", Id)
      actions.createPage({
        path: `lolly/${Id}`,
        component: require.resolve(`./src/Template/index.js`),
        context: {
          Id: Id,
          color1: color1,
          color2: color2,
          color3: color3,
          messageBody: messageBody,
          to: to,
          from: from,
        },
      })
    }
  )
}
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/^\/lolly/)) {
    page.matchPath = "/Lollies/*"

    createPage(page)
  }
}
