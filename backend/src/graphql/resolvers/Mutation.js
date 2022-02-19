export const Mutation = {
  editInsuranceType: (
    parent,
    { slug, liability, household, health },
    { insuranceType }
  ) => {
    let index = insuranceType.findIndex((insurance) => insurance.slug === slug);
    const updateInsuranceType = insuranceType[index];

    updateInsuranceType.liability = liability;
    updateInsuranceType.household = household;
    updateInsuranceType.health = health;

    return updateInsuranceType;
  },
  editCustomer: (parent, { slug, firstName, lastName }, { customers }) => {
    let index = customers.findIndex((customer) => customer.slug === slug);
    const updateCustomer = customers[index];
    updateCustomer.firstName = firstName;
    updateCustomer.lastName = lastName;
    return updateCustomer;
  },
};
