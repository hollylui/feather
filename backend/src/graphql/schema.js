const { gql } = require("apollo-server");

export const typeDefs = gql`
  type Customer {
    id: ID!
    firstName: String!
    lastName: String!
    dateOfBirth: String!
  }

  type InsuranceType {
    id: ID!
    liability: Boolean
    household: Boolean
    health: Boolean
  }

  type Status {
    id: ID!
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
    insuranceType: [InsuranceType]
    customers: [Customer]
  }

  type Mutation {
    updateInsuranceType(
      id: ID!
      liability: Boolean!
      household: Boolean!
      health: Boolean!
    ): InsuranceType

    updateCusotmer(id: ID!, firstName: String!, lastName: String!): Customer
  }
`;
