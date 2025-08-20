import z from "zod";

export const createUserValidationSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters."),
  email: z.string().min(4),
  password: z.string().min(6, "Password must be at least 3 characters long."),
  role: z.enum(["customer", "admin", "delivery_agent"]).optional(),
});
