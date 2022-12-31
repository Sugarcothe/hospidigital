import express from "express"
import {register} from "../controllers/doctors.js"

export const doctorsRouter = express.Router()

doctorsRouter.post("/registerDoctors", register)