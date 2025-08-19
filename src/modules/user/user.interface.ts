export interface IUser {
  name: string;
  email: string;
  password: string;
  role: "customer" | "admin" | "delivery_agent";
}
