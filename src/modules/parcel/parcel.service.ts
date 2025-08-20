import { IParcel } from "./parcel.interface";
import { Parcel } from "./parcel.model";
import { createParcelValidationSchema } from "./parcel.validation";

const createParcel = async (payload: IParcel) => {
  const parsedData = createParcelValidationSchema.parse(payload);
  await Parcel.create(parsedData);
  return { message: "Parcel created successfully" };
};
export const ParcelServices = { createParcel };
