import request from "supertest";
import app from "../../app";
import mongoose from "mongoose";
import { IParcel } from "./parcel.interface";
import { HttpStatus } from "../../utils/httpStatusCodes";
import { Parcel } from "./parcel.model";

describe("Parcel API - /api/v1/parcel/..", () => {
  const parcel: IParcel = {
    user: new mongoose.Types.ObjectId(),
    deliveryAgent: new mongoose.Types.ObjectId(),
    pickupAddress: "Savar, Dhaka",
    deliveryAddress: "Pabna, Rajshani",
    status: "pending",
    type: "medium",
    weight: 20,
  };
  beforeAll(async () => {});
  afterAll(async () => {
    await Parcel.deleteOne({
      pickupAddress: "Savar, Dhaka",
      deliveryAddress: "Pabna, Rajshani",
      status: "pending",
      type: "medium",
      weight: 20,
    });
  });

  it("Should book a parcel if valid data is passed.", async () => {});
  it("Should throw an error if tried to create parcel while not logged in", async () => {
    const response = await request(app)
      .post("/api/v1/parcel/create")
      .send(parcel);

    expect(response.status).toBe(HttpStatus.FORBIDDEN);
  });
});
