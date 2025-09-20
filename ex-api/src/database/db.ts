import mongoose from "mongoose";
import dotenv from "dotenv";
import chalk from "chalk";
dotenv.config();

export const connectionDB = async () => {
  try {
    const dbInfo = await mongoose.connect(
      `${process.env.MONGODB_URL}task_management`
    );
    console.log(
      chalk.bgGreen(
        `Database connection successfully ${dbInfo.connection.host}`
      )
    );
  } catch (err) {
    console.log(chalk.bgRed("Database connection failed", err));
  }
};
