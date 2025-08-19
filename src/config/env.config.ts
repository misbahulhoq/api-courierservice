import dotenv from "dotenv";
dotenv.config();

interface EnvVars {
  PORT: number;
  MONGO_URI: string;
  ADMIN_EMAIL: string;
  ADMIN_PASSWORD: string;
  BCRYPT_SALT_ROUNDS: number;
  JWT_SECRET: string;
  NODE_ENV: "development" | "production";
}

const PORT = (process.env.PORT || 4000) as number;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL as string;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD as string;
const BCRYPT_SALT_ROUNDS = (process.env.BCRYPT_SALT_ROUNDS || 10) as number;
const JWT_SECRET = process.env.JWT_SECRET as string;
const NODE_ENV = process.env.NODE_ENV as "development" | "production";

export const envVars: EnvVars = {
  PORT,
  MONGO_URI,
  ADMIN_EMAIL,
  ADMIN_PASSWORD,
  BCRYPT_SALT_ROUNDS,
  JWT_SECRET,
  NODE_ENV,
};

Object.keys(envVars).map((key) => {
  if (!envVars[key as keyof EnvVars]) {
    throw new Error(`Missing environment variable: ${key}`);
  }
});

export default envVars;
