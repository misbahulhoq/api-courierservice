import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Courier Management API",
      version: "1.0.0",
      description: "Courier Management API documentation",
    },
    servers: [
      {
        url: "http://localhost:4000",
        description: "Development server",
      },
      {
        url: "https://courier-management-api.onrender.com",
        description: "Production server",
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
};

export const swaggerSpec = swaggerJsDoc(swaggerOptions);
export const swaggerUiServe = swaggerUi.serve;
export const swaggerUiSetup = swaggerUi.setup(swaggerSpec);
