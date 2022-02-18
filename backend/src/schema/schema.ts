const { gql } = require("apollo-server");

const typeDefs = gql`
  scalar Date

  type Customer {
    firstName: String!
    lastName: String!
    dateOfBirth: Date!
  }

  type InsuranceType {
    liability: Boolean!
    household: Boolean!
    health: Boolean!
  }

  type PolicyStatus {
    active: Boolean!
    pending: Boolean!
    cancelled: Boolean!
    droppedOut: Boolean!
  }

  type Policy {
    customer: [Customer!]!
    provider: String
    insruanceType: [InsuranceType!]!
    policyStatus: [PolicyStatus!]!
    policyNum: String!
    stateDate: Date!
    endDate: Date!
    createdAt: Date!
  }

  type Query {
    customer: [Customer!]!
    insuranceType: [InsuranceType!]!
    policyStatus: [PolicyStatus!]!
    policy: [Policy!]!
  }
`;

module.exports = typeDefs;
