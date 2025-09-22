const apiResponse = require("../helpers/apiResponse");
const { asyncHandler } = require("../helpers/asyncHandler");
const { validateUser } = require("../validations/user.validation");
const userModel = require("../models/user.modal");
const crypto = require("crypto");
const { mailer } = require("../utils/nodemailer");
const { confirmRegistrationTemplate } = require("../utils/htmlTemplate");
const { log } = require("console");
const { customError } = require("../helpers/customError");
exports.registration = asyncHandler(async (req, res) => {
  const value = await validateUser(req);
  const userData = await new userModel({
    name: value.name,
    email: value.email || null,
    password: value.password,
  }).save();
  const otp = crypto.randomInt(1000, 9999);
  console.log(otp);

  const expiryTime = Date.now() + 10 * 60 * 1000;
  if (value.email) {
    const fLink = "https://github.com/nazneen636";
    const template = confirmRegistrationTemplate(
      userData.name,
      userData.email,
      "Confirm your registration",
      fLink,
      otp,
      expiryTime
    );
    await mailer(value.email, "Confirm your registration", template);
  }
  userData.otp = otp;
  userData.otpExpiry = new Date(expiryTime);
  await userData.save();
  console.log(expiryTime);
  apiResponse.sendSuccess(res, 201, "User registered successfully!", userData);
});

exports.verifyEmail = asyncHandler(async (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) {
    throw new customError(401, "email or otp missing");
  }
  const user = await userModel.findOne({
    $and: [{ email: email }, { otp: otp }, { otpExpiry: { $gt: Date.now() } }],
  });
  if (!user) {
    throw new customError(401, "user not found");
  }
  if (email && user.email === email) {
    user.emailIsVerified = true;
  }
  user.otp = null;
  user.otpExpiry = null;
  await user.save();
  apiResponse.sendSuccess(res, 200, "verify done", user);
});
