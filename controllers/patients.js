import { usersPatientsModel } from "../models/patients.js";

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

export const login = async (req, res, next) => {
  try {
    const patient = await usersPatientsModel.findOne({
      hospitalID: req.body.hospitalID
    });
    await res.status(200).json({
      "Logged in succesfuly into patients dashboard": patient,
    });
  } catch (err) {
    next(err);
  }
};
