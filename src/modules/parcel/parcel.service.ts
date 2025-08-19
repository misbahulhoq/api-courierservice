import { IParcel } from "./parcel.interface";
import { Parcel } from "./parcel.model";

const createParcel = async (payload: IParcel) => {
  await Parcel.create(payload);
  return { message: "Parcel created successfully" };
};
export const ParcelServices = { createParcel };
