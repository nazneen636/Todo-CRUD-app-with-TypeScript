const apiResponse = require("../helpers/apiResponse");
const { asyncHandler } = require("../helpers/asyncHandler");
const { validateUser } = require("../validations/user.validation");
const userModel = require("../models/user.modal");
exports.registration = asyncHandler(async (req, res) => {
  const value = await validateUser(req);
  const userData = await new userModel({
    name: value.name,
    email: value.email || null,
    password: value.password,
  }).save();
  console.log(value);
  apiResponse.sendSuccess(res, 201, "User registered successfully!", userData);
});
