import { Router } from "express";
import { ParcelController } from "./parcel.controller";
import { AuthMiddlewares } from "../../middlewares/auth.middleware";

const router = Router();

router.post(
  "/create",
  AuthMiddlewares.verifyLogin,
  ParcelController.createParcel
);

export const ParcelRoutes = router;
