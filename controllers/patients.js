import patients from "../models/patients";

export const register = async(req, res, next) => {
    const newPatients = new patients({...req.body})
    await newPatients.save();
    res.status(200).send("Patients record created successfully")
}