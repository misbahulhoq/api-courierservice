"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddlewares = void 0;
const AppError_1 = require("../utils/AppError");
const httpStatusCodes_1 = require("../utils/httpStatusCodes");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_config_1 = __importDefault(require("../config/env.config"));
const verifyLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authToken = req.cookies.authorization;
        if (!authToken) {
            throw new AppError_1.AppError("You are not allowed to access.", httpStatusCodes_1.HttpStatus.FORBIDDEN);
        }
        jsonwebtoken_1.default.verify(authToken, env_config_1.default.JWT_SECRET);
        next();
    }
    catch (err) {
        throw new AppError_1.AppError("Forbidden.", httpStatusCodes_1.HttpStatus.FORBIDDEN);
    }
});
exports.AuthMiddlewares = { verifyLogin };
