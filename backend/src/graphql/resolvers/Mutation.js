export const Mutation = {
  updateInsuranceType: (
    parent,
    { id, liability, household, health },
    { insuranceType }
  ) => {
    let index = insuranceType.findIndex((insurance) => insurance.id === id);
    const updateInsuranceType = insuranceType[index];

    updateInsuranceType.liability = liability;
    updateInsuranceType.household = household;
    updateInsuranceType.health = health;

    return updateInsuranceType;
    console.log(updateInsuranceType);
    console.log(insuranceType);
  },
  updateCusotmer: (parent, { id, firstName, lastName }, { customers }) => {
    let index = customers.findIndex((customer) => customer.id === id);
    customers[index].firstName = firstName;
    customers[index].lastName = lastName;
  },
};
