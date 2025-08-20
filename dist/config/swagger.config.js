"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerUiSetup = exports.swaggerUiServe = exports.swaggerSpec = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Courier Management API",
            version: "1.0.0",
            description: "Courier Management API documentation",
        },
        servers: [
            {
                url: "http://localhost:4000",
                description: "Development server",
            },
            {
                url: "https://courier-management-api.onrender.com",
                description: "Production server",
            },
        ],
    },
    apis: ["./src/routes/*.ts"],
};
exports.swaggerSpec = (0, swagger_jsdoc_1.default)(swaggerOptions);
exports.swaggerUiServe = swagger_ui_express_1.default.serve;
exports.swaggerUiSetup = swagger_ui_express_1.default.setup(exports.swaggerSpec);
