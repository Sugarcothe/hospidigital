import { doctorsModel } from "../models/doctors.js";
import bcrypt from "bcryptjs";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newDoctor = await new doctorsModel({
      ...req.body,
      password: hash,
    });

    await newDoctor.save();
    res
      .status(200)
      .json(
        `Welcome Dr. ${newDoctor.firstName}, Your account is created succesfully`
      );
  } catch (err) {
    res.status(400).json(err);
  }
};
