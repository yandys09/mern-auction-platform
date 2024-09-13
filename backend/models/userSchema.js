import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userShcema = new mongoose.Schema({
  userName: {
    type: String,
    minLength: [3, "User must contain at least 3 characters."],
    maxLength: [40, "Username cannot exceed 40 characters"],
  },
  password: {
    type: String,
    selected: false,
    minLength: [8, "Password must contain at least 8 characters."],
    maxLength: [32, "Password cannot exceed 32 characters"],
  },
  email: String,
  address: String,
  phone: {
    type: String,
    selected: false,
    minLength: [11, "Phone Number must contain exact 11 digits."],
    maxLength: [11, "Phone Number must contain exact 11 digits."],
  },
  profileImage: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  paymentMethods: {
    bankTransfer: {
      bankAccountNumber: String,
      bankAccountName: String,
      bankName: String,
    },
    easypaisa: {
      easypaisaAccountNumber: Number,
    }
  },
});
