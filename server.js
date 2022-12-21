import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import patientsRouter from "./models/patients.js"

const app = express();
dotenv.config();
mongoose.set("strictQuery", false);

try {
  await mongoose.connect(process.env.MONGODB);
  console.log("Connected to database successfully");
} catch (error) {
  console.log(error);
}

app.use(express.json());

app.use("/api/patients", patientsRouter)

app.listen(process.env.PORT, () => {
  console.log(`server is listening on port ${process.env.PORT}`);
});
