export const Query = {
  policy: (parent, args, { policy }) => policy,
  insuranceType: (parent, args, { insuranceType }) => insuranceType,
  customers: (parent, args, { customers }) => customers,
  status: (parent, args, { status }) => status,
  albums: (parent, args, { albums }) => albums,
  albumFilter: (parent, args, { albums }) => {
    console.log(albums, args.input.name);
    const album = albums.filter((album) => {
      console.log(album.name);
      return album.name.includes(args.input.name);
    });
    return album;
  },
  policyFilter: (parent, args, { policy }) => {
    let filterCustomer = policy.filter((data) => {
      console.log(args);
      console.log(data.customer[0].firstName);

      const filterData = data.customer[0].firstName
        .toLowerCase()
        .includes(args.input.customer);
      return filterData;
    });

    return filterCustomer;
  },
};
