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

const createDeliveryAgent = async (req: Request, res: Response) => {
  const data = await UserServices.createDeliveryAgent(req.body);
  sendResponse(res, {
    success: true,
    message: data.message,
    statusCode: HttpStatus.CREATED,
    data,
  });
};

const login = async (req: Request, res: Response) => {
  const data = await UserServices.login(req.body);
  res.cookie("authorization", data.token);
  sendResponse(res, {
    success: true,
    message: data.message,
    statusCode: HttpStatus.OK,
    data,
  });
};

export const UserController = { createUser, createDeliveryAgent, login };
