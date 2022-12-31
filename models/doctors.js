import mongoose from "mongoose";
export const doctorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
  alias: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  doctorsID: {
    type: Number,
    unique: true,
    required: true,
  },
  department: {
    type: String,
    unique: true,
    required: true,
  },
  gender: {
    type: String,
    unique: true,
  }
});

export const doctorsModel = mongoose.model("doctors", doctorSchema);
