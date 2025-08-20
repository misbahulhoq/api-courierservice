"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.envVars = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = (process.env.PORT || 4000);
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const BCRYPT_SALT_ROUNDS = (process.env.BCRYPT_SALT_ROUNDS || 10);
const JWT_SECRET = process.env.JWT_SECRET;
const NODE_ENV = process.env.NODE_ENV;
exports.envVars = {
    PORT,
    MONGO_URI,
    ADMIN_EMAIL,
    ADMIN_PASSWORD,
    BCRYPT_SALT_ROUNDS,
    JWT_SECRET,
    NODE_ENV,
};
Object.keys(exports.envVars).map((key) => {
    if (!exports.envVars[key]) {
        throw new Error(`Missing environment variable: ${key}`);
    }
});
exports.default = exports.envVars;
