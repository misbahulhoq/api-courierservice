"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("../modules/user/user.route");
const parcel_route_1 = require("../modules/parcel/parcel.route");
const AppRoutes = (0, express_1.Router)();
const routes = [
    {
        url: "/auth",
        router: user_route_1.UserRoutes,
    },
    {
        url: "/parcel",
        router: parcel_route_1.ParcelRoutes,
    },
];
routes.forEach((route) => AppRoutes.use(route.url, route.router));
exports.default = AppRoutes;
