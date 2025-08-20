import { Router } from "express";
import { UserController } from "./user.controller";

const router = Router();

router.post("/signup", UserController.createUser);
router.post("/create-delivery-agent", UserController.createDeliveryAgent);
router.post("/login", UserController.login);

export const UserRoutes = router;
