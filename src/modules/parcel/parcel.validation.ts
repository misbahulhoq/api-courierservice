import { Types } from "mongoose";
import z from "zod";
import { IParcel } from "./parcel.interface";

const objectId = z.custom<string>(
  (val) => typeof val === "string" && /^[a-f\d]{24}$/i.test(val),
  { message: "Invalid ObjectId" }
);

export const createParcelValidationSchema = z.object({
  user: objectId,
  deliveryAgent: objectId,
  pickupAddress: z.string("Pickup address is required."),
  deliveryAddress: z.string("Delivery addess is required."),
  type: z.enum(["small", "medium", "large"]).optional(),
  weight: z.number(),
  status: z
    .enum(["pending", "picked_up", "in_transit", "delivered", "failed"])
    .optional(),
});
