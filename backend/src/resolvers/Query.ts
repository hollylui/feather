const customerDB = require("../assets/database/customerDB");
const insuranceTypeDB = require("../assets/database/insuranceTypeDB");
const policyStatusDB = require("../assets/database/policyStatusDB");
const policyDB = require("../assets/database/policyDB");

const Query = {
  customer: (parent: any, args: any, context: any) => customerDB,
  insuranceType: (parent: any, args: any, context: any) => insuranceTypeDB,
  policyStatus: (parent: any, args: any, context: any) => policyStatusDB,
  policy: (parent: any, args: any, context: any) => policyDB,
};

module.exports = Query;
