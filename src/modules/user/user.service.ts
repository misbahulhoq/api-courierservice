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

export const UserServices = { createUser };
