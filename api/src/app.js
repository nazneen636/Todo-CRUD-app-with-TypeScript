const express = require("express");
const app = express();
const cors = require("cors");
const { globalErrorHandle } = require("./helpers/globalErrorHandler");
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

// route
app.use("/api/v1", require("./routes/index.api"));

// global error
app.use(globalErrorHandle);

module.exports = { app };
