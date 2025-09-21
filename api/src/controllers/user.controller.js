const apiResponse = require("../helpers/apiResponse");
const { asyncHandler } = require("../helpers/asyncHandler");

exports.registration = asyncHandler(async (req, res) => {
  console.log("ok");
  apiResponse.sendSuccess(201, "User registered successfully!", data);
});
