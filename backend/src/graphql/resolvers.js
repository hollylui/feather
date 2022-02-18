import { policy } from "../database/policy";

export const resolvers = {
  Query: {
    policy: async () => policy,
  },
};
