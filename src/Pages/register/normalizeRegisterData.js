const normalizeRegisterData = (inputsValue) => {
  return {
    name: {
      first: inputsValue.first,
      middle: inputsValue.middle || "",
      last: inputsValue.last,
    },
    address: {
      country: inputsValue.country,
      city: inputsValue.city,
      street: inputsValue.street,
      houseNumber: inputsValue.houseNumber,
    },
    phone: inputsValue.phone,
    email: inputsValue.email,
    password: inputsValue.password,
  };
};
export { normalizeRegisterData };
