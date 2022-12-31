import mongoose from "mongoose";
export const doctorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lasttName: {
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
    type: Number,
    unique: true,
    required: true,
  },
  gender: [{
    male: String,
    female: String,
  }]
});

export const doctorsModel = mongoose.model("doctors", doctorSchema);
