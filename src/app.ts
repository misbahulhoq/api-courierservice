import express, { Express } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { swaggerUiServe, swaggerUiSetup } from "./config/swagger.config";
import { connectDB } from "./config/db.config";
import AppRoutes from "./routes";
import globalErrorHandler from "./middlewares/error.middleware";
import seedAdmin from "./utils/seedAdmin";

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

connectDB();
seedAdmin();
app.get("/", (req, res) => {
  res.send({
    success: true,
    message: "Server is running.",
    statusCode: 200,
    data: null,
  });
});
app.use("/api/v1", AppRoutes);
app.use("/api-docs", swaggerUiServe, swaggerUiSetup);

app.use(globalErrorHandler);
export default app;
