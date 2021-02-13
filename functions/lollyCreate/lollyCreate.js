const { ApolloServer, gql } = require("apollo-server-lambda")
const faunadb = require("faunadb"),
  q = faunadb.query
const typeDefs = gql`
  type Query {
    getLollyCards: [lollyCard]
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

const resolvers = {
  Query: {
    getLollyCards: (root, args, context) => {
      return [{}]
    },
  },
  Mutation: {
    createLollyCard: async (
      _,
      { color1, color2, color3, to, messageBody, from, Id }
    ) => {
      try {
        var adminClient = new faunadb.Client({
          secret: "fnAEBfN2CrACCaU2iTWD2kpuU50zWoVpN6bP1zDl",
        })

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
        return result.data.data
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
