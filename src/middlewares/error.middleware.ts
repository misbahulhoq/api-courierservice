import { NextFunction, Request, Response } from "express";

export const globalErrorHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let message = "Internal server error.";
  let statusCode = 500;
  res.status(statusCode).send({
    success: false,
    statusCode,
    message,
    data: null,
  });
};

export default globalErrorHandler;
