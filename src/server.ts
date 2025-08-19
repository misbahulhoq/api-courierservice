import app from "./app";
import { envVars } from "./config/env.config";

let server = app.listen(envVars.PORT, () => {
  console.log("server is running on port", envVars.PORT);
});

export { server };
