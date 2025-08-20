import mongoose from "mongoose";
import { envVars } from "./env.config";

export const connectDB = async () => {
  try {
    await mongoose.connect(envVars.MONGO_URI).then(() => {
      console.log("Connected to MongoDB");
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
