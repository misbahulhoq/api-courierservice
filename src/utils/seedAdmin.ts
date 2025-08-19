import envVars from "../config/env.config";
import { User } from "../modules/user/user.model";

export const seedAdmin = async () => {
  const adminExists = await User.findOne({ email: envVars.ADMIN_EMAIL });
  if (adminExists) return console.log("Admin already exists");
  await User.create({
    name: "Admin",
    email: envVars.ADMIN_EMAIL,
    password: envVars.ADMIN_PASSWORD,
    role: "admin",
  });
  console.log("Admin created successfully");
};
export default seedAdmin;
