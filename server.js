import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();
mongoose.set("strictQuery", false);

try {
  await mongoose.connect(process.env.MONGODB);
  console.log("Connected to database successfully");
} catch (error) {
  console.log(error);
}

app.listen(process.env.PORT, () => {
  console.log(`server is listening on port ${process.env.PORT}`);
});
