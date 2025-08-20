import mongoose from "mongoose";
import { IUser } from "./user.interface";
import bcrypt from "bcryptjs";
import envVars from "../../config/env.config";
import jwt from "jsonwebtoken";

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

userSchema.methods.matchPassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateAuthToekn = function () {
  return jwt.sign(
    { id: this._id, email: this.email, role: this.role },
    envVars.JWT_SECRET
  );
};

export const User = mongoose.model<IUser>("User", userSchema);
export type UserDocument = mongoose.Document & IUser;
export type UserModel = mongoose.Model<UserDocument>;
