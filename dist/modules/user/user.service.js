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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const AppError_1 = require("../../utils/AppError");
const httpStatusCodes_1 = require("../../utils/httpStatusCodes");
const user_model_1 = require("./user.model");
const user_validation_1 = require("./user.validation");
const createUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const userExists = yield user_model_1.User.findOne({ email: payload.email });
    if (userExists)
        throw new AppError_1.AppError("User already exists", httpStatusCodes_1.HttpStatus.CONFLICT);
    const parsedData = user_validation_1.createUserValidationSchema.parse(payload);
    yield user_model_1.User.create(parsedData);
    return { message: "User created successfully" };
});
exports.UserServices = { createUser };
