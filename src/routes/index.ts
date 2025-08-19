import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { ParcelRoutes } from "../modules/parcel/parcel.route";

const AppRoutes = Router();

const routes: { url: string; router: Router }[] = [
  {
    url: "/auth",
    router: UserRoutes,
  },
  {
    url: "/parcel",
    router: ParcelRoutes,
  },
];

routes.forEach((route) => AppRoutes.use(route.url, route.router));

export default AppRoutes;
