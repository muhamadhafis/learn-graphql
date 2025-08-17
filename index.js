import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { books, members, products } from "./_db.js";

const typeDefs = `#graphql
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

  type Products{
    id: ID!
    name: String!
    stock: Int!
    location: String
    sku: String
    bundle: Int!
    unit: String!
  }

  type Query {
    books: [Books!]!
    book(id: ID!): Books!
    members: [Members!]!
    member(id: ID!): Members!
    products: [Products!]!
    product(id: ID, location: String): [Products!]!
  }`;

const resolvers = {
  Query: {
    books: () => books,
    book: (_, args) => books.find((book) => book.id == args.id),
    members: () => members,
    member: (_, args) => members.find((member) => member.id == args.id),
    products: () => products,
    product: (_, args) => products.find((p) => p.location == args.location),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at: ${url}`);
