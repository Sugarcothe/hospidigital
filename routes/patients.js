import express from "express"
import { register } from "../controllers/patients";


const router = express.Router();

router.post("/registerPatients", register)

export default router