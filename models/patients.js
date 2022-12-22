import mongoose from "mongoose";
const PatientsSchema = new mongoose.Schema(
  {
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
    dateOfBirth: {
      type: Date,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    phone: {
      type: String,
      required: true,
    },
    hospitalID: {
      type: Number,
      required: true,
      unique: true,
    },
    married: {
      type: Boolean,
      default: false,
    },
    nextOfKin: [
      {
        fullName: {
          type: String,
          required: true,
          unique: true,
        },
        phone: {
          type: Number,
          required: true,
        },
        address: {
          type: String,
          required: true,
        },
        relationship: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export const usersPatientsModel =  mongoose.model("User", PatientsSchema);
