"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const AppError_1 = require("../utils/AppError");
const env_config_1 = __importDefault(require("../config/env.config"));
const zod_1 = require("zod");
const httpStatusCodes_1 = require("../utils/httpStatusCodes");
const globalErrorHandler = (err, req, res, next) => {
    let message = "Internal server error.";
    let statusCode = 500;
    let stack;
    let error;
    if (err instanceof AppError_1.AppError) {
        message = err.message;
        statusCode = err.statusCode;
        stack = err.stack;
    }
    else if (err instanceof zod_1.ZodError) {
        message = "Invalid input data.";
        statusCode = httpStatusCodes_1.HttpStatus.BAD_REQUEST;
        error = err.issues;
    }
    res.status(statusCode).send({
        success: false,
        statusCode,
        message,
        data: null,
        stack: env_config_1.default.NODE_ENV === "development" ? stack : null,
        error,
    });
};
exports.globalErrorHandler = globalErrorHandler;
exports.default = exports.globalErrorHandler;
