//! From library
import { ApolloServer, gql } from "apollo-server";

//! From local
import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";

// ----------------------------------------------------------

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
