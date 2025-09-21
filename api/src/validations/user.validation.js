const Joi = require("joi");
const { customError } = require("../helpers/customError");
const userValidationSchema = Joi.object(
  {
    name: Joi.string().empty().min(3).trim().max(30).required().messages({
      "string.empty": "Name is required",
      "string.min": "Name must be at least 5 characters long",
      "string.max": "Name must not exceed 20 characters",
      "string.base": "Name must be a text",
    }),

    email: Joi.string()
      .trim()
      .email({ tlds: { allow: false } })
      .required()
      .messages({
        "string.empty": "Email is required",
        "string.email": "Please enter a valid email address",
      }),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).messages({
      "string.empty": "Password is required",
      "string.pattern.base":
        "Password must be 6–30 characters long and contain only letters or numbers",
    }),

    //   repeat_password: Joi.ref("password"),
  },
  { abortEarly: true }
).unknown(true);

const validateUser = async (req) => {
  try {
    const value = userValidationSchema.validateAsync(req.body);
    return value;
  } catch (error) {
    throw new customError(
      401,
      "user validation error " + error.details.map((err) => err.message)
    );
  }
};
module.exports = { validateUser };
