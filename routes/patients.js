import express from "express"
import { register, login } from "../controllers/patients.js";


export const LoginAndRegisterRouter = express.Router();

LoginAndRegisterRouter.post("/registerPatients", register)
LoginAndRegisterRouter.post("/loginPatients", login);