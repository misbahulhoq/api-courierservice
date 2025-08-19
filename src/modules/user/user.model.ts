import mongoose from "mongoose";
import { IUser } from "./user.interface";
import bcrypt from "bcryptjs";
import envVars from "../../config/env.config";

const userSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: [6, "Password must be at least 6 characters long"],
    select: false,
  },
  role: {
    type: String,
    enum: ["customer", "admin", "delivery_agent"],
    default: "customer",
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, envVars.BCRYPT_SALT_ROUNDS);
  next();
});

export const User = mongoose.model("User", userSchema);
export type UserDocument = mongoose.Document & IUser;
export type UserModel = mongoose.Model<UserDocument>;
