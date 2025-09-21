const mongoose = require("mongoose");
const chalk = require("chalk");
require("dotenv").config();
exports.connectionDb = async () => {
  try {
    const dbInfo = await mongoose.connect(
      `${process.env.MONGODB_URL}task_management`
    );
    console.log(
      chalk.bgGreen(`Database Connection successful ${dbInfo.connection.host}`)
    );
  } catch (error) {
    console.log(chalk.bgRed("database connection failed", error));
  }
};
