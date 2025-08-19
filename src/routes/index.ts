import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";

const AppRoutes = Router();

const routes: { url: string; router: Router }[] = [
  {
    url: "/auth",
    router: UserRoutes,
  },
];

routes.forEach((route) => AppRoutes.use(route.url, route.router));

export default AppRoutes;
