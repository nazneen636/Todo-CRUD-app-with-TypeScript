const express = require("express");
const _ = express.Router();
const userController = require("../../controllers/user.controller");
_.route("/registration").post(userController.registration);

module.exports = _;
