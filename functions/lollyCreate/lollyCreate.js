const { ApolloServer, gql } = require("apollo-server-lambda")
const faunadb = require("faunadb"),
  q = faunadb.query
const typeDefs = gql`
  type Query {
    getLollyCards: [lollyCard]
    getCustomLolly(Id: String): lollyCard
  }
  type lollyCard {
    color1: String!
    color2: String!
    color3: String!
    to: String!
    from: String!
    messageBody: String!
    Id: String!
  }
  type Mutation {
    createLollyCard(
      color1: String!
      color2: String!
      color3: String!
      to: String!
      from: String!
      messageBody: String!
      Id: String!
    ): lollyCard
  }
`

const adminClient = new faunadb.Client({
  secret: "fnAEBfN2CrACCaU2iTWD2kpuU50zWoVpN6bP1zDl",
})
const resolvers = {
  Query: {
    getLollyCards: async (root, args, context) => {
      const adminClient = new faunadb.Client({
        secret: "fnAEBfN2CrACCaU2iTWD2kpuU50zWoVpN6bP1zDl",
      })
      var result = await adminClient.query(
        q.Map(
          q.Paginate(q.Documents(q.Collection("lollyCards"))),
          q.Lambda(x => q.Get(x))
        )
      )

      return result.data.map(item => {
        return {
          color1: item.data.color1,
          color2: item.data.color2,
          color3: item.data.color3,
          to: item.data.to,
          from: item.data.from,
          messageBody: item.data.messageBody,
          Id: item.data.Id,
        }
      })
    },
    getCustomLolly: async (_, { Id }) => {
      console.log("Id =========>", Id)
      try {
        const adminClient = new faunadb.Client({
          secret: "fnAEBfN2CrACCaU2iTWD2kpuU50zWoVpN6bP1zDl",
        })
        const result = await adminClient.query(
          q.Get(q.Match(q.Index("customLolly"), Id))
        )
        console.log("result.data.data===>", result.data)
        return result.data
      } catch (err) {
        console.log(err.message)
      }
    },
  },

  Mutation: {
    createLollyCard: async (
      _,
      { color1, color2, color3, to, messageBody, from, Id }
    ) => {
      try {
        console.log(
          "from Mutation====>",
          color1,
          color2,
          color3,
          to,
          messageBody,
          from,
          Id
        )

        const adminClient = new faunadb.Client({
          secret: "fnAEBfN2CrACCaU2iTWD2kpuU50zWoVpN6bP1zDl",
        })
        const result = await adminClient.query(
          q.Create(q.Collection("lollyCards"), {
            data: {
              color1,
              color2,
              color3,
              to,
              messageBody,
              from,
              Id,
            },
          })
        )
        console.log("result.data===>", result.data)
        return result.data
      } catch (err) {
        console.log("Mutation Catch Error===>", err.message)
      }
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
})

const handler = server.createHandler()

module.exports = { handler }
