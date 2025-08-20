"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParcelRoutes = void 0;
const express_1 = require("express");
const parcel_controller_1 = require("./parcel.controller");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const router = (0, express_1.Router)();
router.post("/create", auth_middleware_1.AuthMiddlewares.verifyLogin, parcel_controller_1.ParcelController.createParcel);
exports.ParcelRoutes = router;
