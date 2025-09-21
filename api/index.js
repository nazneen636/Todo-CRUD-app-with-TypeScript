const chalk = require("chalk");
const { app } = require("./src/app");
const { connectionDb } = require("./src/database/db");
require("dotenv").config();

connectionDb().then(() => {
  try {
    app.listen(process.env.PORT || 5000, () => {
      console.log(
        chalk.bgBlue(
          `server is running on http://localhost:${process.env.PORT || 5000}/`
        )
      );
    });
  } catch (error) {
    console.log("database connection failed", error);
  }
});
