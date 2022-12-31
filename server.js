import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import { patientsRouter } from "./routes/patients.js";
import { doctorsRouter} from "./routes/doctors.js";

const app = express();

dotenv.config();
mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGODB).catch((error) => console.log(error));

// To handle errors after initial connection
mongoose.connection.on("error", (err) => {
  console.log("Error occur after initial connection on mongoDb db: " + err);
});

mongoose.connection.on("connect", () => {
  console.log("DB Connection established");
});

app.use(express.json());

app.use("/api/vi/auth", patientsRouter);
app.use("/api/vi/auth", doctorsRouter);

app.listen(process.env.PORT, () => {
  console.log(`server is listening on port ${process.env.PORT}`);
});
