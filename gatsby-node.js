const path = require(`path`)

exports.createPages = async ({ page, actions, graphql }) => {
  try {
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
          component: require.resolve(`./src/Components/LollyTemplate`),
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
  } catch (err) {
    console.log(err.message)
  }
}
