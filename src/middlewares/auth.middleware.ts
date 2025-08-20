import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/AppError";
import { HttpStatus } from "../utils/httpStatusCodes";
import jwt, { JwtPayload } from "jsonwebtoken";
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

const verifyAuth =
  (...roles: ("admin" | "customer" | "delivery_agent")[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.cookies.authorization;
      if (!token) throw new AppError("Forbidden.", HttpStatus.FORBIDDEN);
      const decoded = jwt.verify(token, envVars.JWT_SECRET) as JwtPayload;
      if (!roles.includes(decoded.role)) {
        throw new AppError("Forbidden.", HttpStatus.FORBIDDEN);
      }

      console.log(decoded);
      next();
    } catch (error) {
      throw new AppError("Forbidden.", HttpStatus.FORBIDDEN);
    }
  };

export const AuthMiddlewares = { verifyLogin, verifyAuth };
