const registerValidation = (inputToCheck) => {
  const errors = {};

  const firstPattern = /^[a-zA-Z\s,'-]{2,20}$/;
  if (!firstPattern.test(inputToCheck.first)) {
    errors.first =
      "Invalid first name, First name must be a string, at least 2 characters and at most 20 characters";
  }

  const middlePattern = /^[a-zA-Z\s,'-]/;
  if (inputToCheck.middle && !middlePattern.test(inputToCheck.middle)) {
    errors.middle = "Invalid middle name, Middle name must be a string";
  }

  const lastPattern = /^[a-zA-Z\s,'-]{2,20}$/;
  if (!lastPattern.test(inputToCheck.last)) {
    errors.last =
      "Invalid last name, Last name must be a string, at least 2 characters and at most 20 characters";
  }

  const countryPattern = /^[a-zA-Z\s,'-]{2,50}$/;
  if (!countryPattern.test(inputToCheck.country)) {
    errors.country =
      "Invalid Country value, Country must be a string, at least 2 characters and at most 50 characters";
  }

  const cityPattern = /^[a-zA-Z\s,'-]{2,50}$/;
  if (!cityPattern.test(inputToCheck.city)) {
    errors.city =
      "Invalid City value, City must be a string, at least 2 characters and at most 256 characters";
  }

  const streetPattern = /^[a-zA-Z\s,'-]{2,50}$/;
  if (!streetPattern.test(inputToCheck.street)) {
    errors.street =
      "Invalid Street value, Street must be a string, at least 2 characters and at most 50 characters";
  }

  const houseNumberPattern = /^[1-9]\d*$/;
  if (!houseNumberPattern.test(inputToCheck.houseNumber)) {
    errors.houseNumber =
      "Invalid House Number value, House Number must be a number, an integer, at least 1 and at most 999";
  }

  const phonePattern = /^((\+972|0)([23489]|5[02468]|77)-?[1-9]\d{6})$/;
  if (!phonePattern.test(inputToCheck.phone)) {
    errors.phone =
      "Invalid phone number, Phone must be at least 9 characters long and at most 15 characters long";
  }

  const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!emailPattern.test(inputToCheck.email)) {
    errors.email =
      "Invalid email address, Email must be at least 7 characters long";
  }

  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*-])[A-Za-z\d!@#$%^&*-]{7,20}$/;
  if (!passwordPattern.test(inputToCheck.password)) {
    errors.password = "Invalid password";
  }

  return Object.keys(errors).length === 0 ? null : errors;
};

export { registerValidation };
