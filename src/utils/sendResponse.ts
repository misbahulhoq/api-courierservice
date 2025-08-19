import { Response } from "express";

interface IResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: any;
}
export const sendResponse = (res: Response, payload: IResponse) => {
  res.status(payload.statusCode).send(payload);
};

export default sendResponse;
