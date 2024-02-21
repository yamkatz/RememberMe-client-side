const validateEditCard = (inputToCheck) => {
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

  if (
    !inputToCheck.age ||
    inputToCheck.age.length < 1 ||
    inputToCheck.age.length > 100 ||
    isNaN(inputToCheck.age)
  ) {
    errors.age =
      "Invalid age value, Age must be a number, an integer, at least 1 and at most 100";
  }

  const cityPattern = /^[a-zA-Z\s,'-]{2,50}$/;
  if (!cityPattern.test(inputToCheck.city)) {
    errors.city =
      "Invalid City value, City must be a string, at least 2 characters and at most 50 characters";
  }

  const descriptionPattern = /^[a-zA-Z\s,'\-.]+$/;
  if (
    inputToCheck.description &&
    !descriptionPattern.test(inputToCheck.description)
  ) {
    errors.description =
      "Invalid description name, Description must be a string";
  }

  if (inputToCheck.image) {
    const { url, alt } = inputToCheck.image;
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
    if (url && !urlPattern.test(url)) {
      errors.image = { ...(errors.image || {}), url: "Invalid URL" };
    }

    const altPattern = /^[a-zA-Z\s,'-]{2,20}$/;
    if (alt && !altPattern.test(alt)) {
      errors.image = { ...(errors.image || {}), alt: "Invalid Alt value" };
    }
  }

  const casualtiesOfWarPattern = /^(emergency squad|IDF|police)?$/;
  if (
    inputToCheck.casualtiesOfWar &&
    !casualtiesOfWarPattern.test(inputToCheck.casualtiesOfWar)
  ) {
    errors.casualtiesOfWar = "Invalid casualties of war value";
  }

  const userIdPattern = /^[a-f\d]{24}$/i;
  if (inputToCheck.userId && !userIdPattern.test(inputToCheck.userId)) {
    errors.userId = "Invalid UserId value";
  }

  return Object.keys(errors).length === 0 ? null : errors;
};

export { validateEditCard };
