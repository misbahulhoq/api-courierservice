import request from "supertest";
import app from "../../app";
import { User } from "./user.model";

describe("User API - /api/v1/user ", () => {
  beforeAll(async () => {
    console.log("Setting up user tests...");
  });
  afterAll(async () => {
    console.log("Cleaning up user tests...");
    await User.deleteOne({ email: "test@gmail.com" });
  });
  it("should create a new user if valid data is passed on POST /", async () => {
    const response = await request(app)
      .post("/api/v1/auth/signup")
      .send({
        name: "Test User",
        email: "test@gmail.com",
        password: "thebigman",
      })
      .expect(201);
    console.log(response.status, response.statusCode);

    expect(response).toBeDefined();
    expect(response.body).toHaveProperty("success");
    // expect(response.status).toBe(201);
  });

  it("should return 409 if tried to insert one user with same email", async () => {
    const response = await request(app)
      .post("/api/v1/auth/signup")
      .send({
        name: "Test User",
        email: "test@gmail.com",
        password: "thebigman",
      })
      .expect(409);
    expect(response).toBeDefined();
  });
});
