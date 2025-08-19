import mongoose, { Schema } from "mongoose";
import { IParcel } from "./parcel.interface";

const parcelSchema = new mongoose.Schema<IParcel>({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  deliveryAgent: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  pickupAddress: {
    type: String,
    required: true,
  },
  deliveryAddress: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["small", "medium", "large"],
    default: "medium",
  },
  weight: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "picked_up", "delivered", "failed"],
    default: "pending",
  },
});

export const Parcel = mongoose.model<IParcel>("Parcel", parcelSchema);
