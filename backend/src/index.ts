//! From library
import { ApolloServer, gql } from "apollo-server";

//! From local
import { typeDefs } from "./graphql/schema";
import { Query } from "./graphql/resolvers/Query";
import { Mutation } from "./graphql/resolvers/Mutation";
import { policy } from "./database/policy";
import { insuranceType } from "./database/insuranceType";
import { customers } from "./database/customers";

// ----------------------------------------------------------

const server = new ApolloServer({
  typeDefs,
  resolvers: { Query, Mutation },
  context: { policy, insuranceType, customers },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
