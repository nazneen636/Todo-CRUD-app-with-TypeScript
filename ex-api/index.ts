import app from "./app";
import { connectionDB } from "./database/db";
require("dotenv").config();
connectionDB().then(() => {
  try {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on http://localhost:${process.env.PORT}/`);
    });
  } catch (error) {
    console.log("database connection failed", error);
  }
});
