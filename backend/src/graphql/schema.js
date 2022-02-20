const { gql } = require("apollo-server");

export const typeDefs = gql`
  type Customer {
    id: ID
    firstName: String
    lastName: String
    dateOfBirth: String
    slug: String
  }

  type InsuranceType {
    id: ID
    liability: Boolean
    household: Boolean
    health: Boolean
    slug: String
  }

  type Status {
    id: ID!
    active: Boolean
    cancelled: Boolean
    pending: Boolean
    droppedOut: Boolean
    slug: String
  }

  type Policy {
    id: ID
    customer: [Customer]
    provider: String
    insuranceType: [InsuranceType]
    status: [Status]
    policyNumber: String
    startDate: String
    endDate: String
    createdAt: String
  }

  type Album {
    id: ID
    name: String
  }

  input AlbumsInputFilter {
    id: ID
    name: String
  }

  input PolicyInputFilter {
    id: ID
    customer: String
    provider: String
    insuranceType: String
    status: String
    policyNumber: String
    startDate: String
    endDate: String
    createdAt: String
  }

  type Query {
    policy: [Policy]
    insuranceType: [InsuranceType]
    customers: [Customer]
    status: [Status]
    albums: [Album]
    albumFilter(input: AlbumsInputFilter): [Album]
    policyFilter(input: PolicyInputFilter): [Policy]
  }

  type Mutation {
    editInsuranceType(
      slug: String!
      liability: Boolean
      household: Boolean
      health: Boolean
    ): InsuranceType

    editCustomer(slug: String!, firstName: String!, lastName: String!): Customer
  }
`;
