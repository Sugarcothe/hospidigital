import {usersPatientsModel} from "../models/patients.js";

export const register = async (req, res, next) => {
  try {
    const newPatients = new usersPatientsModel({
      ...req.body,
    });

    await newPatients.save();
    res.status(200).send("Patient account has been created.");
  } catch (err) {
    next(err);
  }
};
