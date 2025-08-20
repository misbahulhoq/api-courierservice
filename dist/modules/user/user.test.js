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
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../app"));
const user_model_1 = require("./user.model");
describe("User API - /api/v1/user ", () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        console.log("Setting up user tests...");
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        console.log("Cleaning up user tests...");
        yield user_model_1.User.deleteOne({ email: "test@gmail.com" });
    }));
    it("should create a new user if valid data is passed on POST /", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default)
            .post("/api/v1/auth/signup")
            .send({
            name: "Test User",
            email: "test@gmail.com",
            password: "thebigman",
        })
            .expect(201);
        console.log(response.status, response.statusCode);
        expect(response).toBeDefined();
        expect(response.body).toHaveProperty("success");
        // expect(response.status).toBe(201);
    }));
    it("should return 409 if tried to insert one user with same email", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default)
            .post("/api/v1/auth/signup")
            .send({
            name: "Test User",
            email: "test@gmail.com",
            password: "thebigman",
        })
            .expect(409);
        expect(response).toBeDefined();
    }));
});
