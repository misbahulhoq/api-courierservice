"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const app_1 = __importDefault(require("./app"));
const env_config_1 = require("./config/env.config");
let server = app_1.default.listen(env_config_1.envVars.PORT, () => {
    console.log("server is running on port", env_config_1.envVars.PORT);
});
exports.server = server;
