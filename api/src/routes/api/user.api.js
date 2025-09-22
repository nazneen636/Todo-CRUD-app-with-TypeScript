const express = require("express");
const _ = express.Router();
const userController = require("../../controllers/user.controller");
_.route("/registration").post(userController.registration);
_.route("/verify-email").post(userController.verifyEmail);
_.route("/login").post(userController.login);

module.exports = _;
