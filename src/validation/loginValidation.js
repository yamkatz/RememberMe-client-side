import Joi from "joi";
import validation from "./validation";

const loginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.email": "Email must be a valid email address",
    }),
  password: Joi.string()
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*-])[A-Za-z\d!@#$%^&*-]{6,}$/
    )
    .min(7)
    .max(20)
    .required()
    .messages({
      "string.pattern.base": "Password is incorrect",
      "string.min": "Password must be at least 7 characters long",
      "string.max": "Password must be at most 20 characters long",
    }),
});

const validateLogin = (inputToCheck) => validation(loginSchema, inputToCheck);

export { validateLogin };
