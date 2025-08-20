import { AppError } from "../../utils/AppError";
import { HttpStatus } from "../../utils/httpStatusCodes";
import { IUser } from "./user.interface";
import { User } from "./user.model";
import { createUserValidationSchema } from "./user.validation";

const createUser = async (payload: IUser) => {
  const userExists = await User.findOne({ email: payload.email });
  if (userExists)
    throw new AppError("User already exists", HttpStatus.CONFLICT);
  const parsedData = createUserValidationSchema.parse(payload);
  await User.create(parsedData);
  return { message: "User created successfully" };
};

const createDeliveryAgent = async (payload: Partial<IUser>) => {
  const userExists = await User.findOne({ email: payload.email });
  if (userExists)
    throw new AppError("User already exists", HttpStatus.CONFLICT);
  const parsedData = createUserValidationSchema.parse(payload);
  parsedData.role = "delivery_agent";
  await User.create(parsedData);
  return { message: "Delivery agent created successfully" };
};

const login = async (payload: IUser) => {
  const userExists = await User.findOne({ email: payload.email }).select(
    "+password"
  );
  if (!userExists) throw new AppError("User not found", HttpStatus.NOT_FOUND);
  const isValidPassword = await userExists.matchPassword(payload.password);
  if (!isValidPassword)
    throw new AppError("Invalid credentials.", HttpStatus.UNAUTHORIZED);

  const token = userExists.generateAuthToekn();

  return { message: "User logged in successfully", token };
};

export const UserServices = { createUser, createDeliveryAgent, login };
