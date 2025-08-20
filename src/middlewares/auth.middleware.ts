import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/AppError";
import { HttpStatus } from "../utils/httpStatusCodes";
import jwt from "jsonwebtoken";
import envVars from "../config/env.config";
const verifyLogin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authToken = req.cookies.authorization;
    if (!authToken) {
      throw new AppError(
        "You are not allowed to access.",
        HttpStatus.FORBIDDEN
      );
    }
    jwt.verify(authToken, envVars.JWT_SECRET);
    next();
  } catch (err) {
    throw new AppError("Forbidden.", HttpStatus.FORBIDDEN);
  }
};

const verifyAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const AuthMiddlewares = { verifyLogin, verifyAuth };
