import {userModel} from "../models/patients.js";

export const register = async(req, res, next) => {
    const newPatients = new patients({...req.body})
    try {
    await newPatients.save();
    res.status(200).send("Patients record created successfully")
    } catch(err){
        res.status(400).json({message: err.message})
    }
   
}