"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserValidationSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.createUserValidationSchema = zod_1.default.object({
    name: zod_1.default.string().min(3, "Name must be at least 3 characters."),
    email: zod_1.default.string().min(4),
    password: zod_1.default.string().min(6, "Password must be at least 3 characters long."),
});
