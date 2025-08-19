import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/AppError";
import envVars from "../config/env.config";
import { ZodError } from "zod";
import { HttpStatus } from "../utils/httpStatusCodes";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let message = "Internal server error.";
  let statusCode = 500;
  let stack;
  let error;
  if (err instanceof AppError) {
    message = err.message;
    statusCode = err.statusCode;
    stack = err.stack;
  } else if (err instanceof ZodError) {
    message = "Invalid input data.";
    statusCode = HttpStatus.BAD_REQUEST;
    error = err.issues;
  }
  res.status(statusCode).send({
    success: false,
    statusCode,
    message,
    data: null,
    stack: envVars.NODE_ENV === "development" ? stack : null,
    error,
  });
};

export default globalErrorHandler;
