import Joi, { required } from "joi";

const userSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    "string.empty": "Name is required",
    "string.min": "Name must be at least 3 characters",
    "string.max": "Name cannot exceed 30 characters",
  }),

  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Please enter a valid email address",
    }),

  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{6,30}$")) // <-- updated
    .required()
    .messages({
      "string.empty": "Password is required",
      "string.pattern.base":
        "Password must be 6–30 characters long and contain only letters or numbers",
    }),
});

export default userSchema;
