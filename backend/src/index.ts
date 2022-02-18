//! From library
import { ApolloServer, gql } from "apollo-server";
const { GraphQLScalarType, Kind } = require("graphql");

//! From local
const typeDefs = require("./schema/schema");
const Query = require("./resolvers/Query");

//! Database
const customerDB = require("./assets/database/customerDB");
const insuranceTypeDB = require("./assets/database/insuranceTypeDB");
const policyStatusDB = require("./assets/database/policyStatusDB");
const policyDB = require("./assets/database/policyDB");

// ----------------------------------------------------------

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
// const resolvers = {
//   Query,
//   context: { customer, insuranceType, policyStatus, policy },
// };

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
  },
  context: { customerDB, insuranceTypeDB, policyStatusDB, policyDB },
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
