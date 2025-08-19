import { Request, Response } from "express";
import { UserServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import { HttpStatus } from "../../utils/httpStatusCodes";

const createUser = async (req: Request, res: Response) => {
  const data = await UserServices.createUser(req.body);
  sendResponse(res, {
    success: true,
    message: "New user created successfully.",
    statusCode: HttpStatus.CREATED,
    data,
  });
};

export const UserController = { createUser };
