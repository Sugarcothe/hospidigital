import express from "express"
import { register } from "../controllers/patients.js";


export const LoginAndRegisterRouter = express.Router();

LoginAndRegisterRouter.post("/registerPatients", register)