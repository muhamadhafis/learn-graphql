import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { books, members, products, lendings } from "./_db.js";

const typeDefs = `#graphql
  type Books{
    id: ID!
    title: String!
    author: String!
    publish_at: String!
    category: String!
    price: Int!
    lendings: [Lendings!]
  }

  type Members{
    id: ID!
    name: String!
    email: String!
    verified: Boolean!
    lendings: [Lendings!]
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

  type Lendings{
    id: ID!
    book_id: Books!
    member_id: Members!
    borrowed_at: String!
    returned_at: String!
  }

  type Query {
    books: [Books!]!
    book(id: ID!): Books!
    members: [Members!]!
    member(id: ID!): Members!
    products: [Products!]!
    product(id: ID!): Products!
    lendings: [Lendings!]
    lending(id: ID!): Lendings!
  }`;

const resolvers = {
  Query: {
    books: () => books,
    book: (_, args) => books.find((b) => b.id == args.id),
    members: () => members,
    member: (_, args) => members.find((m) => m.id == args.id),
    products: () => products,
    product: (_, args) => products.find((p) => p.id == args.id),
    lendings: () => lendings,
    lending: (_, args) => lendings.fing((l) => l.id == args.id),
  },
  Books: {
    lendings(parents) {
      return lendings.filter((l) => l.book_id == parents.id);
    },
  },
  Members: {
    lendings(parents) {
      return lendings.filter((l) => l.member_id == parents.id);
    },
  },
  Lendings: {
    book_id(parents) {
      return books.find((b) => b.id == parents.book_id);
    },
    member_id(parents) {
      return members.find((m) => m.id == parents.member_id);
    },
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
