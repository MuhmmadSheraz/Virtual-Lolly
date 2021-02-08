const { ApolloServer, gql } = require("apollo-server-lambda")
const faunadb = require("faunadb"),
  q = faunadb.query
const shortid = require("shortid")
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
    link: String!
  }
  type Mutation {
    createLollyCard(
      color1: String!
      color2: String!
      color3: String!
      to: String!
      from: String!
      messageBody: String!
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
      { color1, color2, color3, to, messageBody, from }
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
          from
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
              link: shortid.generate(),
            },
          })
        )
        return result.data.data
      } catch (err) {
        console.log("Mutation Catch Error===>", err)
      }
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const handler = server.createHandler()

module.exports = { handler }
