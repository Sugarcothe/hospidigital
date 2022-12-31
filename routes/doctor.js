import express from "express"
import {register} from "../controllers/doctors.js"

const doctorsRouter = express.Router()

doctorsRouter.post("/doctorsRegister", register)