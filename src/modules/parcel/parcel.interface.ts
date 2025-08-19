import { Types } from "mongoose";
export type ParcelType = "small" | "medium" | "large";

export interface IParcel {
  user: Types.ObjectId;
  deliveryAgent: Types.ObjectId;
  pickupAddress: string;
  deliveryAddress: string;
  type: ParcelType;
  weight: number;
  status?: "pending" | "picked_up" | "in_transit" | "delivered" | "failed";
  createdAt?: Date;
  updatedAt?: Date;
}
