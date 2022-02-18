const { gql } = require("apollo-server");

export const typeDefs = gql`
  type Customer {
    firstName: String!
    lastName: String!
    dateOfBirth: String!
  }

  type InsuranceType {
    liability: Boolean
    household: Boolean
    health: Boolean
  }

  type Status {
    active: Boolean
    cancelled: Boolean
    pending: Boolean
    droppedOut: Boolean
  }

  type Policy {
    id: ID!
    customer: [Customer]
    provider: String!
    insuranceType: [InsuranceType]
    status: [Status]
    policyNumber: String!
    startDate: String!
    endDate: String!
    createdAt: String!
  }

  type Query {
    policy: [Policy]
  }
`;
