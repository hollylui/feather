const customer = require("./customerDB");
const insruanceType = require("./insuranceTypeDB");
const policyStatus = require("./policyStatusDB");

const policy = [
  {
    customer: customer,
    provider: "Alizane",
    insruanceType: insruanceType,
    policyStatus: policyStatus,
    policyNum: "1223333",
    stateDate: 1223455,
    endDate: 1223455,
    createdAt: 1223455,
  },
];

module.exports = policy;
