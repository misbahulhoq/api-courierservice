import express, { Express } from "express";
import cors from "cors";
import { swaggerUiServe, swaggerUiSetup } from "./config/swagger.config";
import { connectDB } from "./config/db.config";
import AppRoutes from "./routes";
import globalErrorHandler from "./middlewares/error.middleware";
import seedAdmin from "./utils/seedAdmin";

const app: Express = express();

app.use(express.json());
app.use(cors());

connectDB();
seedAdmin();
app.use("/api/v1", AppRoutes);
app.use("/api-docs", swaggerUiServe, swaggerUiSetup);

app.use(globalErrorHandler);
export default app;
