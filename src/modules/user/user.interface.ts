import { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: "customer" | "admin" | "delivery_agent";
  matchPassword(enteredPassword: string): Promise<boolean>;
  generateAuthToekn(): string;
}
