import express from "express"
import { register, login } from "../controllers/patients.js";


export const patientsRouter = express.Router();

patientsRouter.post("/registerPatients", register)
patientsRouter.post("/loginPatients", login);