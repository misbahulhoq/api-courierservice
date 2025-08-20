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
exports.seedAdmin = void 0;
const env_config_1 = __importDefault(require("../config/env.config"));
const user_model_1 = require("../modules/user/user.model");
const seedAdmin = () => __awaiter(void 0, void 0, void 0, function* () {
    const adminExists = yield user_model_1.User.findOne({ email: env_config_1.default.ADMIN_EMAIL });
    if (adminExists)
        return console.log("Admin already exists");
    yield user_model_1.User.create({
        name: "Admin",
        email: env_config_1.default.ADMIN_EMAIL,
        password: env_config_1.default.ADMIN_PASSWORD,
        role: "admin",
    });
    console.log("Admin created successfully");
});
exports.seedAdmin = seedAdmin;
exports.default = exports.seedAdmin;
