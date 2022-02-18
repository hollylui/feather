export const policy = [
  {
    id: "1",
    customer: [
      { firstName: "Holly1", lastName: "Lui1", dateOfBirth: "818031600000" },
    ],
    provider: "AXA",
    insuranceType: [{ liability: true, household: true, health: false }],
    status: [
      { active: true, cancelled: false, pending: false, droppedOut: false },
    ],
    policyNumber: "1111",
    startDate: "1597960800000",
    endDate: "1755727200000",
    createdAt: "1596232800000",
  },
  {
    id: "2",
    customer: [
      { firstName: "Holly2", lastName: "Lui2", dateOfBirth: "965080800000" },
    ],
    provider: "Allianz",
    insuranceType: [{ liability: true, household: false, health: false }],
    status: [
      { active: false, cancelled: true, pending: false, droppedOut: false },
    ],
    policyNumber: "2222",
    startDate: "1315605600000",
    endDate: "1347228000000",
    createdAt: "1314828000000",
  },
  {
    id: "3",
    customer: [
      { firstName: "Holly3", lastName: "Lui3", dateOfBirth: "160700400000" },
    ],
    provider: "TK",
    insuranceType: [{ liability: true, household: false, health: false }],
    status: [
      { active: false, cancelled: false, pending: true, droppedOut: false },
    ],
    policyNumber: "3333",
    startDate: "1643670000000",
    endDate: "1675206000000",
    createdAt: "1640991600000",
  },
  {
    id: "4",
    customer: [
      { firstName: "Holly4", lastName: "Lui4", dateOfBirth: "933285600000" },
    ],
    provider: "AOK",
    insuranceType: [{ liability: false, household: true, health: false }],
    status: [
      { active: false, cancelled: false, pending: false, droppedOut: true },
    ],
    policyNumber: "4444",
    startDate: "1639177200000",
    endDate: "1828479600000",
    createdAt: "1639004400000",
  },
];
