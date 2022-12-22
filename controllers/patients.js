import Patients from "../models/patients.js";

export const register = async (req, res, next) => {
  try {
    const newPatients = new Patients({
      ...req.body,
    });

    await newPatients.save();
    res.status(200).send("User has been created.");
  } catch (err) {
    next(err);
  }
};
