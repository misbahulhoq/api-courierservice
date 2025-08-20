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
const mongoose_1 = __importDefault(require("mongoose"));
const httpStatusCodes_1 = require("../../utils/httpStatusCodes");
const parcel_model_1 = require("./parcel.model");
describe("Parcel API - /api/v1/parcel/..", () => {
    const parcel = {
        user: new mongoose_1.default.Types.ObjectId(),
        deliveryAgent: new mongoose_1.default.Types.ObjectId(),
        pickupAddress: "Savar, Dhaka",
        deliveryAddress: "Pabna, Rajshani",
        status: "pending",
        type: "medium",
        weight: 20,
    };
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () { }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield parcel_model_1.Parcel.deleteOne({
            pickupAddress: "Savar, Dhaka",
            deliveryAddress: "Pabna, Rajshani",
            status: "pending",
            type: "medium",
            weight: 20,
        });
    }));
    it("Should book a parcel if valid data is passed.", () => __awaiter(void 0, void 0, void 0, function* () { }));
    it("Should throw an error if tried to create parcel while not logged in", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default)
            .post("/api/v1/parcel/create")
            .send(parcel);
        expect(response.status).toBe(httpStatusCodes_1.HttpStatus.FORBIDDEN);
    }));
});
