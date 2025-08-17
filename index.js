import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { books, members } from "./_db.js"

const typeDefs =  `#graphql
  type Books{
    id: ID!
    title: String!
    author: String!
    publish_at: String!
    category: String!
    price: Int!
  }

  type Members{
    id: ID!
    name: String!
    email: String!
    verified: Boolean!
  }

  type Query {
    books: [Books!]!
    members: [Members!]!
  }`

const resolvers = {
  Query: {
    books: () => {
      return books
    },
    members: () => {
      return members 
    }
  }
}

const server = new ApolloServer({
  typeDefs, resolvers
})

const {url} = await startStandaloneServer(server, {
  listen: {port: 4000}
})

console.log(`🚀 Server ready at: ${url}`)