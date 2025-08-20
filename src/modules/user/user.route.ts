import { Router } from "express";
import { UserController } from "./user.controller";
import { AuthMiddlewares } from "../../middlewares/auth.middleware";

const router = Router();

router.post("/signup", UserController.createUser);
router.post(
  "/create-delivery-agent",
  AuthMiddlewares.verifyAuth("admin"),
  UserController.createDeliveryAgent
);
router.post("/login", UserController.login);

export const UserRoutes = router;
