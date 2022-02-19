import { insuranceType } from "./insuranceType";
import { customers } from "./customers";
import { status } from "./status";

export const policy = [
  {
    id: "1",
    customer: [customers[0]],
    provider: "AXA",
    insuranceType: [insuranceType[0]],
    status: [status[0]],
    policyNumber: "1111",
    startDate: "1597960800000",
    endDate: "1755727200000",
    createdAt: "1596232800000",
  },
  {
    id: "2",
    customer: [customers[1]],
    provider: "Allianz",
    insuranceType: [insuranceType[1]],
    status: [status[1]],
    policyNumber: "2222",
    startDate: "1315605600000",
    endDate: "1347228000000",
    createdAt: "1314828000000",
  },
  {
    id: "3",
    customer: [customers[2]],
    provider: "TK",
    insuranceType: [insuranceType[2]],
    status: [status[2]],
    policyNumber: "3333",
    startDate: "1643670000000",
    endDate: "1675206000000",
    createdAt: "1640991600000",
  },
  {
    id: "4",
    customer: [customers[3]],
    provider: "AOK",
    insuranceType: [insuranceType[3]],
    status: [status[3]],
    policyNumber: "4444",
    startDate: "1639177200000",
    endDate: "1828479600000",
    createdAt: "1639004400000",
  },
];
