import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

export const envVars = { PORT, MONGO_URI, ADMIN_EMAIL, ADMIN_PASSWORD };
